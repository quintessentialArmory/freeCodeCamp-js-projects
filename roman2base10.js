function convertToRoman(num) {

  const ROMANS = [
    {   divisor: 1000,
        symbols: ["M","MM","MMM"]	},
    {   divisor: 100,
        symbols: ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]	},
    {   divisor: 10,
        symbols: ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]	},
    {   divisor: 1,
        symbols: ["I","II","III","IV","V","VI","VII","VIII","IX"]	}
  ];

  if (num > 3999) return;
  let str = '';
  let k;
  for (let roman of ROMANS) {
    k = -1;
    while (num >= roman.divisor) {
      num -= roman.divisor;
      k++;
    };
    if (k > -1) str += roman.symbols[k];
  }
  return str;
}
