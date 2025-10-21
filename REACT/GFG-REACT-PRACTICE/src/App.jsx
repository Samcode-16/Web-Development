import {useState} from "react";

function App() {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setShowName(true);
    }

    return (
      <div className = "App">
        <form>
          <label>Name : </label>
          <input
            type="text" 
            name = "name"
            value = {name}
            onChnage = {(e) => setName(e.target.value)}
            />
            <button onClick = {handleSubmit} type = "submit">
            Submit
            </button>
        </form>
        {showName === true && <p>You have submitted. Name: {name}</p>}

      </div>
    );

}

export default App;

// import React, { useState } from "react";
// import Child from './child';
// import './App.css';



//using Array.map()
// const arrayList = ['List 1', 'List 2', 'List 3'];

// const UsingArrayMap = () => (
//   <div>
//     {
//       arrayList.map((item, index) => (
//         <div key={index}>{item}</div>
//       ))
//     }
//   </div>
// );

// const App = () => (
//   <div>
//     <h2>Using Array.map</h2>
//     <UsingArrayMap/>
//   </div>
// );

//using react list
// const App = () => {
//   const COMPANY = ["GEEKS", "FOR", "GEEKS"];
//   const handleClick = (COMPANY) => {
//     alert(`You clicked on ${COMPANY}`);
//   };
//   return (
//     <ul>
//       {COMPANY.map((COMPANY, index) => (
//         <button key = {index} onClick = {() => handleClick(COMPANY)}>
//           {COMPANY}
//         </button>
//       ))}
//     </ul>
//   );
// };

// export default App;

// class Parent extends  Component {
//   render() {
//     return (
//       <div className="parent-container">
//         <h1>Parent Container</h1>
//         <Child greeting="Hello from Parent"/>
//       </div>
//     );
//   }
// }

// export default Parent;

// function App() {
  //Increment decrement demo
  // const [value, setValue] = useState(0);  //initialise state with 0

  // const onClickIncrement = () => {
  // //increment value by 1 and also re-render to display on screen
  //   setValue((prevCount) => {
  //     return prevCount + 1;
  //   });
  //   setValue((prevCount) => prevCount + 1);
  //   setValue((prev) => prev + 1);  
  //   //we can use any variable inside braces as its just a local variable
  // }

  // const onClickDecrement = () => {
  //   //decrement value by 1
  //   setValue(value -1);
  // }

  // return (
  //   <>
  //   <h1>Counter App</h1>
  //   <h1>{value}</h1>
  //   <button onClick = {onClickIncrement}>Increment</button>
  //   <button onClick = {onClickDecrement}>Decrement</button>
  //   </>
  // );
// }

// export default App;
