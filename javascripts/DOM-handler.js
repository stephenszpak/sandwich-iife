
var finalSandwichPrice = 0;
var selectedTopping  = "";
var outputFinalPrice = document.getElementById("outputFinalPrice");
var submitButton = document.getElementById("btn");

var meatChoice = document.getElementById("meatChoice");

meatChoice.addEventListener("change", function(event) {

	if (event.target.checked) {
		selectedTopping = event.target.value;
	  	SandwichMaker.addMeat(selectedTopping);
	}
	if (event.target.checked === false){
		selectedTopping = event.target.value;
		SandwichMaker.removeMeat(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    outputFinalPrice.innerHTML = finalSandwichPrice;
});

var vegChoice = document.getElementById("vegChoice");

vegChoice.addEventListener("change", function(event) {

	if (event.target.checked) {
		selectedTopping = event.target.value;
	  	SandwichMaker.addVeg(selectedTopping);
	}
	if (event.target.checked === false){
		selectedTopping = event.target.value;
		SandwichMaker.removeVeg(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    outputFinalPrice.innerHTML = finalSandwichPrice;
});

var breadChoice = document.getElementById("breadChoice");

breadChoice.addEventListener("change", function(event) {

	if (event.target.checked) {
		selectedTopping = event.target.value;
	  	SandwichMaker.addBread(selectedTopping);
	}
	if (event.target.checked === false){
		selectedTopping = event.target.value;
		SandwichMaker.removeBread(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    outputFinalPrice.innerHTML = finalSandwichPrice;
});

var condimentChoice = document.getElementById("condimentChoice");

condimentChoice.addEventListener("change", function(event) {

	if (event.target.checked) {
		selectedTopping = event.target.value;
	  	SandwichMaker.addCondiment(selectedTopping);
	}
	if (event.target.checked === false){
		selectedTopping = event.target.value;
		SandwichMaker.removeCondiment(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    outputFinalPrice.innerHTML = finalSandwichPrice;
});

var cheeseChoice = document.getElementById("cheeseChoice");

cheeseChoice.addEventListener("change", function(event) {

	if (event.target.checked) {
		selectedTopping = event.target.value;
	  	SandwichMaker.addCheese(selectedTopping);
	}
	if (event.target.checked === false){
		selectedTopping = event.target.value;
		SandwichMaker.removeCheese(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    outputFinalPrice.innerHTML = finalSandwichPrice;
});
