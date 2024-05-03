import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart.jsx';
import './index.css'


export default function App (){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
  
    async function fetchProducts() {
    try {
      setLoading(true)
      const respons = await axios.get('https://restcountries.com/v3.1/all')
      setData(respons.data)
      setLoading(false)
    } catch (error) {
      console.log(error.message);
      setLoading(false)
      setError(error.message)
    }
   
  }
    useEffect(()=>{
      fetchProducts()
    },[])


  

    return<div className='app'>
       {loading && <p>Loading....</p>}
       {error&& <p>{error}</p>}
       {data.map((item, index)=><Cart key={index} item={item}/>)}
    </div>
}