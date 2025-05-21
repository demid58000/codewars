function reverse(string){
    //your code here
    let words = string.trim().split(/\s+/);
  
    
    words.reverse();
  
    
    return words.join(' ');
  }