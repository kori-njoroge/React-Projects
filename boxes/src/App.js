import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Box from "./components/Box";
import boxes from "./boxes";

import "./App.css";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  function HandleClick(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  //   function HandleClick(id) {
  //     setSquares(prevSquares => {
  //         const newSquares = []
  //         for(let i = 0; i < prevSquares.length; i++) {
  //             const currentSquare = prevSquares[i]
  //             if(currentSquare.id === id) {
  //                 const updatedSquare = {
  //                     ...currentSquare,
  //                     on: !currentSquare.on
  //                 }
  //                 newSquares.push(updatedSquare)
  //             } else {
  //                 newSquares.push(currentSquare)
  //             }
  //         }
  //         return newSquares
  //     })
  // }

  const squareElements = squares.map((square) => {
    return (
      <Box
        key={square.id}
        id={square.id}
        on={square.on}
        handleClick={HandleClick}
      />
    );
  });

  return (
    <div className="App">
      {/* <Navbar /> */}
      {squareElements}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
