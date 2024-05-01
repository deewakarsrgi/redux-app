import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './Product.css'
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../redux/Action';




const Product = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.CartReducer);
    console.log(state);
    const handleAddcart = (data) => {
        dispatch(addtoCart(data))
            console.log(data);
    }

    //   const [selected ,setSelected]=useState({});
    //   const [selected_cart ,setSelectedCart]=useState({});
    //   const history = useNavigate();
    //   const handleDetails =(data)=>{
    //     setSelected(data)
    //     history("/productDetails/"+data.id)
    //   }
    //   const handleCart = (data) =>{
    //     setSelectedCart(data)
    //     history("/cart/" +data.id)
    //   }
    const handleProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data)
                console.log(res.data);
            })
    }
    useEffect(() => {
        handleProducts()
    }, [])

    return (

        <div>
            <div className='container-fluid background'>

                <div className="row my-3">

                    {products.map((data, index) => {
                        data.quantaty = 1
                        return (



                            <div className="col-sm-6 col-md-6 col-lg-4" key={index}>
                                <div className="card my-3 cardstyle">
                                    <div className='card-body'>
                                        <div><img className="w-100 imagestyle" src={data.image} /></div>
                                        <div>{data.title}</div>
                                        <div>${data.price}</div>
                                        <div className='d-flex justify-content-around'>
                                            <button className="btn btn-primary btn-sm" onClick={() => handleAddcart(data)}>add to cart</button>
                                            <button className="btn btn-info btn-sm" >Details</button>
                                        </div>
                                    </div>

                                </div>

                            </div>





                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Product;