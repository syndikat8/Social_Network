import React from "react";


const Friend = (props) => {
  return (
      <div>
        <img src={props.img} alt=""/>
        <p>{props.name}</p>
      </div>
  )
};

export default Friend;