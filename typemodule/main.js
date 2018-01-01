var greet1= require('./greet1');
greet1();
//you can call as greet2.greet();
var greet2=require('./greet2').greet;
greet2();
//
var greet3= require('./greet3');
greet3.greet();
greet3.greeting='change now';
var greet3b= require('./greet3');
greet3b.greet();
var greet4= require('./greet4');
var grtr= new greet4();
grtr.greet();