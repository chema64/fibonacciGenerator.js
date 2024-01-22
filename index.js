function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here
  fArray = [];
  fNum = 0;
  // console.log(fNum);
  for(var i = 0; i < n; i++) {
    if(i === 0) {
      fArray.push(i);
      // console.log(i);
      
    }else if(i === 1) {
      fArray.push(i);
      // console.log(i);
      // console.log(fArray);
      }
    else if(i > 1) {
      console.log("loop " + i);
      console.log("fArray.length  - 1 " + (fArray.length - 1));
      console.log("fArray.length - 2 " + (fArray.length - 2));
      fNum = fArray[fArray.length - 1] + fArray[fArray.length - 2];
       // console.log("FNum "+fNum);
      fArray.push(fNum);
      //console.log("fArray length "+ fArray.length);
      // console.log(fArray);
      
      //console.log(fArray[1]);
      // fNum = fArray[0] + fArray[1];
      // console.log(fNum);
    }
  }
  console.log(fArray);
  return(fArray);
    
    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator (10);