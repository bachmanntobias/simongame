var RED = "#ed6161";
var GREEN = "#9bff8c";
var YELLOW = "#ffff7f";
var BLUE = "#95bcf9";

function weiter() {
  setTimeout(function() {
    var nextColor = [RED, GREEN, YELLOW, BLUE][Math.floor(Math.random() * 4)];
    spielstand.push(nextColor);
  }, 100);
  if (blinker == "RED") {
    rotblinken();
  }
  if (blinker == "GREEN") {
    grunblinken();
  }
  if (blinker == "YELLOW") {
    gelbblinken();
  }
  if (blinker == "BLUE") {
    blaublinken();
  }
  return;
}

$(document).ready(function() {
  $("#anzeige").html("");

  $("#red").css("background", RED);
  $("#green").css("background", GREEN);
  $("#yellow").css("background", YELLOW);
  $("#blue").css("background", BLUE);

  if ($("#switch").is(":checked")) {
    $(".container").css("background", "red");
  }
  $("#start").click(function() {
    var runde = 0;
    weiter(runde);
    $("#anzeige").html("000");

    var spielstand = [];
    var blinker;
    if (!spielstand.length) {
      blinker = spielstand[0];
    }
    blinker = spielstand[spielstand.length];

    if (blinker == "RED") {
      rotblinken();
    }
    if (blinker == "GREEN") {
      grunblinken();
    }
    if (blinker == "YELLOW") {
      gelbblinken();
    }
    if (blinker == "BLUE") {
      blaublinken();
    }

    var string = "00000000000   Du hast die geheimnachricht entdeckt ";
    var arr = [];
    var str2 = "";
    var arr3 = [];
    arr = string.split("");
    for (var i = 0; i < arr.length; i++) {
      str2 += arr[i];
      if ((i + 1) % 3 === 0) {
        arr3.push(str2);
        str2 = "";
      }
    }

    var z = 0;
    $("#anzeige").html("000");

    $("#strict").click(function() {
      $("#anzeige").html(arr3[z], z++);
    });

    $("#red").click(function() {
      rotblinken();
    });
    $("#blue").click(function() {
      blaublinken();
    });
    $("#yellow").click(function() {
      gelbblinken();
    });
    $("#green").click(function() {
      grunblinken();
    });
    function rotblinken() {
      RED = "#f00";
      $("#red").css("background", RED);
      setTimeout(function() {
        RED = "#ed6161";
        $("#red").css("background", RED);
      }, 700);
    }
    function gelbblinken() {
      YELLOW = "#ff0";
      $("#yellow").css("background", YELLOW);
      setTimeout(function() {
        YELLOW = "#ffff7f";
        $("#yellow").css("background", YELLOW);
      }, 700);
    }
    function grunblinken() {
      GREEN = "#0f0";
      $("#green").css("background", GREEN);
      setTimeout(function() {
        GREEN = "#9bff8c";
        $("#green").css("background", GREEN);
      }, 700);
    }
    function blaublinken() {
      BLUE = "#00f";
      $("#blue").css("background", BLUE);
      setTimeout(function() {
        BLUE = "#95bcf9";
        $("#blue").css("background", BLUE);
      }, 700);
    }
  });
});
