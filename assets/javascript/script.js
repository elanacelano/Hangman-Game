      // what are the varhiables 
    var hangmanGame = { //opening hangmanGame object
      hangmanState: -1,
      gameAnswer: "Boolean",
      gameShownAnswer: "_ _ _ _ _ _ _",
      // how many guesses
      gameAnswer: function() {
        document.onkeyup = function(event) {
    	alert(event);
	};
//       if (x === "B" || x === "O" || x === "O" || 
//           x === "L" || x === "E" || x === "A" || x === "N") { 
//         alert ("You pressed the 'A' key!");
//     }
// }

      }
    }// closing hangmanGame object

document.getElementById("hangmanletters").innerHTML = hangmanGame.gameShownAnswer;
hangmanGame.gameAnswer();