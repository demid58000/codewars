function findShort(s) {
    let words = s.split(' ')
    let minLength = words[0].length
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < minLength) {
            minLength = words[i].length
        }
    }
    return minLength
}