import React from 'react'
import { useNavigate} from 'react-router-dom'
import { IoStorefrontOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
const state = useSelector((state)=>state.CartReducer);
const dispatch=useDispatch()

console.log(state);
  return (
    <nav classname="navbar fixed-top ">
  <div classname="container-fluid bg-bs-tertiary-color ">
    <div className='d-flex justify-content-between bg-warning-subtle'>
   <div><IoStorefrontOutline className='icon' /></div>
   <div ><FaCartPlus className='icon' />{state.length}</div>
   </div>
  </div>
</nav>
  )
}

export default Navbar