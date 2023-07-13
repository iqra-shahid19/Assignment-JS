// ======================Question no 1 ==========================
// Write a program to take a number in a variable, do the required arithmetic to display 
// the following result in your browser
// var a = 10;
// document.write("Result: " + "<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("..........................................." + "<br><br>");
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a  is: " + a + "<br><br>");
// document.write("The value of a++ is: " + a + "<br>");
// document.write("Now the value of a is: " + ++a + "<br><br>");
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + a + "<br>");
// document.write("Now the value of a is: " + --a + "<br>");

// ========================Question no 2===========================
// What will be the output in variables a, b & result after execution of the following script
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// let a = +prompt("enter number 1");
// let b = +prompt("enter number 2");
// document.write("value of a is : " , a , "<br>");
// document.write("value of b is : " , b , "<br>");
// document.write("solving the expression for --a - --b + ++b + b--  <br><br>")
// let step_1 = --a;
// let step_2 = --b;
// let step_3 = ++b;
// let step_4 = b--;
// document.write("--a is : ", step_1  , "<br>");
// document.write("--b is : ", step_2  , "<br>");
// document.write("++b is : ", step_3  , "<br>");
// document.write("b-- is : ", step_4 , "<br>");
// document.write("result for --a - --b + ++b + b-- is : ", step_1-step_2+step_3+step_4);

// ============================Question no 3============================
// Write a program that takes input a name from user & greet the user.
// let user_name = prompt("enter your name ");
// document.write("welcome " + user_name);

// ============================Question no 4=============================
// Write a program to take input a number from user & display it’s multiplication table on your 
// browser.If user does not enter a new number, multiplication table of 5 should be displayed by default            
// let number = prompt("enter a number:");
// if (!number) {
//     for (i = 0; i <= 10; i++) {
//     document.write(5, " x ", i, " = ", 5 * i, "<br>");
//    }
// }
// else {
//     number = +number;
//     for (i=0; i <= 10; i++) {
//         document.write(number, " x ", i, " = ", number * i, "<br>");
//     }
// }

// =============================Question no 5============================
// Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// document.write('<h3>'+'Marksheet'+'</h3>')
// let sub1= prompt('Enter first subject name');
// let sub2= prompt('Enter second subject name');
// let sub3= prompt('Enter third subject name');
// let totalmarks=300;
// let obtainedSub1=+prompt('Enter your first subject marks')
// let obtainedSub2=+prompt('Enter your second subject marks')
// let obtainedSub3=+prompt('Enter your third subject marks')
// let obtainedMarks=obtainedSub1+obtainedSub2+obtainedSub3;
// let percentage=(obtainedMarks/totalmarks)*100;
// percentage=percentage.toFixed(2);
// let percentage1=(obtainedSub1/100)*100;
// percentage1=percentage1.toFixed(2);
// let percentage2=(obtainedSub2/100)*100;
// percentage2=percentage2.toFixed(2);
// let percentage3=(obtainedSub3/100)*100;
// percentage3=percentage3.toFixed(2);
// document.write('<Table>')
// document.write('<tr>');
// document.write('<th>'+'Subjects '+'</th>')
// document.write('<th>'+' Total'+'</th>')
// document.write('<th>'+' Obtained Marks '+'</th>')
// document.write('<th>'+' Percentage '+'</th>')
// document.write('</tr>');
// document.write('<tr>');
// document.write('<td>'+sub1+'</td>')
// document.write('<td>'+100+'</td>')
// document.write('<td>'+obtainedSub1+'</td>')
// document.write('<td>'+percentage1+'%'+'</td>')
// document.write('</tr>');
// document.write('<tr>');
// document.write('<td>'+sub2+'</td>')
// document.write('<td>'+100+'</td>')
// document.write('<td>'+obtainedSub2+'</td>')
// document.write('<td>'+percentage2+'%'+'</td>')
// document.write('</tr>');
// document.write('<tr>');
// document.write('<td>'+sub3+'</td>')
// document.write('<td>'+100+'</td>')
// document.write('<td>'+obtainedSub3+'</td>')
// document.write('<td>'+percentage3+'%'+'</td>')
// document.write('</tr>');
// document.write("<tr>");
// document.write("<th>" + "</th>");
// document.write("<th>"+totalmarks+"</th>");
// document.write("<th>"+obtainedMarks+"</th>");
// document.write("<th>"+percentage+"%"+"</th>");
// document.write("</tr>");
// document.write("</Table>")



