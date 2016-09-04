var SandwichMaker = (function(makerCondiment) {
    var condimentPrices = {
        ketchup: .2,
        mustard: .2
    };

    makerCondiment.addCondiment = function(selectedTopping) {
        for (var price in condimentPrices) {
            if (price == selectedTopping) {
      SandwichMaker.addTopping(condimentPrices[price]);
        } 
    }
};
    makerCondiment.removeCondiment= function(selectedTopping) {
        for (var price in condimentPrices) {
            if (price == selectedTopping) {
       SandwichMaker.removeTopping(condimentPrices[price]);
        } 
    }
};

return makerCondiment;

})(SandwichMaker || {});