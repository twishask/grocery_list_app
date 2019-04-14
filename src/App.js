import React, { Component } from 'react';
import './App.css';
import BucketListItems from './BucketListItems.js';
import ReactFileReader from 'react-file-reader';

class App extends Component {
  inputElement =React.createRef()
  constructor() {
    super()
    
    this.state = {
      items: [],
      currentItem: {text:'', key:'', pictures: []},
      imageValue: 'Upload images',
    }
  }
  
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = this.state.currentItem
    currentItem.text = itemText;
    currentItem.key = Date.now();
    this.setState({
      currentItem,
    })
  }
  
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        imageValue: 'Upload images',
        currentItem: { text: '', key: '', pictures: []},
      })
      
    }
  }  
  
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  
  handleFiles = (files) => {
  let imageValue = (files.base64.length+' files uploaded') 
  let currentItem = this.state.currentItem
  currentItem.pictures = files.base64;
  this.setState ({
    currentItem,
    imageValue,
  })
}
  
  render() {
    return (
      <div className="App">
        <h2>Add items to your Bucket List</h2>
        <div className="header">
          <form>
            <ReactFileReader fileTypes={[".csv",".zip",".jpeg",".png",".jpg"]} base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
              <input type ="button" className='btn' value={this.state.imageValue}/>
            </ReactFileReader>
            <input type = "text" placeholder="Title" ref={this.inputElement} value={this.state.currentItem.text} onChange={this.handleInput} />
            <button onClick={this.addItem}> Add </button><br></br> 
          </form>
        </div>
        <BucketListItems items={this.state.items} deleteItem={this.deleteItem.bind(this)} />
      </div>
    );
  }
}

export default App;
