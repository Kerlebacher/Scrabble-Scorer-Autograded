// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");
let word = '';

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
  0: [' ']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble!\n\nEnter a word: ");
  return word;
};

function simpleScorer(word) {
   word = word.toUpperCase();
   let score = word.length;
   console.log(`Score for '${word}': ${score}`);
  	return score;
 };


function vowelBonusScorer(word){
   word = word.toUpperCase();
   let score = 0;
   for (let i=0; i < word.length; i++) {

   }
      
	return score;
 };


function scrabbleScorer() {
   let sum = 0;
    let i = 0;
    let score = 0;
    for (i = 0; i < word.length; i++) {
        letter = word[i];
        sum += parseInt(newPointStructure[letter]);
    }
    return (sum*1);
};



// const scoringAlgorithms = [
//    {
//       name: "Simple Score",
//       description: "Each letter is worth 1 point.",
//       scorerFunction: simpleScorer()},
//       {
//       name: "Bonus Vowels",
//       description: "Vowels are 3 pts, consonants are 1 pt.",
//       scorerFunction: vowelBonusScorer()},
//       {
//       name: "Scrabble",
//       description: "The traditional scoring algorithm.",
//       scorerFunction: oldScrabbleScorer()}
// ];

function scorerPrompt() {
		let response = input.question("\nWhich scoring algorithm would you like to use?\n\t 0 - Simple: One point per character\n\t 1 - Vowel Bonus: Vowels are worth 3 points\n\t 2 - Scrabble: Uses scrabble point system\n\n Enter 0, 1, or 2: ");
   return response;
}
	

function transform() {
      const newPointStructure = {};
      for (let i in oldPointStructure) {
          oldPointStructure[i].forEach (val => newPointStructure[val.toLowerCase()] = Number(i)
          )
      }
      return newPointStructure;
  }

let newPointStructure = transform(oldPointStructure);

function runProgram() {
 

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   // scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
