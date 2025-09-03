function differenceInAges(ages){
    let minimum = Math.min(...ages);
    let maximum = Math.max(...ages);
    return [minimum, maximum, maximum - minimum]
}
