/*
 * 1. explain the special meaning of the following special characters
 \0 the null character : This finds the postition of null character
 \n new line : This breaks a line and continues on the next line
 \r carriage return - This moves the cursor to the next line
 \v vertical tab  - Returns to the position where the vertical tab character was found
 \t tab character - Returns to the position where the tab character was found
 \backspace -
 \f form feed - Returns position where the form feeder was found
 */


// 2.Please combine those two array together as one array by using concate:
  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
  var arr2 = ['Thursday', 'Friday', 'Saturday']
  var arr3 = arr1.concat(arr2);



// 3.Please combine those three array together as one array by only using concate() function once:
 var arr1 = ['Sunday', 'Monday']
 var arr2 = ['Tuesday', 'Wednesday']
 var arr3 = ['Thursday', 'Friday', 'Saturday']
 var arr4 = arr1.concat(arr2, arr3);




// 4. what is the result(output of following code):
  var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
    console.log(arr.sort()); // ['Enoch', 'Todd', 'Yaw', 'ashwin', 'jerry', 'lars', 'mike']
    console.log(arr); // ['Enoch', 'Todd', 'Yaw', 'ashwin', 'jerry', 'lars', 'mike']



// 5. what is the result(output of following code):
   var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
   console.log(arr.sort()); // [1, 2, 3, 'apple', 'black', 'orange', 'test']
   console.log(arr); // [1, 2, 3, 'apple', 'black', 'orange', 'test']



// 6. Please remove mike, jerry, and Enoch from the following array by using slice
    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
    console.log(arr.slice(0,2) + "," +  arr.slice(4,5) + "," +  arr.slice(6));


// 7. what is the result(output of following code):
   var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
   console.log(arr.slice(-3, -1)); // ["Yaw", "Enoch"]
   console.log(arr); // ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]




//8. what is the result(output of following code):
    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
    console.log(arr.slice(2)); // ["mike", "jerry", "Yaw", "Enoch", "lars"]
    console.log(arr); // ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]



//9. what is the result(output of following code):
   var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
   console.log(arr.slice(-2)); //["Enoch", "lars"]
   console.log(arr); // ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]


/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */
 var sums = function addTwoNumber (num1, num2) {

       console.log(num1 + num2);

     }
     sums(256, 532);


/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */
 (function Kofi(){
 console.log("Hello Kofi");
 })();


//12. you have following objects:
 var person1 = {
       name: 'ashwin'
  };

  var person2 = {
       name: 'lars'
  };

 function namer() {
       return this.name;
 }

 name1 = namer.bind(person1);
 console.log(name1());

 name2 = namer.bind(person2);
 console.log(name2());
 var person1 = {
 	name: 'ashwin'
 };



// 12. you have following object:
 var number = {
      x: 22,
      y: 33
 };

var count = function() {
      console.log(this.x + this.y);
}
count.bind(number)();
/*  a. what is the result when we invoke count()?
*  b. use bind on function expression to make this work.
*/


//13. you have following objects:
 var person1 = {
        firstName: 'ashwin',
       lastName: 'Yaw'
};

 var person2 = {
        firstName: 'lars',
       lastName: 'Mike'
  };

   function hello(greeting) {
        console.log(this.greeting + ' ' + this.firstName + ' ' + this.lastName);
  }

 hello.bind(person1)("hey");

/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
 var str = 'training, mentoring, and investing in world-class tech entrepreneurs in Africa.';

input = "Training, mentoring, and investing in world-class tech entrepreneurs in Africa.";
input = input.split(" ");
for(var i = 0; i < input.length; i++){
console.log(input[i].slice(0,1).toUpperCase() + input[i].slice(1));
}
