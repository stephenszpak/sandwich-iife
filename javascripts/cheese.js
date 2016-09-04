var SandwichMaker = (function(makerCheese) {
    var cheesePrices = {
        american: .5,
        cheddar: .49
    };

    makerCheese.addCheese = function(selectedTopping) {
        for (var price in cheesePrices) {
            if (price == selectedTopping) {
      SandwichMaker.addTopping(cheesePrices[price]);
        } 
    }
};
    makerCheese.removeCheese= function(selectedTopping) {
        for (var price in cheesePrices) {
            if (price == selectedTopping) {
       SandwichMaker.removeTopping(cheesePrices[price]);
        } 
    }
};

return makerCheese;

})(SandwichMaker || {});