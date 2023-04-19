import React, { useState,useEffect } from 'react';
import '../styles/product.css'
import Cards from './Cards';
import { useDispatch } from 'react-redux';
import store from '../redux/store';



const Product = ({handleClick}) => {
    // const dispatch= useDispatch();
    const [Data,SetData]=useState([])
    store.dispatch({
        type:'api' ,
        payload:Data
    
     })
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((result) => SetData(result));
          
      }, []);
    //   dispatch(item)

  return (
    <>
    <h1 style={{textAlign:"center", marginTop:"20px ",color:"red"}}>Product Component</h1>
    <section>
        
        {
            Data.length>0 ?(
            
                Data.map((item)=>(
                    <Cards item={item} key={item.id} handleClick={handleClick} />
                ))
            
            ):<h1 style={{textAlign:"center",color:"red"}}>Wait Product is Loading.....</h1>
        }
        
    </section>
    </>
  )
}

export default Product