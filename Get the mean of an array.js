function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = 0;
    let lenMarks = marks.length
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i]
    }
    return Math.floor(sum / lenMarks)
  }