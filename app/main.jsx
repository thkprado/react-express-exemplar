var React = require('react/addons');


console.log('Hello from JSX!');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var initial = groceryItemStore.getItems();

function render() {
  /* jshint ignore:start */
  /* beautify ignore:start */
  React.render(<GroceryItemList items={initial}/>, app);
  /* beautify ignore:end */
  /* jshint ignore:end */
}

groceryItemStore.onChange(function(items) {
  initial = items;
  render();
});

render();
