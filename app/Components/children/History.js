// Include React
var React = require("react");

// Creating the Results component
var History = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History </h3>
        </div>
        <div className="panel-body text-center">
          {
            this.props.list.map(function(obj){
              console.log(obj);
            return <p key={obj.input}>{obj.input} - {obj.date}</p>
           })
          }
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
