// ========================Question no 1===========================
// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// let num_1 = 3;
// let num_2 = 5;
// let num = num_1 + num_2;
// document.write("Sum of " + num_1 + " " + "and" + " " + num_2 + " " + "is" + " " + num); 

// ========================Question no 2===========================
// Repeat task1 for subtraction, multiplication, division & modulus.
// let num_1 = 3;
// let num_2 = 5;
// let num = num_1 - num_2;
// document.write("Subtraction of " + num_1 + " " + "and" + " " + num_2 + " " + "is" + " " + num + "<br>");
// num = num_1 * num_2;
// document.write("multiplication of " + num_1 + " " + "and" + " " + num_2 + " " + "is" + " " + num + "<br>");
// num = num_1 / num_2;
// document.write("division of " + num_1 + " " + "and" + " " + num_2 + " " + "is" + " " + num + "<br>");
// num = num_1 % num_2;
// document.write("modulus of " + num_1 + " " + "and" + " " + num_2 + " " + "is" + " " + num + "<br>");

// ========================Question no 3=============================
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
//  let value;
//  document.write("Value after variable declartion is " + value + "<br>");
//  value = 5;
//  document.write("Initial value: " + value + "<br>");
//  value = ++value;
//  document.write("Value after increment is: " + value + "<br>");
//  value = value + 7;
//  document.write("Value after addition is : " + value + "<br>"); 
//  value = --value;
//  document.write("Value after decrement is : " + value + "<br>");
//  value = value % 3;
//  document.write("The remainder is : " + value); 
 
// =========================Question no 4===============================
// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of 
// buying 5 tickets to a movie.
// let ticket_1 = 600;
// let ticket_2 = 600 * 5;  
// document.write("Total cost to buy 5 tickets to a movie is " + ticket_2 + "PKR");

// =========================Question no 5==============================
// Write a script to display multiplication table of any number in your browser. 
// let number = 4;
// document.write("Table of " + number + "<br>");
// for (let i=1; i<=10; i++){
//    document.write(number + " x " + i+  " = " +  + number*i+   "<br>");
// }
// ============================Question no 6===============================
// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// let celsius = 25;
// let fahrenheit = (celsius * 9 / 5) + 32;
// fahrenheit = 77;
// celsius = (fahrenheit - 32) * 5 / 9;
// document.write(celsius + "C is " + fahrenheit + "F" + "<br/>"); 
// document.write(fahrenheit + "F is " + celsius + "C" + "<br/>");

// ==========================Question no 7==================================
// Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// let priceOfItem1 = 650;
// let quantity_item1 = 3;
// let priceOfItem2 = 100;
// let quantity_item2 = 7;
// let shipping_Charges = 100;
// document.write("<b> Shopping Cart </b>" + "<br><br>");
// document.write("price of item 1 is " + priceOfItem1 + "<br>");
// document.write("Quantity of item 1 is " + quantity_item1 + "<br>");
// document.write("price of item 2 is " + priceOfItem2 + "<br>");
// document.write("Quantity of item 2 is " + quantity_item2 + "<br><br>");
// document.write("Total cost of your order is " ,(priceOfItem1*quantity_item1)+(priceOfItem2*quantity_item2)+shipping_Charges);

// ==============================Question no 8================================
// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the 
// result in your browser
// let total_marks = 980;
// let marks_obtained = 804;
// let per = (marks_obtained*100)/total_marks;
// document.write("<b> Marks Sheet </b>" + "<br><br>");
// document.write("Total marks is: " + total_marks + "<br>");
// document.write("Marks obtained: " + marks_obtained + "<br>");
// document.write("Percentage: " + per + "%");

// ===========================Question no 9==================================
// Assume we have 10 US dollars & 25 Saudi Riyals. Write ascript to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// let dollar = 10;
// let riyal = 25;
// document.write("<b> Currency in PKR <b>" + "<br><br>");
// document.write("Total currency in PKR: " + (dollar*104.80 + riyal*28) );

// ===============================Question no 10===============================
// Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// let num = 28;
// let cal = ((num+5)*10)/2;
// document.write(cal);

// ===============================Question no 11==================================
// The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
// let currentYear = 2023;
// let birthYear = 2003;
// document.write("<b> Age Calculator </b>" + "<br><br>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + (currentYear - birthYear));

// =================================Question no 12===============================
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// let radius = 20;
// let circumference = 2* Math.PI * radius;
// let area = Math.PI * (radius**2);
// document.write("<b> The Geometrizer </b>" + "<br><br>");
// document.write("Radius of a circle is: " + radius + "<br>");
// document.write("The circumference is:" + circumference + "<br>");
// document.write("The area is " + area);

// ====================================Question no 13=================================
// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// let favSnack = "chocolate chip";
// let currentAge = 15;
// let maximumAge = 65;
// let snackPerDay = 3;
// document.write("<b> The Lifetime Supply Calculator </b>" + "<br><br>");
// document.write("Favorite Snake: " + favSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maximumAge + "<br>");
// document.write("Amount of snacks per day: " + snackPerDay + "<br>");
// document.write("You will need " + (50*snackPerDay) + " to last you until the ripe old age of " + maximumAge);
