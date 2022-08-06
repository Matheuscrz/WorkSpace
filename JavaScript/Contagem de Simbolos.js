const f = (str) => {
    if (str == '') return 0
    else {
        const ult = str.slice(-1)
        if (ult == '!' ||
            ult == '?' ||
            ult == '.')
            return 1 + f(str.slice(0, -1))
        else return f(str.slice(0, -1))
    }
}
console.log(f('Olá, cara! Como vai você? Por aqui, tudo bem.'))