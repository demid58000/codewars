function tripleTrouble(one, two, three){
    //Solution
    let result = "";
    
    
    let length = one.length;
    
    
    for (let i = 0; i < length; i++) {
      
      result += one[i] + two[i] + three[i];
    }
    
    
    return result;
   }