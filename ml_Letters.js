// 1.00 Recitation April 6 - Machine Learning
var fs = require('fs');
var train = require('./letters.js');
var test = require('./blocks.js');
var letter1 = [];
var letter2 = [];
var letter3 = [];
var letter4 = [];
var letter5 = [];
var letter6 = [];

// Step 1. For each letter in the test data, find the distances to each letter.

// -- Your Code -- //

// Step 2. For each letter, determine which letter is the closest.

// -- Your Code -- // 

// Step 3. Update the letterX array with the tested data

// -- Your Code -- // 

// Step 4. Write all of the letters out to separate files.


//////////// Functions to Implement //////////////////

var calculateDistanceToEachLetter = function(test,train){
    var distances = [];
    // -- Your code here --//
    return distances;
}
var classifyLetter = function(train,letter){
    var classification;
    // -- Your code here --//
    return classification;
}


fs.appendFile('letter1.txt', 'input', (err) => {
   if (err) throw err;
});


