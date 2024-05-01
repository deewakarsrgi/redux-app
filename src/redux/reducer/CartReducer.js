import { ADD_TO_CART } from "../../Cnstant";

const initialState=[]
  

    
    

const CartReducer =(state = initialState , action)=>{
  const products = action.payload;

switch(action.type){
  case ADD_TO_CART:
    const tempstate = state.filter((item)=>products.id===item.id);
          if(tempstate.length >0){
            return state
          }
          else{
            return [...state , products]
          }
    
    case "INCREASE":
      const tempstate1= state.map((item)=>{
        if (item.id === products.id){
          return {...item , quantaty :item.quantaty +1}
        }
        else {
          return item
        }
      })
      return tempstate1;
      case "DECREASE":
        const tempstate2=state.map((item)=>{
          if(item.id===products.id){
            return {...item , quantaty: item.quantaty -1}
          }
          else{
            return item
          }
        })
        return tempstate2;
        case "REMOVE":
          const tempstate3 = state.filter((item)=> item.id!==products.id);
          return tempstate3
    
    default :
    return state
}
}
export default CartReducer;