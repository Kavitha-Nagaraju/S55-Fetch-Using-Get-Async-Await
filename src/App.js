import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [products,getProducts]=useState([]);
  useEffect(()=>{
    getProductsFromServer();
  },[])
  let getProductsFromServer=async()=>{
    let reqOptions={
     method:"Get",
    };
    let JSONProducts = await fetch("https://fakestoreapi.com/products",reqOptions);
    let JSOProducts= await JSONProducts.json();
    getProducts(JSOProducts);
    console.log(JSOProducts);
  }
  return (
    <div className="App">
    <button onClick={()=>{
      getProductsFromServer();
    }}>Get Products</button>
    <div>
      {products.map((ele,i)=>{
        return <div className='products'>
          <h4>{ele.title}</h4>
          <img title={ele.description} src={ele.image}></img>
           <h4>₹{ele.price}</h4>
          </div>
        
      })}
      </div>
    </div>
  );
}

export default App;
