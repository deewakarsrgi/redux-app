import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartitem from './Cartitem';

const Cart = () => {
    const state = useSelector((state)=>state.CartReducer);
    const dispatch=useDispatch()
    console.log(state)
    
   
    
  return (
    <div>
   <div className="cartContainer container">
      <div className="row">
        <div className="col-md-6">
            { state.map((product)=>{
                return (
                  <div>
                    <img src={product.image}/>
                  </div>
                )
            })}
           
            </div>
            </div>
        </div>
    
    </div>
  )
}

export default Cart
