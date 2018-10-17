
	var convertGaltoLtr = function(gallon) {
		return gallon*3.78541;
	}

	var convertLtrtoGal = function (liter) {
		return liter/3.78541;
	}
// 	convertGaltoLtr(gallon);
//

// 	  alert("The amount in gallons is: " + gallon);
// 	}
//
// 	var liter = parseInt(prompt("How much does the recipe ask for in liters?"));
//
// 	convertLtrtoGaltoLtr(liter);
//
// });

$(document).ready(function() {
	$("#gal-to-liter").submit(function(event) {
		event.preventDefault();
		var gallon = parseInt($("input#gallon").val());
		var result = convertGaltoLtr(gallon);
		$(".output").text(result);
	});
	$("#liter-to-gallon").submit(function(event) {
		event.preventDefault();
		var liter = parseInt($("input#liter").val());
		var result = convertLtrtoGal(liter);
		$(".output2").text(result);
	});
});
