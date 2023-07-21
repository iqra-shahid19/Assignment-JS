// =========================Question no 1================================
// Write a function that displays current date & time in your browser.
// function tellTime(){
//     let today= new Date();
//     document.write(today);
// }
// tellTime()

// ===================Question no 2==============================
// Write a function that takes first & last name and then it greets the user using his full name.
// function greetUser(){
//    let firstName=prompt('Write your first name');
//    let secondName=prompt('Write your second name');
//    alert('Hello '+firstName+' '+secondName)
// }
// greetUser();

// ========================Question no 3===========================
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function sum(){
//     let firstNum=+prompt('Enter first number');
//     let secondNum=+prompt('Enter Second number');
//     let result=firstNum+secondNum;
//     alert('The sum of '+firstNum+' and '+secondNum+' is '+result)
// }
// sum();

// ================================Question no 4===============================
// Write a function that takes three arguments num1, num2 & operator & compute the desired 
// operation. Return and show the desired result in your browser.
// function calculator(num1,opera,num2){
//     if(opera==='+'){
//         let result= num1+num2;
//         alert(result)
//     }
//     else if(opera==='-'){
//         let result= num1-num2;
//         alert(result)
//     }
//     else if(opera==='*'){
//         let result= num1*num2;
//         alert(result)
//     }
//     else if(opera==='/'){
//         let result= num1/num2;
//         alert(result)
//     }
//     else{
//         alert('Invalid Operator')
//     }
// }
// let firstNumber=+prompt('Enter first number');
// let operator=prompt('Enter operator');
// let secondNumber=+prompt('Enter Second number');
// calculator(firstNumber,operator,secondNumber);

// =============================Question no 5=================================
// Write a function that squares its argument.
// Write a function that squares its argument. 

// function square(num){
//     let square=num**2;
//     alert(square)
// }
// let number=+prompt('Enter number to be square')
// square(number);

// =========================Question no 6=========================
// Write a function that computes factorial of a number.
// function factorial(){
// let n = +prompt('enter n')
// let fact = 1;
// if (n === 1 || n === 0) {
// }
// else {
//     for (let i = n; i >= 1; i--) {
//         fact = fact * i
//     }
// }
// document.write(fact)
// }
// factorial()


// ==========================Question no 7=============================
// Write a function that take start and end number as inputs & display counting in your browser.
// function counting(start,end){
//     for(let i = start; i <= end; i++ ){
//         document.write(i + '<br>');
//     }
// }
// let start = +prompt("Enter start number for counting:");
// let end = +prompt("Enter end number for counting:");
// counting(start,end);

// ==================================Question no 8===============================
// Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// function calculateHypotenuse(base, perpendicular) {
//     let base, perpendicular;
//     function calculateSquare(num) {
//         num = num * num;
//         return num;
//     }
//     base = calculateSquare(base);
//     perpendicular = calculateSquare(perpendicular);
//     let hyp = base + perpendicular;
//     return hyp;

// }

// let base = +prompt('Enter base of right angle triangle');
// let perpendicular = +prompt('Enter perpendicular of right angle triangle');
// let hyp = calculateHypotenuse(base, perpendicular)
// alert('The hypotenuse of right angle triangle is ' + hyp)

// =========================Question no 9================================
// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// function areaCalculate(width,height){
//     let A=width*height;
//     return A;
// }
// let width=+prompt('Enter width of triangle');
// let height=+prompt('Enter height of triangle');
// let result=areaCalculate(width,height);
// document.write(result)

// ===========================Question no 10===============================
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
// function palindrome(string) {
//       let check = '';
//       for (let i = string.length - 1; i >= 0; i--) {
//             check += string[i]
//       }
//       if (string === check) {
//             alert(string + ' is a plindrome word')
//       }
//       else {
//             alert(string + ' is  not a plindrome word')

//       }
// }
// let str = prompt('Write any word')
// palindrome(str);

// =============================Question no 11===============================
// Write a JavaScript function that accepts a string as a parameter and converts the first 
// letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// function UpperCase(str) {
//     let arr = str.split(' ');
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//     }
//     return newArray.join(' ')

// }

// let str = 'the quick brown fox'
// let result = UpperCase(str)
// document.write('EXAMPLE  SRING :' + str + '<br>')
// document.write('EXPECTED  SRING :' + result + '<br>')

// ========================Question no 12==============================
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// function longest(str) {
//     let split = str.split(' ');
//     let first = split[0].length;
//     for (let i = 0; i < split.length; i++) {
//         if (first < split[i].length) {
//             first = split[i]
//         }
//     }
//     return first;
// }
// let str = 'Web Development Tutorial ';
// let result = longest(str);
// document.write('EXAMPLE  SRING :' + str + '<br>')
// document.write('EXPECTED  SRING :' + result + '<br>')

// ==========================Question no 13==============================
// Write a JavaScript function that accepts two arguments, a string and a letter and the 
// function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// function count(str, letter) {
//     let find=0;   
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             find += 1;
//         }
//     }
//     return find
// }
// let str = 'JSResourceS.com';
// let letter = 'o'
// let result = count(str, letter);
// document.write('The occurence of o in this string is ' + result)

// ===============================Question no 14==============================
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// function calcCircumference(value){
//     let circumference=2*3.141*value;
//     return circumference
// }
//  function calcArea(value){
//      let area=3.141*(value*value);
//      return area
//  }
// let radius=+prompt('Enter radius of circle ');
// let circumference=calcCircumference(radius);
// let area=calcArea(radius);
// document.write('The Circumference of circle is '+circumference+'<br>')
// document.write('The Area of circle is '+area+'<br>')
