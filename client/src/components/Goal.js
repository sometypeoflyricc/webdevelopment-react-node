import React from "react";

function Goal(props) {
  //The purpose of handleClick() is to handle the click event that occurs after the "DONE!" button is clicked
  function handleClick() {
    //This enables parent component to handle the deletion of this particular goal
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DONE!</button>
    </div>
  );
}

export default Goal;