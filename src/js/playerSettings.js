import $ from "jquery";

var btnpressed = [];
btnpressed[0] = false;
btnpressed[1] = false;
btnpressed[2] = false;
btnpressed[3] = false;

var firstPlayer = false;
var secondPlayer = false;

var pressedPlayer1 = -1;
var pressedPlayer2 = -1;

$(document).ready(function() {
  $("#btnP1").click(function() {
    btnpressed[0] = !btnpressed[0];
    selectPlayer(0);
  });
  $("#btnP2").click(function() {
    btnpressed[1] = !btnpressed[1];
    selectPlayer(1);
  });
  $("#btnP3").click(function() {
    btnpressed[2] = !btnpressed[2];
    selectPlayer(2);
  });
  $("#btnP4").click(function() {
    btnpressed[3] = !btnpressed[3];
    selectPlayer(3);
  });
  $("#startGame").click(function() {
    if (btnpressed.filter(Boolean).length === 2) {
      var temp = 0;
      var indices = [];
      for (var i = 0; i < btnpressed.length; i++) {
        if (btnpressed[i]) {
          indices[temp] = i;
          temp++;
        }
      }
      console.log("indices: " + indices);
      // var payload = {
      //     "instruction": "setPlayers",
      //     "x": indices[0],
      //     "y": indices[1]
      // };
      // sendRequest("POST","/squarecastle/api/command", payload)
      document.body.style.cursor = "progress";
      setTimeout(function() {
        location = "/squarecastle";
      }, 1000);
    } else if (btnpressed.filter(Boolean).length === 1) {
      alert("Du hast nur einen Spieler ausgewählt!");
    } else {
      alert("Du hast noch keinen Spieler ausgewählt!");
    }
  });
  //($('#selectedPlayer1').removeAllClasses("");
  //$('#selectedPlayer2').removeAllClasses("");
});

export function selectPlayer(color) {
  var colorClassname = "";

  switch (color) {
    case 0:
      colorClassname = "blueSelected";
      break;
    case 1:
      colorClassname = "redSelected";
      break;
    case 2:
      colorClassname = "greenSelected";
      break;
    case 3:
      colorClassname = "purpleSelected";
      break;
  }

  if (btnpressed[color] === true) {
    if (firstPlayer === false && pressedPlayer1 === -1) {
      firstPlayer = true;
      pressedPlayer1 = color;
      document.getElementById("p1Selected").className = "";
      document.getElementById("p1Selected").classList.add(colorClassname);
    } else if (secondPlayer === false && pressedPlayer2 === -1) {
      secondPlayer = true;
      pressedPlayer2 = color;
      document.getElementById("p2Selected").className = "";
      document.getElementById("p2Selected").classList.add(colorClassname);
    } else {
      alert(
        "Zu viele Spieler ausgewählt! Du musst zuerst einen bereits ausgewählten Spieler wieder entfernen."
      );
      btnpressed[color] = false;
    }
  } else {
    if (firstPlayer === true && pressedPlayer1 === color) {
      firstPlayer = false;
      pressedPlayer1 = -1;
      document.getElementById("p1Selected").className = "";
      document.getElementById("p1Selected").classList.add("noneSelected");
    } else if (secondPlayer === true && pressedPlayer2 === color) {
      secondPlayer = false;
      pressedPlayer2 = -1;
      document.getElementById("p2Selected").className = "";
      document.getElementById("p2Selected").classList.add("noneSelected");
    }
  }
}
