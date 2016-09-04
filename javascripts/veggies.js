var SandwichMaker = (function(makerVeg) {
    var vegPrices = {
        lettuce: .5,
        tomato: .75
    };

    makerVeg.addVeg = function(selectedTopping) {
        for (var price in vegPrices) {
            if (price == selectedTopping) {
        SandwichMaker.addTopping(vegPrices[price]);
        } 
    }
};
    makerVeg.removeVeg = function(selectedTopping) {
        for (var price in vegPrices) {
            if (price == selectedTopping) {
        SandwichMaker.removeTopping(vegPrices[price]);
        } 
    }
};

return makerVeg;

})(SandwichMaker || {});