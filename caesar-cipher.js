function rot13(str) { // LBH QVQ VG!

    let output = '';
    for (let i = 0, n; i < str.length; i++) {
        n = str.charCodeAt(i);
        if (n < 91 && n > 64) {
            if (n > 77) n -= 13;
            else n += 13;
            output += String.fromCharCode(n);
        }
        else output += str.charAt(i);
    }

    return output;
}
