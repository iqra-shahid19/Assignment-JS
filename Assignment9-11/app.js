// ===========================Question no 1==============================
// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// let city=prompt('Enter ypur city name');
// if(city==='Karachi'||city==='karachi'){
//     alert('Welcome to city of lights')
// }

// ===========================Question no 2===============================
// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am
// let gender=prompt('Enter your gender');
// if(gender==='male'||gender==='Male'){
//     alert('Good Morning Sir')
// }
// else if(gender==='female'||gender==='Female'){
//     alert('Good Morning Ma’am')
// }

// ===========================Question no 3==============================
// Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Signal color         Message
//     Red              Must Stop
//     Yellow         Ready to move
//     Green            Move now
// let color=prompt('Enter the traffic color');
// if(color==='red'||color==='Red'){
//     alert('Must stop')
// }
// else if(color==='yellow'||color==='Yellow'){
//     alert('Ready to move')
// }
// else if(color==='green'||color==='Green'){
//     alert('Move now')
// }

// ===========================Question no 4==============================
// Write a program to take input remaining fuel in car (in litres) from user. If the current
// fuel is less than 0.25litres,show the message “Please refill the fuel in your car”
// let fuel = +prompt("Enter your remaining fuel in car in litres: ");
// if(fuel<0.25){
//     alert('Please refill the fuel in your car')
// }

// ========================Question no 5==============================
// Run this script, & check whether alert message would be displayed or not. Record the outputs.
//  // Part a
// let a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true");
//     }
// // Part b
// let b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
//     }
// // Part c
// let c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
//     }
// if (c === 13){ 
//     alert("condition 2 is true"); 
//     }
// if (++c < 14){ 
//     alert("condition 3 is true"); 
//     } 
// if(c === 14){ 
//     alert("condition 4 is true"); 
//     }
// // Part d
// let materialCost = 20000; 
// let laborCost = 2000; 
// let totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
//     }
// // Part e
// if (true){ 
//     alert("True"); 
//     } 
// if (false){ 
//     alert("False"); 
//     }
// // Part f
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     }

// =========================Question no 6======================
// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as per following table:
// let obtainedMarks=+prompt('Enter Obtained Marks in three subjects: ');
// let totalMarks=+prompt('Enter total Marks:');
// let percentage=(obtainedMarks/totalMarks)*100;
// percentage=percentage.toFixed(2);
// document.write('<h3>'+'Marksheet'+'</h3>');
// document.write('Total marks :'+totalMarks+'<br>');
// document.write('Percentage :'+percentage+'<br>');
// let grade;
// let remarks;
// if(percentage>=80){
//     grade="A-one";
//     remarks="Excellent";
// }
// else if(percentage>=70){
//     grade="A";
//     remarks="Good";
// }
// else if(percentage>=60){
//     grade="B";
//     remarks="You need to improve";
// }
// else if(percentage>=70){
//     grade="A-one";
//     remarks="Excellent";
// }
// else if(percentage<60){
//     grade="Fail";
//     remarks="Sorry";
// }
// else{
//     document.write("Invalid Input" + "<br>")
// }
// document.write('Grade :'+grade+'<br>');
// document.write('Remarks :'+remarks+'<br>');

// =====================Question no 7=========================
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
// let secret=7;
// let guess=+prompt('Guess the number: \nBetween 1-10 ');
// if(guess===secret){
//     alert('Bingo! Correct answer')
// }
// if(++secret===guess){
//     alert('Close enough to the correct answer')
// }
// else{
//     alert('Sorry wrong guess')
// }

// ========================Question no 8===============================
// Write a program to check whether the given number is divisible by 3. Show the message to 
// the user if the number is divisible by 3.
// let num=+prompt('Enter number to check number is divisible by 3 or not');
// if(num % 3===0){
//     alert(num+' is divisible by 3')
// }
// else{
//     alert(num+' is not  divisible by 3')
// }

// =======================Question no 9==============================
// Write a program that checks whether the given input is an even number or an odd number.
// let num=+prompt('Enter number to check number is even or odd');
//  if(num % 2===0){
//         alert(num+' is even')
//      }
//      else{
//          alert(num+' is odd')
//      }

// =======================Question no 10=============================
// Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// let temperature=+prompt('Enter your city temperature');
// if(temperature>40){
//     alert('It is too hot outside')
// }
// else if(temperature>30){
//      alert('The Weather today is Normal.')
// }
// else if(temperature>20){
//     alert('Today’s Weather is cool.')
// }
// else {
//     alert('OMG! Today’s weather is so Cool.')
// }

// ============================Question no 11=============================
// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// let firstNumber=+prompt('Enter first Number');
// let secondNumber=+prompt('Enter second Number');
// let oper=prompt('Choose your operation : \n(+, - , * , % ')
// if(oper==='+'){
//     alert(firstNumber+secondNumber)
// }
// else if(oper==='-'){
//     alert(firstNumber-secondNumber)
// }
// else if(oper==='*'){
//     alert(firstNumber*secondNumber)
// }
// else if(oper==='/'){
//     alert(firstNumber/secondNumber)
// }
// else{
//     alert(firstNumber%secondNumber)
// }
