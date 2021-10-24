// import logo from './logo.svg';
import './App.css';
// import React, {MouseEvent} from 'react';

interface Button {
  text: String;
  action: Function;
}

// const numbers: Button[] = [
//   {
//     text: "7",
//     action: (e: MouseEvent<HTMLButtonElement>) => {e.target.value}
//   }
// ];
// Change to accept an array of objects with text and function
function NumberButtons(){
  return [7,8,9,4,5,6,1,2,3,0].map((number) =>
    <button className={`${number}`} key={`b-${number}`} onClick={(e) => console.log(e.target.value)} value={number}>
      <h1>{number}</h1>
    </button>
  );
} 

function App() {
  return (
    <div className="calculator">
      <main>
        <div className="screen">
          <h1>000</h1>
        </div>
        <div className="number buttons">
          <NumberButtons/>
        </div>
        <div className="action buttons">

        </div>
      </main>
    </div>
  );
}

export default App;