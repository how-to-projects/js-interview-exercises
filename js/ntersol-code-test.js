
  class DenomReturn {
    constructor(returnVal) {
      this.returnVal = returnVal;
    }
    
    // if 50 is returned send back 2 20s, 2 5s
     denomArr = [100, 20, 5];
    
    calculateReturn(a,b) {
      
      let remainder = a - b;
      let returnDenomArr = [];
      
      // loop over denomArr and add things up until they equal the remainder
      
       while(remainder > 0) {
         
          returnDenoArra = denomArr.filter((itm, idx, arr) => {
            
            if (itm < remainder) {
              // substract item from remainder
              remainder = remainder - itm;
              
              //return itm that works
              return itm;
            }
          })
        }
      
      
      return returnDenomArr
    }
  }
