import { useState } from "react";

const Form = ({ addRepair }) => {
  const [inputValue, setInputValue] = useState("");

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRepair(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setInputValue(event.target.value)}
        className="new-repair"
        placeholder="What needs to be repaired?"
        autoFocus=""
        value={inputValue}
      />
    </form>
  );
};

export default Form;
