function cockroachSpeed(s) {
    //Good Luck!
    const speedInMetersPerSecond = s * 1000 / (60 * 60);
  
    // Переводим скорость из м/с в см/с
    const speedInCentimetersPerSecond = speedInMetersPerSecond * 100;
  
    // Округляем вниз до ближайшего целого числа
    return Math.floor(speedInCentimetersPerSecond);
    
  }