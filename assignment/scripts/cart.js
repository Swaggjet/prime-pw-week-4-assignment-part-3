console.log('***** Cart Functions *****');


let basket = []
const maxItems = 5

 //creating a function to loop through array to check if it empty
function isFull(){
  for ( let i = 0; i < basket.length; i++){
  if (basket[i] <= maxItems) {
      return true;
    } else {
      return false;
  }
}
}

  function addItem(item){
    basket.push(item);
    return true;
  }


console.log('basket is:', basket );
console.log('add some apples to the basket')
console.log(addItem(`sandwich`));
console.log(addItem(`apples`));
console.log(`Checking added {basket}`, basket);

  //creating function to list items in basket
function listItems() {
  for( let items of basket){
    console.log('items in the basket', items);
  }
}

listItems();

console.log('basket is:', basket);
console.log(addItem('baseball'));
console.log(addItem('tennis ball'));
console.log(addItem('basketball'));
console.log(addItem('football'));
console.log(addItem('javalin'));
console.log(addItem('golfball'));

function empty(){
  let items = basket.splice(0, basket.length);
  return items;

}
console.log('basket is', basket);
console.log('check to see if items are deleted ', empty());
console.log('basket is now empty',basket);
console.log('no room for the items', isFull());
