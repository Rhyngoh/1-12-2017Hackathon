// Include React
var React = require("react");

// Creating the Results component
var History = React.createClass({
  var historyList = this.props.list.map(function(obj){
    <li>{obj}</li>
  })
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History </h3>
        </div>
        <div className="panel-body text-center">
          <ul>{historyList}</ul>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
