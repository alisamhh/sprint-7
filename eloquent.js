MINIMUM

    // Your code here.
    function min(a, b) {
        if (a < b) {
            return a;
        } else if (a > b) {
            return b;
        } else {
            return "They are equal."
        }
    }

    console.log(min(0, 10));
    // → 0
    console.log(min(0, -10));
    // → -10

RECURSION

    function isEven(n) {
        if (n == 0) {
            return true;
        } else if (n == 1) {
            return false;
        } else if (n < 0) {
            return isEven(-n);
        } else {
            return isEven(n - 2);
        } 
    }

    console.log(isEven(50));
    // → true
    console.log(isEven(75));
    // → false
    console.log(isEven(-1));
    // → ??

BEAN COUNTING

    // Your code here.
    function countBs(str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] === "B") {
                count++;
            }
        }
        return count;
    } 

    function countChar(str, character) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] === character) {
                count++;
            }
        }
        return count;
    }

    console.log(countBs("BBC"));
    // → 2
    console.log(countChar("kakkerlak", "k"));
    // → 4