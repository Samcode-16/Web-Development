// import React, { useState } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

//useState HOOK
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <div className="App">
//         <center><h1>Demo of hooks</h1>
//         <h2>You have clicked me {count} this many times</h2>
//         <button onClick = {() => setCount(count + 1)}>Click Me</button>
//         </center>
//       </div>
//     </>
//   );
// }

//useEffect HOOK
function App () {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  const getData = async (URL) => {
    try{
      //use axios as we do not need to convert data into json
      const {data: {products}} = await axios.get(URL);
      console.log(products);
      setProducts(products);
    }
    catch(error) {
      return error
    }
  }

  useEffect(() => {
    const URL = `https://dummyjson.com/products`
    getData(URL);
  }, [count]);             //good practice to have an empty dependancy array to avoid calling callback function ervrytime the page is re-redndered


  return (
    <>
      <button onClick = {() => setCount(count+1)}>Click - {count}</button>
      {
        products && products.length > 0 && products.map(product => <p key = {product.id}>{product.title} - { "$" + product.price}</p>)
      }
    </>
  );
}
export default App;
