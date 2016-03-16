function repeatPhrase(phrase, n) {
    for (i = 0; i < n; i++){
        console.log(phrase);
    }
}

repeatPhrase ("Hello", 5);

function toTheNthPower(number, power) {
    return Math.pow(number, power);
}

toTheNthPower(4, 5);

function areaOfACircle(radius) {
    return 3.14159 * Math.pow(radius, 2);
}

areaOfACircle(2);
// displays approximately 12.57

function pythagoreanTheorem(a, b) {
    x = (a * a) + (b * b);
    return Math.sqrt(x);
}

pythagoreanTheorem(3, 4);
// should display 5;

function toTheNthPower(number, power) {
    var x = 1;
    for (i = 0; i < power; i++){
        x = x * number;
    }
    return x;
}

toTheNthPower(4, 5);
// displays 1024

function isXEvenlyDivisibleByY(x, y) {
    return !(x % y);
}

isXEvenlyDivisibleByY(99, 3);
// displays true

function countVowels(word) {
    var ar = word.split("");
    var count = 0;
    for (i = 0; i < ar.length; i ++){
        if ((ar[i] == "a") || (ar[i] == "e") || (ar[i] == "i") || (ar[i] == "o") || (ar[i] == "u") || (ar[i] == "y")){
            count += 1;
        }
    }
    return count;
}
countVowels("stealing");
// displays 3

function printTriangle(length) {
    var x = "";
    for (i = 0; i < length; i ++){
        x = x + "*";
        console.log(x);
    }
}

printTriangle(3);

function combineWords(word1, word2) {
    return word1 + word2;
}

combineWords('dog', 'house');
