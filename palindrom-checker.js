function checkPalindrome(inputString) {
    var str = inputString.split('').reverse().join('');
    return str === inputString;  
}
