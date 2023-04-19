import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {price, category, image} = item;
  return (
    <div className="cards">
        
        <div className="image_box">
            <img src={image} alt="Image" />
        </div>
        <div className="details">
            <p>{category}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards