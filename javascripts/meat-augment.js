var SandwichMaker = (function(makerMeat) {
    var meatPrices = {
        turkey: 1.5,
        bacon: 1
    };

  	makerMeat.addMeat = function(selectedTopping) {
    	for (var price in meatPrices) {
      		if (price == selectedTopping) {
      SandwichMaker.addTopping(meatPrices[price]);
     	} 
    }
};
	makerMeat.removeMeat = function(selectedTopping) {
    	for (var price in meatPrices) {
     		if (price == selectedTopping) {
       SandwichMaker.removeTopping(meatPrices[price]);
		} 
  	}
};

return makerMeat;

})(SandwichMaker || {});