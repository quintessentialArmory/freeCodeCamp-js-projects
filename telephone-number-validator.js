function telephoneCheck(str) {
  str = str.replace(/\s/g, '');
  const regex = /^1?(\(\d{3}\)|\d{3}-|\d{3})\d{3}-?\d{4}$/;
  return regex.test(str);
}
