import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigList from "./PigList";

function App() {
const [pigs, setPigs] = useState(hogs)

function handleGreaseFilter(){
  console.log("hello")
 
}


  return (
    <div className="App">
      <Nav onButtonClick={handleGreaseFilter}/>
      <PigList pigs={pigs}/>
    </div>
  );
}

export default App;
