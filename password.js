"use strict";

let $ = function(id) { return document.getElementById(id); };
let random;
const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';

let getRandomNumber = function(max) {
   if (!isNaN(max)) {
      random = Math.random(); //value >= 0.0 and < 1.0
      random = Math.floor(random * max); //value is an integer between 0 and max - 1
      random = random + 1; }//value is an integer between 1 and max
   return random;
};

// getPassword function will begin by ensuring the user chose a number, then getting the number and setting it to maxValue,
// then finishing up with generating a password//
const getPassword = function() {
   if(!isNumeric($("num").value)){
      alert("Please enter a valid number");
      $("num").value = "";
   }

   var maxValue = $("num").value;
   $("password").value =""; // clear previous entry
   var password = "";
   var i =0;

   for (i = 0; i < maxValue; i++) {
      var index = getRandomNumber(characters.length);
      password = password+characters[index];
   }
      $("password").value =password;
};

//Function created to clear all fields on screen, this resets the array
var clearFields = function() {
   $("num").value = "";
   $("password").value = "";
};

function isNumeric(n) {
// added condition - n should not be less than or equal to zero in the below return statement
   return !isNaN(parseFloat(n)) && isFinite(n) && !(n<=0);
}

window.onload = function() {
$("generate").onclick = getPassword;
$("clear").onclick = clearFields;
$("num").focus();
};