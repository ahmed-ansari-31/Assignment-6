// Chapter # 21


//Task # 1
// var firstName = prompt('Enter your first name: ');
// var secondName = prompt('Enter your second name: ');
// var fullName = firstName+ " " + secondName;
// alert('Hello! ' +fullName);


// //Task # 2
// var favouritePhone = prompt('Write your favourite phone model');
// var favouriteLength = favouritePhone.length;
// document.write('My favourite phone is: ' +favouritePhone +"<br>")
// document.write('Length of string: '+favouriteLength);

//Task # 3
// var word = 'Pakistani';
// var index = word.indexOf('n');
// alert('String: '+word +"\n" + "Index of 'n':  " +index );

//Task # 4
// var letter = 'Hello World';
// var lastIndex = letter.lastIndexOf('l');
// alert('String: ' +letter +'\n' +"Last index of  'l' :  "  +lastIndex)

//Task # 5
// var word = 'Pakistani';
// var index = word.charAt(3);
// alert('String: '+word +"\n" + "Character at index 3 :  " +index );

//Task # 6
// var firstName = prompt('Enter your first name: ');
// var secondName = prompt('Enter your second name: ');
// var space = " "
// var fullName = firstName.concat(space,secondName);
// alert('Hello! '.concat(fullName))

//Task # 7
// var city = '“Hyderabad';
// var replace = city.replace('Hyder' , 'Islam');
// alert('city: ' +city +'\nAfter replacement: ' +replace)

//Task # 8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// document.write(message.replace(/and/g , '&'))

//Task # 9
// var str = '472'
// var number =Number(str);
// document.write('Value: ' +str +"<br>");
// document.write('Type: '+ typeof(str)+"<br>");
// document.write('Value: ' +number +"<br>");
// document.write('Type:' +typeof(number) +"<br>");

//Task # 10
// var userInput = prompt('Please Write Something');
// var convertedWord = userInput.toUpperCase();
// document.write('User input: ' +userInput +"<br>");
// document.write('Upper case: ' +convertedWord);

// Task # 11
// var input = prompt('please Write something');
// var firstWord = input.slice(0,1);
// var otherChar = input.slice(1);
// firstWord = firstWord.toUpperCase();
// otherChar = otherChar.toLowerCase();
// document.write('User input: ' + input  +"<br>");
// document.write('Title case: ' +firstWord.concat(otherChar) );

//Task # 12
// var num = 35.36;
// var str = num.toString().replace("." , "")
// document.write("Number: " +num +"<br>");
// document.write("Result: " + str)

//Task # 13
// var input = prompt( 'Enter your name');
// for (var i = 0 ; i<input.length;i++){
//     var check = input.charCodeAt(i);
//     if(check===33|| check===44 || check===46 ||check===64){
//        var a=1;
//     }
//     else{
//         break;
//     }
// }
// if(a===1){
//     alert('Please enter a valid username');
// }
// else{
//     alert('Valid Username');
// }


//Task # 14 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt('Welcome to ABC Bakery.What do you want to order ?');
// var convert = input.toLowerCase();
// var jadoo
// for (var i = 0 ; i<A.length ; i++) {
//     if(convert==A[i]) {
//         jadoo = 1
//         var j = i
//     }
//     else {
//         continue;
//     }
// }
// if(jadoo === 1){
//     alert(input + ' is available at index ' + j +' in our bakery');
// }else{
//     alert("We are sorry 🙁" +input +' is not available in our bakery');
// }

//Task # 15
// var pass = prompt("Enter password: ");
// for (var i = 0; i<pass.length;i++){
//     for (var j=48;j<58;j++){
//         if(j===(pass.charCodeAt(i))){var num = 1;}
//         if(j===(pass.charCodeAt(0))){var invalid = 0;}
//     }
//     for (var k=65;k<91;k++){
//         if(k===(pass.charCodeAt(i))){var alp = 1;}
//     }
//     for (var k=97;k<123;k++){
//         if(k===(pass.charCodeAt(i))){var alp = 1; }
//     }
//     if((num === 1 && alp === 1) && invalid!=0 && pass.length >= 6){var condition = 1; break; }
//     else{continue;}
// }
// if(condition === 1){document.write("Entered Password: "+pass+"<br>"+"Passwrod is correct")}
// else{document.write("Entered Password: "+pass+"<br>"+"Please insert a valid password")}


//Task # 16
// var university = "University of Karachi";
// var split =university.split("")
// for (var i= 0 ; i<university.length;i++){
//     document.write(split[i] +'<br>');
// }


