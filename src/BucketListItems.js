import React, { Component } from 'react'
import Slider from "react-slick";

class BucketListItems extends Component {
  constructor(props){
    super(props);
    this.createItem = this.createItem.bind(this);
    }
    
  createItem(item) {
    var settings = {
      dots: true,
      pauseOnHover: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 1000,
    };
    return (
      <div className="flex">
      <Slider {...settings} className="slider">
          {item.pictures.map(image => {
            return(
              <img src = {image} />
              )
          })}
        </Slider>
        {item.text}
        <button  onClick={() => this.props.deleteItem(item.key)}>Done</button>
      </div>
    )
  }
  render() {
    const Entries = this.props.items
    const listItems = Entries.map(this.createItem)
    return (
      <div className="flex-container">
      {listItems}
      </div>
    )
  }
}

export default BucketListItems
