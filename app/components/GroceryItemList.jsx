var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    /* jshint ignore:start */
    /* beautify ignore:start */
    return (
      <div>
        <h1>Grocery Listify</h1>
        <div>
          {
            this.props.items.map(function(item, index) {
              return (
                <div>{item.name}</div>
              );
            })
          }
        </div>
      </div>
    );
    /* beautify ignore:end */
    /* jshint ignore:end */
  }
});
