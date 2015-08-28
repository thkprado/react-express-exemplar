var React = require('react/addons');

console.log('Hello from JSX!');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
  name: 'Ice Cream'
}, {
  name: 'Waffles'
}, {
  name: 'Candy',
  purchased: true
}, {
  name: 'Snarks'
}];

/* jshint ignore:start */
/* beautify ignore:start */
React.render(<GroceryItemList items={initial}/>, app);
/* beautify ignore:end */
/* jshint ignore:end */
