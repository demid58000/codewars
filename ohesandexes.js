function XO(str) {
    let res = str.toLowerCase()
    let counterX = 0
    let counterO = 0
    for (let i = 0; i < str.length; i++) {
        if (res[i] === 'x') counterX += 1
        if (res[i] === 'o') counterO += 1
    }
    if (counterX === counterO) {
        return true
    } else return false
}