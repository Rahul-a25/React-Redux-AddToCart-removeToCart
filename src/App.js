import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';
import './styles/product.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';


const App = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
   <>
		<Navbar size={cart.length} setShow={setShow} />
    <Routes>
      <Route path='*' element={<Home/>}/>
      <Route path='/product' element={
			show ? <Product handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}/>
    <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
    </Routes>
    
		
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
	
  
    </>
  )
}

export default App