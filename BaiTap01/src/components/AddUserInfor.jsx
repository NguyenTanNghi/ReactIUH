import { useState } from "react";

const AddUserInfor = (props) => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const handleOnchangeInput = (event) => {
    setName(event.target.value);
  };
  const handleOnchangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user",
      Name: Name,
      Age: Age,
    });
  };

  return (
    <>
      <form action="" onSubmit={(event) => handleOnSubmit(event)}>
        <label htmlFor="">Your name:</label>
        <input
          type="text"
          value={Name}
          onChange={(event) => handleOnchangeInput(event)}
        />
        <br />
        <label htmlFor="">Your Age:</label>
        <input
          type="text"
          onChange={(event) => handleOnchangeAge(event)}
          value={Age}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
export default AddUserInfor;
