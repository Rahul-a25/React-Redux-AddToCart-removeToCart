import React from 'react';
import "../styles/cart.css";

const Cart = ({cart, setCart, handleChange}) => {
    

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        alert('item removed')
        
    }

  return (
    <>
    <h1 style={{textAlign:"center",color:"red",marginTop:"20px"}}>Add To Cart Component</h1>
    <article style={{boxShadow:"0px 0px 10px gray",marginTop:"40px ",padding:"10px"}}>
        {
            cart.length > 0 ?(
                cart.map((item)=>(
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.image} />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <span className='pricewala'> Rs:{item.price}</span>
                            <button className='removewala' onClick={()=>handleRemove(item.id)} >Remove</button>
                        </div>
                    </div>
                ))
            ): <h1 style={{textAlign:"center",color:"blue"}}> No cart Added</h1>
        }
       
        {
           }
        
    </article>
    </>
    
  )
}

export default Cart