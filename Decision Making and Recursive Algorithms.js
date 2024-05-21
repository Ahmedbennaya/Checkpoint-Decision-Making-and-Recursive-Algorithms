// function LeapYearChecke(year) {
//     return year%4==0&& year%100!== 0|| year%400==0
// }

// console.log(LeapYearChecke(2020))
// console.log(LeapYearChecke(2019))
// console.log(LeapYearChecke(2022))
// console.log(LeapYearChecke(2025))

// function convertAgetoprice(age) {
//      // Check if age is less than or equal to 12.
//     if(age<=12){
//         return "10$"
//         // Check if age is between 13 and 17
//     }else if (age >= 13 && age <= 17) {
//        return("$15");
//     //    If age is 18 or older.
//     }else if(age>=18){
//         return"20$"
//     }
// }

// console.log(convertAgetoprice(14))


// Function to advise on clothing based on temperature and rain
// function clothingAdviser(temperature, isRaining) {
//     if (temperature < 10) {
//         if (isRaining) {
//             return "You should wear a warm coat, hat, gloves, and waterproof boots.";
//         } else {
//             return "You should wear a warm coat, hat, and gloves.";
//         }
//     } else if (temperature >= 10 && temperature < 20) {
//         if (isRaining) {
//             return "You should wear a jacket, umbrella, and waterproof shoes.";
//         } else {
//             return "You should wear a light jacket or sweater.";
//         }
//     } else {
//         if (isRaining) {
//             return "You should carry an umbrella and wear waterproof shoes.";
//         } else {
//             return "You can wear light clothing such as a t-shirt and shorts.";
//         }
//     }
// }
// console.log(clothingAdviser(12))


// function fibonacci(n) {
//    // if n is 0 or 1, return n
//     if (n <= 1) {
//         return n;
//     }
//     // return the sum of  numbers
//     else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }


// console.log(fibonacci()); 

// function power(base, exponent) {
//     //if the exponent is 0, return 1
//     if (exponent === 0) {
//         return 1;
//     }
//    //multiply the base by itself (base^exponent) recursively
//     else {
//         return base * power(base, exponent - 1);
//     }
// }

// console.log(power(2, 3)); 
// console.log(power(5, 2)); 
// console.log(power(3, 4)); 

// function isPalindrome(str) {
   
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

   
//     if (str.length <= 1) {
//         return true;
//     } else {

//         if (str[0] !== str[str.length - 1]) {
//             return false;
//         } else {
            
//             return isPalindrome(str.substring(1, str.length - 1));
//         }
//     }
// }


// console.log(isPalindrome("A man, a plan, a canal, Panama")); 
// console.log(isPalindrome("racecar")); 
// console.log(isPalindrome("hello")); 
