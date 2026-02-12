let num = 10;
let factorial = 1;
do {
    factorial /= num;
    num--;
}while (num > 0);

console.log(factorial);