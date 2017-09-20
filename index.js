var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName = item;
 var randomPrice = Math.floor((Math.random()*100));
 var myObject = new Object({[itemName]:randomPrice});
 cart.push(myObject);
 console.log(itemName+" has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  function viewCart() {
    // write your code here
    if (cart.length === 0){
      console.log("Your shopping cart is empty.");
    }
    
    var items =[];
    for(var i=0;i<cart.length;i++){
      var currentObject = cart[i];
      for(var key in currentObject){
        items.push(key+" at $"+currentObject[key]);
      }
    }
    var info = "In your cart, you have ";
    
    switch (cart.length){
       case 1:
        console.log(info+items+".");
        break;
       case 2:
        items = items.join(' and ');
        console.log(info+items+".");
        break;
       // case 3:
       //  var index = cart.length - 1;
       //  var lastItem = items[index];
       //  items.pop();
       //  items = items.join(', ');
       //  console.log(info+items+" and "+lastItem+".");
       //  break;
      default:
        var index = cart.length - 1;
        var lastItem = items[index];
        items.pop();
        items = items.join(', ');
        console.log(info+items+" and "+lastItem+".");
        
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
  // if (cardNumber == null || cardNumber == NaN ){
  //   console.log("Sorry, we don't have a credit card on file for you.");
  // }
  // else{
  //   console.log("Your total cost is ${71}, which will be charged to the card 83296759.");
  // }
}
