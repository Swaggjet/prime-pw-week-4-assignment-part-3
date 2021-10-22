console.log('***** Cart Functions *****');


function isFull(){  //creating a function to loop through array to check if it empty
  for ( let i = 0; i < basket.length; i++){
  if (basket.lenght <= maxItems) {
      return true;
    } else {
      return false;
  }

console.log('basket is:', basket );
console.log('add some apples to the basket',
 addItem('sandwich');
 addItem('apples');
console.log(`Checking added {basket}`, basket);

  //creating function to list items in basket
function listItems() {
  for( let items of basket){
    console.log('items in the basket', items);
  }
}

console.log('check to see if items are deleted ', empty());
console.log('basket is now empty',basket);
console.log('no room for the items', isFull());

// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []
const maxItems = 5;

}

function addItem(item){
  basket.push(item);
  return true;
}

//----DRIVER CODE------------------------------------------------
console.log('basket is:', basket);
addItem('baseball')
addItem('tennis ball');
addItem('basketball');
addItem('football');
addItem('javalin');

console.log('basket is', basket);
