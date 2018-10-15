var convertGaltoLtr = function (gallon) {
	var liter = gallon*3.78541;
  alert("The amount in liters is: " + liter);
}

var gallon = parseInt(prompt("How much does the recipe ask for in gallons?"));

convertGaltoLtr(gallon);

var convertLtrtoGal = function (liter) {
	var gallon = liter/3.78541;
  alert("The amount in gallons is: " + gallon);
}

var liter = parseInt(prompt("How much does the recipe ask for in liters?"));

convertLtrtoGaltoLtr(liter);
