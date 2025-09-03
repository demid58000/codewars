function stairsIn20(s){
    let totalSum = 0;
    for (let i = 0; i < s.length; i++) {
        totalSum += s[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    }
    return totalSum * 20;
}