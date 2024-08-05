function feast(beast, dish) {
    //your function here
      if (beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1)) {
        return true
      } else {
        return false
      }
    }