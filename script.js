

            // Do the below programs in anonymous function & IIFE


//  1. Print odd numbers in an array


let number = 15;
 if(number % 2 ==0){
    console.log("even")
 }else{
    console.log("odd")
 }

//   2. Convert all the strings to title caps in a string array
   let str = "kannan"

    function toTitleCase(str) {
      return str.replace(
         /\w\S*/g,
         function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(0);
         }

         
      );
    }
    console.log(str)
   //  3. Sum of all numbers in an array
       
         let array =[1,2,3,4,5];
         let sum = eval(array.join("+"))
         console.log(sum)

   //  4.Return all the prime numbers in an array

         function prime(n){
        
            // if (n<2)
            // return `${n} is not a prime number`
            
            for (i=2; i<n; i++) {
                if (n % i ===0){
                    return `${n}is not a prime number`
                }
            }
            return `${n} is a prime number`
        }
        console.log(prime(43))

      //5. Return all the palindromes in an array
      
           
               let string= "abba"
               
               function palindrom(str){
                  let left= 0;
                  let right= str.length-1;
                  
                  while(left < right) {
                        if(str[left] !== str[right]){
                           return false;
                           
                        }
                        left ++;
                        right --;
                        
                  }
                  return true;
               }
               console.log(palindrom(string));

   // 6.Return median of two sorted arrays of the same size.

               let num1 = [1,3,5,7];
               let num2 = [2,4,6,8];

               let sortArray = function(num1,num2){
                  let add =num1.concate(num2);
                  arr.sort((a,b)=>(a-b));
                  let n = arr.length;
                  if(n%2===0){
                     return((arr[n/2]+arr[n/2-1])/2);

                  }
                  else{
                     return arr[Math.floor(n/2)];
                  }
               }

   
// 7.Remove duplicates from an array

         const duplicates = function(arr){
            let result = [];
            for(let ind in arr){

            if(ind == arr.indexOf(arr[ind])){
               result.push(arr[ind])
            }
          }
            return result;
         };



         let arr = [4,7,5,6,3,7,23,6,1,9,1,3]

         let ans = duplicates(arr);
         console.log (ans)
   


// 7.Rotate an array by k times

     let numbers = [2,4,5,7,9,3];

     function Rotate(arr) {
      for(i=0; i< arr.length; i++){
         arr.unshift(arr.pop());
         console.log(arr);
      }
     }
     console.log(Rotate(numbers));

     