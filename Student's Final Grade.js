function finalGrade (exam, projects) {
    // final grade
    if (exam > 90 || projects > 10) {
          return 100;
      }
      // Check if the exam grade is more than 75 and the number of completed projects is at least 5.
      else if (exam > 75 && projects >= 5) {
          return 90;
      }
      // Check if the exam grade is more than 50 and the number of completed projects is at least 2.
      else if (exam > 50 && projects >= 2) {
          return 75;
      }
      // If none of the above conditions are met, the final grade is 0.
      else {
          return 0;
      }
  }