function palindrome(str) {
  str = str.replace(/[\W_]/g, '').toLowerCase();
  const n = Math.floor(str.length/2);
  for (let i = 0, j = str.length-1; i < n; i++, j--) {
    if (str.charAt(i) != str.charAt(j)) return false;
  }
  return true;
}
