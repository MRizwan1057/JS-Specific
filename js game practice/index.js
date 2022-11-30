const prompt = require("prompt-sync")();
luckyNum = Math.floor(Math.random() * 101);
// console.log(luckyNum);
let counter = 0;

while (true) {
  const num = prompt("Enter a number   :");
  counter++;
  if (num == luckyNum) {
    console.log(`Wow you won in  ${counter}  attempts...`);
    break;
  } else if (num - 5 == luckyNum) {
    console.log(`Uff... You're just higher....`);
  } else if (num + 5 == luckyNum) {
    console.log(`Uff... You're just lower....`);
  } else if (num < luckyNum) {
    console.log("Please enter higher number");
  } else {
    console.log("please enter lower number");
  }
}
