// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = initialPrompt().toUpperCase();
	let letterPoints = "";
   
	for (let i = 0; i < word.length; i++) {
 	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
		 }
     }
      }
      console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(word) {
   word = input.question("Let's play some scrabble!\n\nEnter a word: ");
   return word;
};

function simpleScorer(word) {
   word = initialPrompt().toUpperCase();
   let letterPoints = word.length;
   console.log(`Score for '${word}':${letterPoints}`);
  	return letterPoints;
 };


function vowelBonusScorer(word){
   word = initialPrompt().toUpperCase();
   
      console.log(letterPoints);
	return letterPoints;
 };


let scrabbleScorer;

const scoringAlgorithms = [simpleScore = {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFunction: "A function with a parameter for user input that returns a score."
}, bonusVowels = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: "A function that returns a score based on the number of vowels and consonants."
}, scrabble = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: "Uses the oldScrabbleScorer() function to determine the score for a given word."
}];

function scorerPrompt() {
		let c = input.question("\nWhich scoring algorithm would you like to use?\n\t 0 - Simple: One point per character\n\t 1 - Vowel Bonus: Vowels are worth 3 points\n\t 2 - Scrabble: Uses scrabble point system\n\n Enter 0, 1, or 2: ");
	// Validate user response
	while (c !== '0' && areaCode !== '1' && areaCode !== '2') {
		selectedSearchType = input.question(`\nPlease enter a proper selection. Choices are 0, 1 or 2:`);
	}
	// Build score
	if (c == 0) { simpleScorer()
   }
   else if (c == 1) { bonusVowels()
   }
   else if (c == 2) { scrabble()
   }
	}
	

function transform() {};

let newPointStructure;

function runProgram() {
  
   // initialPrompt();
   // oldScrabbleScorer();
   // simpleScorer();
   // vowelBonusScorer();
   scorerPrompt();
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
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
