// ==========================Question no 1===================================
// Write a program that takes two user inputs for first and last name using prompt and merge 
// them in a new variabletitled fullName. Greet the user using his full name.
// let firstName=prompt('Write your first name');
// let lastName=prompt('Write your last name');
// alert('Hello '+firstName+' '+lastName)

// ============================Question no 2=================================
// Write a program to take a user input about his favorite mobile phone model. Find and 
// display the length of user input in your browser
// let userMobile=prompt('Write your favourite mobile phone model');
// let length=userMobile.length;
// document.write('My favourite phone is :'+userMobile+'<br>'+'Length of string:'+length);

// ==============================Question no 3=================================
// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// let word='Pakistani';
// let indexNo=word.indexOf("n");
// document.write('String :'+word+'<br>'+" Index of 'n' :"+indexNo);

// =============================Question no 4================================
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// let word='Hello World';
// let lastIndex=word.lastIndexOf('l');
// document.write('String :'+word+'<br>'+"  Last index of 'l' :"+lastIndex);

// =============================Question no 5==================================
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// let word='Pakistani';
// let indexChar=word.charAt(3);
// document.write('String :'+word+'<br>'+"  Character at index 3 :"+indexChar);

// ============================Question no 6================================
// Repeat Q1 using string concat() method.
// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name: ");
// alert('Hello '+firstName.concat(lastName))

// ===========================Question no 7=====================================
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// let city='Hyderabad';
// let replace=city.replace('Hyder','Islam');
// document.write('City :'+city+'<br>'+'After replacement :'+replace)

// ============================Question no 8==============================
// Write a program to replace all occurrences of “and” in the string with “&” and display the result
// in your browser.var message = “Ali and Sami are best friends. They play cricket and football together.”;
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replace=message.replace(/and/g,'&');
// document.write('Message :'+message+'<br>'+'After replacement :'+replace)

// ===========================Question no 9======================================
// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// let str = "472";
// let num = Number(str);
// document.write("value: " + str + "<br>");
// document.write("Type: " + typeof(str) + "<br>");
// document.write("value: " + num + "<br>");
// document.write("Type: " + typeof(num) + "<br>");

// ============================Question no 10==============================
// Write a program that takes user input. Convert and show the input in capital letters.
// let userInput=prompt('Please enter any word');
// let capital=userInput.toUpperCase();
// document.write('User input :'+userInput+'<br>'+'Upper Case :'+capital)

// ===============================Question no 11============================
// Write a program that takes user input. Convert and show the input in title case.
// let userInput=prompt('Please enter any word');
// let firstChar=userInput.slice(0,1);
// firstChar=firstChar.toUpperCase();
// let otherChars=userInput.slice(1);
// otherChars=otherChars.toLowerCase();
// let titleCase=firstChar+otherChars;
// document.write('User Input :'+userInput+"<br>"+'Title case :'+titleCase );

// ===================================Question no 12================================
// Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// let num=35.36;
// let str=num.toString();
// let dotIndex=str.indexOf('.');
// let result=str.slice(0,dotIndex)+str.slice(dotIndex+1);
// document.write('Number :'+str+'<br>'+'Result ' +result);

// ===========================Question no 13=================================
// Write a program to take user input and store username in a variable. If the username contains
// any special symbol among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// let userInput=prompt('Enter your name: ');
// let charCode;
// for(let i=0;i<userInput.length;i++){
//     charCode=userInput.charCodeAt(i);
//      if(charCode===33||charCode===44||charCode===46||charCode===64){
//         alert("Please enter a valid username")
//      }

// }

// ============================Question no 14===============================
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("What do you want to order: ");
// userInput = userInput.toLowerCase();
// let check = false;
// for (let i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(arr[i] + " is available at index " + i + " in our bakery");
//         check = true;
//     }
// }
// if (check === false) {
//     document.write("We are sorry. " + userInput + " is not available in our bakery");
// }

// =============================Question no 15===========================
// Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// let password = prompt("Enter your password: ");
// let passwordLength = false;
// let passwordChar = false;
// let passwordInt = false;
// let passwordStart = true;

//Checking for Alphabet
// for (i = 0; i < password.length; i++){
//     let charValue = password[i].charCodeAt(0);

    //Checking for UpperCase Letters
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }

    //Checking for LowerCase Letters
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }

//Checking for Numbers
// for (i = 0; i < password.length; i++){
//     let charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }

//Checking for first letter
// let charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }

//Checking for Length
// if(password.length >= 6){
//     passwordLength = true;
// }

// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Password Approved");
// }

// ===============================Question no 16==========================
// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// let str='University of Karachi';
// let arr =str.split("");
// for(let i=0;i<str.length;i++){
//     document.write(arr[i]+'<br>')
// }

// ============================Quesation no 17==============================
// Write a program to display the last character of a user input.
// let userInput=prompt('Write any word');
// document.write('User input :'+userInput+'<br>'+'Last character of input:'+userInput[userInput.length-1])

// ============================Question no 18==============================
// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// letr str='The quick brown fox jumps over the lazy dog';
// str =str.toLowerCase();
// let count=str.match(/the/g);
// let length=count.length;
// document.write('Text:'+str+'<br>'+'There are '+length+' occurence(s) of word "the"'