import React, { Component } from 'react'
class GroceryList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="GroceryListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input 
              placeholder="Item Name"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput} />
            <button type="submit"> Add Item </button>
          </form>
        </div>
      </div>
    )
  }
}

export default GroceryList
