// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

const convertFahrToCelsius = (f) => {
    const type = Object.prototype.toString.call(f).slice(1,-1).split(' ')[1];

    // test for right input parameter
    if ((type === "Number") || ((type === "String") && !isNaN(Number(f)))) {
        return Number(((f - 32) * 5/9).toFixed(4));
    } else {
        return `${JSON.stringify(f).replace(/\"/g, "'")} is not a valid number but a/an ${type}`;
    }
}

// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers 
// from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.
const checkYuGiOh = (n) => {
    const type = Object.prototype.toString.call(n).slice(1,-1).split(' ')[1];

    // test for right input parameter
    if ((type === "Number") || ((type === "String") && !isNaN(Number(n)))) {
        // creates an array of numbers from 1 to n
        const newArray = Array.from(new Array(n), (x, i) => i + 1).map(replace);

        // callback function to replace the multiples of 2, 3, and 5
        function replace(item) {
            if ((item % 2 === 0) && (item % 3 === 0) && (item % 5 === 0)) {
                return "yu-gi-oh";
            } else if ((item % 2 === 0) && (item % 3 === 0)) {
                return "yu-gi";
            } else if ((item % 2 === 0) && (item % 5 === 0)) {
                return "yu-oh";
            } else if ((item % 3 === 0) && (item % 5 === 0)) {
                return "gi-oh";
            } else if (item % 2 === 0) {
                return "yu";
            } else if (item % 3 === 0) {
                return "gi";
            } else if (item % 5 === 0) {
                return "oh";
            } else {
                return item;
            }
        };

        return newArray;
    } else {
        return `invalid parameter: ${JSON.stringify(n).replace(/\"/g, "'")}`;
    }
    
}