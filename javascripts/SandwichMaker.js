var SandwichMaker = (function() {
  var totalPrice = 0;

	return {
    	addTopping: function(toppingPrice) {
      		totalPrice += toppingPrice;
      		SandwichMaker.getTotalPrice();
    	},
    	removeTopping: function() {
    		totalPrice -= toppingPrice;
    		SandwichMaker.getTotalPrice();
    	},
    	getTotalPrice: function() {
    		return totalPrice;
    	}
  	};

})();