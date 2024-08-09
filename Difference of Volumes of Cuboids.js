function findDifference(a, b) {
    //loading...
    const volumeA = a[0] * a[1] * a[2];
      
      // Calculate the volume of the second cuboid
      const volumeB = b[0] * b[1] * b[2];
  
      // Return the absolute difference between the two volumes
      return Math.abs(volumeA - volumeB);
  }