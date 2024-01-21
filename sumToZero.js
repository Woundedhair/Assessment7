function addToZero(arrOfNums) {
    for (const firstNum of arrOfNums) {
        for (const secondNum of arrOfNums) {
            console.log(firstNum, secondNum);
            if (firstNum + secondNum === 0) {
                return true;
        }
    }
}
return false;
}
console.log(addToZero([1, 2, 3, -2]));

// Runtime = O(n^2)