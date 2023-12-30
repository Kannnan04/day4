
            // Do the below programs in arrow functions.


        //    1. Print odd numbers in an array

        let arr = [2,3,4,56,7,8,9,3]
        

        let result = (odd) => {
            for(i=0 ; i < arr.length; i++) {
                if(odd %2 ==0){
        
                    return`${odd} is even`
                }
            }
            return`${odd} is odd `
        }
        console.log(result(7))


    //    2. Convert all the strings to title caps in a string array

            // place("chennai");

            // let results = (str) => {
            // let upper = str.toUpperCase().split(" ")
            // for (let i=0; i < str.length; i++ ){
            //     upper[i] = upper[i][0].toUpperCase + upper[i].slice(1)
            // }
            // // return upper
            // }
            // console.log(result(place))


// 3. Sum of all numbers in an array

                let number = [5,6,2,4,73,9];

                let sum = eval(number.join("+"));
                console.log(sum)


                // 4.Return all the prime numbers in an array
                let value = [8,52,35,64,2,5,63,]

                let primeNumber = (n) => {
                        
                    // if (n<2)
                    // return `${n} is not a prime number`
                    
                    for (i=2; i<n; i++) {
                        if (n % i ===0){
                            return `${n}is not a prime number`
                        }
                    }
                    return `${n} is a prime number`
                }
                console.log(primeNumber(63))


// 5.Return all the palindromes in an array

        
                let string= "abba"
                            
                let palindrom = (str) => {
                let left= 0;
                let right= str.length-1;
                
                while(left < right) {
                        if(str[left] !== str[right]){
                            return false;
                            
                        }
                        left ++;
                        right --;
                        
                }
                return string;
                }
                console.log(palindrom(string));