import React from 'react';
import '../styles/navbar.css';
import {Link} from 'react-router-dom'
import './navbar.css'
                
const Navbar = ({size,  setShow }) => {
  return (
    // <nav>
    //     <div className="nav_box">
        
    //         <span className="my_shop" onClick={()=>setShow(true)} >
    //             My Shopping
    //         </span>
           
    //         <div className="cart"  onClick={()=>setShow(false)} >
    //             <span>
    //              <span>Add To Cart</span>   <i className="fas fa-cart-plus"></i>
    //             </span>
    //             <span>{size}</span>
    //         </div>
    //     </div>
    // </nav>


<div className='main'>
<div className='nav'>
  <Link to='/Rahul'><div className="logo">Rahul Arora</div></Link> 
   <div className="content">
       <ul>
         <Link to='/'><li>Home</li></Link>  
         <Link to='/product'><li onClick={()=>setShow(true)}>Product</li></Link>    
         <Link to='/cart'><li  onClick={()=>setShow(false)}>Add To Cart: <b>{size}</b> </li></Link>  
        
         
       </ul>
   </div>
</div>
</div>
  )
}

export default Navbar