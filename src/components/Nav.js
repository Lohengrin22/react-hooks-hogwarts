import React, {useState} from "react";
import piggy from "../assets/porco.png";

const Nav = ({onButtonClick, pigs}) => {
  
  
  
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
        <br></br>
      <button onClick={() => onButtonClick(pigs)}>
     Greased
     </button>
      </div>
    </div>
  );
};

export default Nav;
