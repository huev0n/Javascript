let factorial = 1;
let i = 2;
while (true){
    factorial*=i;
    i++;
    if (i>10){
        break;
    }
}
console.log(factorial);