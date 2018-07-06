function checkCashRegister(price, cash, cid) {

  const DENS = [ // value of each denomination in cents
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1]
  ];

  // I'm going to calculate everything in cents btw
  price = Math.round(price*100);
  cash = Math.round(cash*100);
  let change = cash - price;

  // check if there is enough money
  let total = 0;
  for (let regden of cid) {
    total += regden[1];
  }
  total = Math.round(total*100);
  if (change > total) return {
    status: "INSUFFICIENT_FUNDS",
    change: []
  };
  if (change == total) return {
    status: "CLOSED",
    change: cid
  };

  // output drawer
  let changeDrawer = [];
  loop: for (let den of DENS) {
    if (change < den[1]) continue;

    // search for the right denomination
    for (let inDrawer of cid) if (den[0] == inDrawer[0]) {
      let m = Math.round(inDrawer[1]*100);
      if (change < m) {

        // calculate the amount to be taken and put aside the
        // rest for further processing
        let n = change;
        change = change % den[1];
        n -= change;

        // take money from the drawer and save the rest
        inDrawer[1] = (m-n)/100;
        // put the taken money in the output drawer
        changeDrawer.push([den[0], n/100]);
      }
      else {
        change -= m;
        inDrawer[1] = 0; // empty the drawer
        changeDrawer.push([den[0], m/100]);
      }
      if (change == 0) break loop;
      continue loop;
    }
  }
  if (change > 0) {
    // return everything to the drawer
    loop: for (let inDrawer of cid) {
      for (let inChange of changeDrawer) {
        if (inChange[0] == inDrawer[0]) {
          inDrawer[1] += inChange[1];
          continue loop;
        }
      }
    }
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  return {
    status: "OPEN",
    change: changeDrawer
  };
}

{
  let drawer = [["TEN", 20], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  console.log('test:');
  console.log(checkCashRegister(15, 50, drawer));
  console.log(drawer);
}
