import React from "react";


const Friend = (props) => {
  return (
      <div>
        {props.img}
        <p>{props.name}</p>
      </div>
  )
};

export default Friend;