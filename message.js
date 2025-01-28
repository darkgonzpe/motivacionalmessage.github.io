
let firstWord = ['Believe in yourself',
'Every challenge',
'Success starts',
'Your potential',
'Dream big',
'Hard work always'];
let secondWord = ['because you are capable',
'is an opportunity',
'with small steps',
'is limitless',
'requires dedication',
'makes a difference'];
let thirdWord = ['of achieving greatness.',
'to grow stronger.',
'that lead to greatness.',
'waiting to shine.',
'that pays off.',
'in your journey.'];

let userName = 'buddy';
userName 
? console.log (`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'I think i need some motivation';

console.log(`Hello hopecore master, I'm ${userName}, I feel lost in my life, ${userQuestion}`);

let diceOne = Math.floor(Math.random() * 6);

const firstResult = (diceOne) => {
    if (diceOne === 0){
        return firstWord [0];
    }  else if (diceOne === 1){
        return firstWord [1];
    }  else if (diceOne === 2) {
        return firstWord [2];
    }  else if (diceOne === 3) {
        return firstWord [3];
    }  else if (diceOne === 4){
        return firstWord [4];
    }  else if (diceOne === 5) {
        return firstWord [5];
    }  else {
        return 'try again';
    }
};

let diceTwo = Math.floor(Math.random() * 6);

const secondResult = (diceTwo) => {
    if (diceTwo === 0){
       return secondWord [0];
    }  else if (diceTwo === 1){
        return secondWord [1];
    }  else if (diceTwo === 2) {
        return secondWord [2];
    }  else if (diceTwo === 3) {
        return secondWord [3];
    }  else if (diceTwo === 4){
        return secondWord [4];
    }  else if (diceTwo === 5) {
        return secondWord [5];
    }  else {
        return 'try again';
    }
};

let diceThree = Math.floor(Math.random() * 6);

const thirdResult = (diceThree) => {
    if (diceThree === 0){
       return thirdWord [0];
    }  else if (diceThree === 1){
        return thirdWord [1];
    }  else if (diceThree === 2) {
        return thirdWord [2];
    }  else if (diceThree === 3) {
        return thirdWord [3];
    }  else if (diceThree === 4){
        return thirdWord [4];
    }  else if (diceThree === 5) {
        return thirdWord [5];
    }  else {
        return 'try again';
    }
};

console.log(`this is special for you buddy: ${firstResult(diceOne)} ${secondResult(diceTwo)} ${thirdResult(diceThree)} `);