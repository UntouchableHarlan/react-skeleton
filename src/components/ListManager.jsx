var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function() {
    return {items: [], newItemText: ''};
  },

  onChange: function(event) {
    this.setState({newItemText: event.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var currentItems = this.state.items;

    currentItems.push(this.state.newItemText);

    this.setState({items: currentItems, newItemText:''});

  },


  render: function() {
    return (
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <input className="form-control" type="text" onChange={this.onChange} value={this.state.newItemText} />
              <button className="btn btn-success">Add</button>
            </form>
          </div>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }

});

module.exports = ListManager;
