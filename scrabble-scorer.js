// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");


const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z'],
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
   console.log(letterPoints);
   return letterPoints;
};


function initialPrompt() {
   console.log("Let's play some scrabble!");
   let word = input.question("\n\nEnter a word: ");
   return word;
};

function simpleScorer(word) {
      let score = parseInt(word.length);
   console.log(`Score for ${word} = ${score}`);
   return score;
};


function vowelBonusScorer(word) {
   // word = 'pineapple';
   word = word.toUpperCase();
   let score = 0;
   let vowelsarr = ['A', 'E', 'I', 'O', 'U'];
   for (let i = 0; i < word.length; i++) {
      if (!vowelsarr.includes(word[i])) {
         score += parseInt(+1);
      } else {
         score += parseInt(+3);
      }
   }
   console.log(`Score for ${word} = ${score}`);
   return score;
};


function scrabbleScorer(word) {
   word = word.toLowerCase();
   let i = 0;
   let score = 0;
   for (i = 0; i < word.length; i++) {
      score += parseInt(newPointStructure[word[i]]);
   }
   //  console.log(newPointStructure);
    console.log(`Score for ${word} sure does = ${score}`);
   return score;
};

// const simpleScorerAlg = {
//    name: "Simple Score",
//    description: "Each letter is worth 1 point.",
//    scorerFunction: simpleScorer(word)};

// const vowelBonusScorerAlg = {
//    name: "Bonus Vowels",
//    description: "Vowels are 3 pts, consonants are 1 pt.",
//    scorerFunction: vowelBonusScorer(word)};

// const scrabbleScorerAlg ={
//    name: "Scrabble",
//    description: "The traditional scoring algorithm.",
//    scorerFunction: oldScrabbleScorer(word)};

const scoringAlgorithms = [
   {
      name: "Simple Score",
      description: "Each letter is worth 1 point.",
      scorerFunction: simpleScorer
   },
   {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scorerFunction: vowelBonusScorer
   },
   {
      name: "Scrabble",
      description: "The traditional scoring algorithm.",
      scorerFunction: scrabbleScorer
   }
];

function scorerPrompt(word) {
   let score = 0;
   let j = parseInt(input.question("\nWhich scoring algorithm would you like to use?\n\t 0 - Simple: One point per character\n\t 1 - Vowel Bonus: Vowels are worth 3 points\n\t 2 - Scrabble: Uses scrabble point system\n\n Enter 0, 1, or 2: "));
   score = scoringAlgorithms[j].scorerFunction(word); 
   return score;
};


function transform() {
   let newPointStructure = {};
   for (let i in oldPointStructure) {
      oldPointStructure[i].forEach(val => newPointStructure[val.toLowerCase()] = Number(i)
      );
   }
   return newPointStructure;
};

newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   scorerPrompt(word);
 };

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
