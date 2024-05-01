//add to cart 
import { ADD_TO_CART } from "../Cnstant"
export const addtoCart =(product)=>{
    return {
        type : ADD_TO_CART,
        payload: product
    }
}

export const incriseItem =(product)=>{
    return{
    type:"INCRISE",
    payload: product
}
}
export const dicrise =(product)=>{
    return {
        type:"DICRISE",
        payload:product
    }
}
export const remove =(product)=>{
    return {
        type:"REMOVE",
        payload:product
    }
}
