var SandwichMaker = (function(makerBread) {
    var breadPrices = {
        french: .6,
        italian: .9
    };

    makerBread.addBread = function(selectedTopping) {
        for (var price in breadPrices) {
            if (price == selectedTopping) {
      SandwichMaker.addTopping(breadPrices[price]);
        } 
    }
};
    makerBread.removeBread= function(selectedTopping) {
        for (var price in breadPrices) {
            if (price == selectedTopping) {
       SandwichMaker.removeTopping(breadPrices[price]);
        } 
    }
};

return makerBread;

})(SandwichMaker || {});