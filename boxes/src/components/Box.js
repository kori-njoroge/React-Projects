import React from "react";
import "./Box.css";

export default function Box(props) {
  
  const styles = {
    backgroundColor: props.on ? "blue" : "yellow"
  };


  return <div className="box" 
  onClick={()=>props.handleClick(props.id)} 
  style={styles}  
  ></div>

}
