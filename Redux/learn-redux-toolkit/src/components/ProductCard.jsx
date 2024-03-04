import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import addItem from '../redux/slices/cartSlice';

const ProductCard = (props) => {
    let [stock, setStock] = useState(props.stock);
    const dispatch = useDispatch();
  
    let functionHandle = () => {
      if (stock > 0) {
        setStock(stock - 1);
      }
  
      let dispatchHandle = (e) => dispatch(addItem({ productName: props.productName, price}));
    };

  return (
    <div className='w-[300px] p-4 m-4 rounded-lg shadow-lg'>
        <img src={props.image} className='w-full mb-4'/> 

        <h2 className='text-slate-800 text-xl uppercase font-semibold'>
            {props.productName}
        </h2>

        <h3 className='text-slate-500 font-semibold'>
            {props.categoryName}
        </h3>

        <h4 className='text-xs text-slate-500 font-semibold'>
            SKU No. : {props.sku}
        </h4>

        <h4 className='text-xs text-slate-500 font-semibold'>
        In Stock: {stock}
        </h4>

        <p className='text-slate-800 my-4 text-justify'>
            {props.description}
        </p>
        
        <button onClick={functionHandle} className='p-2 w-full bg-slate-800 text-white uppercase font-semibold hover:bg-blue-700 rounded-lg' >Add to Cart</button>
    </div>
  )
}

export default ProductCard