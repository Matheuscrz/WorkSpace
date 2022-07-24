const f = (n) => {
    if (n==1) {return 2}
    else {return f(n-1)*2}
}
console.log(f(7))