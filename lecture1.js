/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var firstCar = 'Doge'; //1stCar is not a valid variable because it starts with a number and can better be named as firstCar
var v = 'variable'; //var is not a valid variable name because it is a reserved word
var firstName = 'Jerry'; //Name can not contain white space
var schoolName = 'MEST'; //camelCase names start with a lowercase letter and 00 should rather be oo which makes it human readable
var totalnumber = 100; //camelCase names have the second part of the name begining with a capital letter

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  `'It's nice to me you today!'`;// the apostrophe in it's interferes with single quotes
var response = `'Ashwin said, 'Yes Sir!''`;//the response has multiple double quotes which interferes with content of the cariable


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
0.3 + 0.1 === 0.4 // this returns true which means the expression is valid and the result is correct

/*
 * 4. Build a pizza object by using all three object creation method, it must have at least 4 properties
 */
//1.
 var pizza = {
   name: 'Peparoni',
   size: 'Large',
   type: 'Vegitarian',
   top: 'cheese'
 };
 	console.log(pizza.size);

 //2.
 var pizza = {
  name : 'Peparoni';
  size : 'Large';
  type : 'Vegitarian';
  top : 'cheese';
};
var pizzaOne = Object.create(pizza);
console.log(pizzaOne.name);
//3.
  function pizza(name, size, date, top){
    this.name = name;
    this.size = size;
    this.type = date;
    this.top = top
  };
  var pizzaTwo = new pizza('Peparoni', 'Large', 'Vegitarian', 'cheese');
	console.log(pizzaTwo.name);
/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

 function Animal(name){
   this.name = name;
 }
 Animal.prototype.eat = function(){
   console.log(this.name + " can eat");
 }
 Animal.prototype.walk = function(){
   console.log(this.name + " can walk");
 }

 duck = new Animal("duck");
 console.log(duck);
 console.log(duck.name);
 console.log(duck.eat());
 console.log(duck.walk());

 sheep = new Animal("sheep");
 console.log(sheep);
 console.log(sheep.name);
 console.log(sheep.eat());
 console.log(sheep.walk());


/*
* 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
*/
if (7){
    console.log('sandwitch, milkshake, orange bun ' + '= 16Cedis');
} else if (8){
    console.log('strawberry smoothy, biscuit, jam ' + '= 15Cedis');
} else if (9){
    console.log('banan smoothy, waffle, ice cream ' + '= 20Cedis');
}

/*using SWITCH statement*/

switch(value){
    case 0 :
        'sandwitch, milkshake, orange bun ' + '= 16Cedis';
        break;
    case 1 :
        'strawberry smoothy, biscuit, jam ' + '= 15Cedis';
        break;
    case 2 :
        'banan smoothy, waffle, ice cream ' + '= 20Cedis';
        break;

    default :
        'Welcome to Smoothys, please enter order';
        break;
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */

 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 for (var i = 0; i < 8; i++){
     console.log(studentScores[i]);
 }

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 forEach(studentScores){
     studentScores.forEach(studentScores){
         console.log(studentScores);
     };
 }
