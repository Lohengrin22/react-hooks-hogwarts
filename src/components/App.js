import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigList from "./PigList";

function App() {
const [pigs, setPigs] = useState(hogs)
const [isGreased, setIsGreased] = useState(false)
const [filteredPigs, setFilteredPigs] = useState(hogs)

function handleGreaseFilterOn(hogs){
  // const greasedPigs = (pigs.filter((pig) => isGreased? 
//   setIsGreased((isGreased) => !isGreased)
//   if (isGreased === true ) {
//     setFilteredPigs(pigs.filter((pig) => pig.greased = true)}
//  else {
//     }
    const filteredHogs = hogs.filter((hog) => {
    if (isGreased) {
      return hog.greased;
    } else {
      return false;
    }
    });
  }
  // setPigs(pigs.filter((pig) => isGreased? true : pig.greased ))
  // console.log(greasedText)



  return (
    <div className="App">
      <Nav onButtonClick={handleGreaseFilterOn} pigs={pigs} />
      <PigList pigs={pigs}/>
    </div>
  );
}

export default App;
