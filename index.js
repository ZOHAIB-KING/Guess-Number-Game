secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 15;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    //------------------------ document.querySelector(".message").textContent = "⛔ No Number....";  ---------------------

    displayMessage("⛔ No Number....");

    // When player win the game
  } else if (guess === secretNumber) {
    //  ---------------------document.querySelector(".message").textContent = "🎉 Correct Answer";
    displayMessage("🎉 Correct Answer");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".highscore").textContent = score;

    // ---------------------------------------------------- Second pattern --------------------------------------------

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// ----------------------------------------------------------- First Pattern ---------------------------------------------

// When guess is to high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too High!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }

//     // When guess is to low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too  Low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

document.querySelector(".btn").addEventListener("click", function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing... ?";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
});
