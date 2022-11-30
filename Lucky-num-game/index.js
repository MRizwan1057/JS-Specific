$(document).ready(function () {
  console.log("ready!");

  let luckyNum = Math.floor(Math.random() * 101);
  console.log(luckyNum);
  let counter = 0;

  $("#sendbtn").click(function () {
    while (true) {
      let input = prompt("Guess a number  : ");
      $("#welcome").html("");

      counter++;

      if (input == luckyNum) {
        $("#welcome").html(
          "<h3>Wow You won in " + counter + " attempts......</h3>"
        );
        break;
      } else if (input - 5 == luckyNum) {
        alert(`Uff...just higher....`);
      } else if (input + 5 == luckyNum) {
        alert(`Uff...just lower....`);
      } else if (input < luckyNum) {
        alert("very lower");
      } else {
        alert("very higher");
      }
    }
    alert(`Wow you won in  ${counter}  attempts...`);
    console.log(`Wow you won in  ${counter}  attempts...`);
  });
});

// const prompt = require("prompt-sync")();
// luckyNum = Math.floor(Math.random() * 101);
// // console.log(luckyNum);
// let counter = 0;

// while (true) {
//   const num = prompt("Enter a number   :");
//   countter++;
//   if (num == luckyNum) {
//     console.log(`Wow you won in  ${counter}  attempts...`);
//     break;
//   } else if (num - 5 == luckyNum) {
//     console.log(`Uff... You're just higher....`);
//   } else if (num + 5 == luckyNum) {
//     console.log(`Uff... You're just lower....`);
//   } else if (num < luckyNum) {
//     console.log("Please enter higher number");
//   } else {
//     console.log("please enter lower number");
//   }
// }
