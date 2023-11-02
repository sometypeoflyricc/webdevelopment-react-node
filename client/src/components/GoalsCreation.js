import React, { useState } from "react";

function GoalsCreation(props) {
  //Declare a new state variable, using useState hook
  const [goal, setGoal] = useState({
    titleOfGoal: "",
    contentOfGoal: ""
  });

  //When one of the form inputs changes, this function is triggered
  function handleChange(e) {
    const { name, value } = e.target;

    //It uses the spread operator to update the goal state after extracting the name and value from the event target, which is an input field
    setGoal(previousGoals => {return { ...previousGoals, [name]: value}; });
  }


  //submitGoal() is called when the form is submitted
  function submitGoal(e) {
    //onAdd() is defined in the parent component and is used to add a new goal
    props.adding(goal);
    //Making textarea clean after submission
    setGoal({titleOfGoal: "", contentOfGoal: ""});
    //prevent refreshing of page after submit
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="titleOfGoal"
          placeholder="Name your target!"
          value={goal.titleOfGoal}
          onChange={handleChange}
        />
        <textarea
          name="contentOfGoal"
          placeholder="Set a process to achive"
          value={goal.contentOfGoal}
          onChange={handleChange}
          rows="5"
        />
        <button onClick={submitGoal}>Set!</button>
      </form>
    </div>
  );
}

export default GoalsCreation;