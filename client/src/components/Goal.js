import React from "react";

function Goal(props) {
  //The purpose of handleClick() is to handle the click event that occurs after the "DONE!" button is clicked
  function processing() {
    //This enables parent component to handle the deletion of this particular goal
    props.deleting(props.id);
  }

  return (
    <div className="goal">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={processing}>DONE!</button>
    </div>
  );
}

export default Goal;