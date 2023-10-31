import React, { useState } from "react";

function GoalsCreation(props) {
  //Declare a new state variable, using useState hook
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //When one of the form inputs changes, this function is triggered
  function handleChange(event) {
    const { name, value } = event.target;

    //It uses the spread operator to update the note state after extracting the name and value from the event target, which is an input field
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


  //submitGoal() is called when the form is submitted
  function submitGoal(event) {
    //onAdd() is defined in the parent component and is used to add a new goal
    props.onAdd(note);
    //Making textarea clean after submission
    setNote({
      title: "",
      content: ""
    });
    //prevent refreshing of page after submit
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Name your target!"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Set a process to achive"
          value={note.content}
          onChange={handleChange}
          rows="3"
        />
        <button onClick={submitGoal}>Set!</button>
      </form>
    </div>
  );
}

export default GoalsCreation;