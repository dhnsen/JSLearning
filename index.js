

// //BlackJack by Dan Hansen

// let card1 = "Ace of Spades";
// let card2 = "Ten of Hearts";


// console.log("You are dealt: ");
// console.log(" " + card1);
// console.log(" " + card2);

// let values = [];

// console.log(values, typeof(values));

// let cities = ['New York', 'Los Angeles', 'Chicago'];

// console.log(cities);


// values.push(44, 45, 46);

// results = values.pop();

// console.log(values, results);

// let score = 1000;

// if (score >= 100){
//     score = score + 100;
// };

// console.log("Score is: ", score);


// let state = 'FL';
// let taxPercent = 0;

// if (state === 'FL') {
//     taxPercent = 7;
// }
// else if (state === 'NY') {
//     taxPercent = 8.875;
// }

// console.log('Tax rate: ', taxPercent, '%');




// switch (state) {

//     case 'NY':
//         console.log('New York');
//         break;

//     default:
//         console.log('unknown state');
//         break;
// }

//  let count = 1;

//  while (count < 3) {
//      console.log(count);
//      count++;
//  }


// function myFunction() {
//     console.log('in myFunction')
// }

// myFunction();

// function showMessage(message, anotherMessage) {
//     console.log(message, anotherMessage);
// }

// showMessage("wika, wika", " wam");

// function triplePlus(value) {
//     let newValue = value * 3;
//     return newValue;
// }

// console.log(triplePlus(100));

// function changeCard(card) {
//     card.suit = "Clubs";
// }

// let cards = [
//     {
//         suit: "Hearts",
//         value: 'Queen'
//     }
// ]

// let result = new Date().toDateString();

// console.log(result);

let textArea = document.getElementById('text-area');

let okButton = document.getElementById('ok-button');

okButton.addEventListener('click', function(){
    textArea.innerText = "Yeah! you clicked it!";
});

