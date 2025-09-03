function sumMix(x){
    let newX= x.map(i => parseInt(i));
    summa = 0;
    for (let i = 0; i < newX.length; i ++) {
      summa += newX[i];
    }
    return summa;
  }

  