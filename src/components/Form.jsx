import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form>
      <input
        onChange={handleChange}
        className="new-repair"
        placeholder="What needs to be repaired?"
        autoFocus=""
        value={inputValue}
      />
    </form>
  );
};

export default Form;