//Task # 17
// var input = prompt('Enter any word');
// var length = input.length
// var index = input.charAt(length-1);
// document.write('User input: ' +input+'<br>');
// document.write('Last character of input: ' +index);

//Task # 18
// var text = "The quick brown fox jumps over the lazy dog";
// var convert  = text.toLowerCase();
// var count = convert.match(/the/g).length
// document.write(text+'<br>')
// document.write("There are " +count + " occurrence(s) of the word 'the'")







//Chapter 26-30
//Task # 1
// var input = +prompt('Enter a positive integer ')
// var sign = Math.sign(input);
// var roundOff = Math.round(input);
// var floor = Math.floor(input);
// var ceil = Math.ceil(input);
// if (sign===1){
// document.write('number :' +input +"<br>");
// document.write("round off value: " +roundOff +"<br>" +'floor value: ' +floor +"<br>" +'ceil value: ' +ceil)
// }
// else{
//     alert('Enter a positive integer')
// }

//Task # 2
// var input = +prompt('Enter a negative floating point ')
// var sign = Math.sign(input);
// var roundOff = Math.round(input);
// var floor = Math.floor(input);
// var ceil = Math.ceil(input);
// if (sign===-1){
// document.write('number :' +input +"<br>");
// document.write("round off value: " +roundOff +"<br>" +'floor value: ' +floor +"<br>" +'ceil value: ' +ceil)
// }
// else{
//     alert('Enter a negative floating point number')
// }

//Task # 3
// var number  = +prompt('Enter any number');
// var absoluteValue = Math.abs(number);
// document.write('The absolute value of ' + number + ' is ' + absoluteValue);

//Task # 4
// var dice = 'random dice';
// var random = Math.floor(Math.random()*6 +1);
// document.write(dice+" " +random);

//Task # 5
// var coin = 'random coin value';
// var head = 'Heads';
// var tail = 'Tails'
// var random = Math.floor(Math.random()*2+1 );
// if(random===2){
// document.write('2' +"<br>" +coin+" " +head);}
// else{
//     document.write('1' +"<br>"+coin + "" +tail)
// }

//Task # 6
// var number='random number between 1 and 100: '
// var random = Math.floor(Math.random()*100 +1)
// document.write(number+ " " +random);

//Task # 7
// var number  = +prompt('Enter your weight in kilograms');
// var weight = parseFloat(number);
// alert(weight)

//Task # 8
// var number = Math.floor(Math.random*10+1)
// var input = +prompt('Enter a number between 1 and 10')
// if(input===number){
//     alert('Congratulations')
// }
// else if (input>=11){
//     alert('Please enter number between 1 and 10')

// }
// else{
//     alert('Try again')
// }





//Chapter 31-34

//Task # 1
// var d = new Date();
// document.write(d)

//Task # 2
// var month = new Array();
//   month[0] = "January";
//   month[1] = "February";
//   month[2] = "March";
//   month[3] = "April";
//   month[4] = "May";
//   month[5] = "June";
//   month[6] = "July";
//   month[7] = "August";
//   month[8] = "September";
//   month[9] = "October";
//   month[10] = "November";
//   month[11] = "December";

//   var d = new Date();
//   var n = month[d.getMonth()];
//   document.write('Current month: ' + n);

//Task # 3
// var weekday = new Array();
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var d = new Date();
// var n = weekday[d.getDay()];
// var slice = n.slice(0,3)
// alert('Today is ' +slice)

//Task # 4
// var weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
// for(var i = 0;i<weekday.length;i++){
// var d = new Date();
// var n = d.getDay();
// if (n===6 || n===0){
//     var a=1;
// }
// else{
//    continue
// }
// }
// if(a===1){
//     alert("It's a Fun day")
// }
// else{
//     alert("It's not a Fun day")
// }

//Task # 5
// var d = new Date();
// var n = d.getDate();
// if(n<16){
//     alert('First fifteen days of the month')
// }
// else{
//     alert('Last days of the month')
// }

//Task # 6
// var d= new Date();
// var milliseconds = d.getTime();
// var minutes = milliseconds/(100*60*60);
// document.write('Current Date: ' +d+ "<br>");
// document.write('Elapsed milliseconds since January 1 , 1970: ' +milliseconds+"<br>");
// document.write('Elapsed minutes since January 1 , 1970: ' +minutes +"<br>");

//Task # 7
// var d= new Date();
// var hours = d.getHours();
// if(hours<=12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM")
// }

//Task # 8
// var d = new Date(2020,12,0 );
// alert(d)






