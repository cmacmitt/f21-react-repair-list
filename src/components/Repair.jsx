import { useState } from "react";

const Repair = (props) => {
  const { id, description, completed, deleteRepair, toggleRepair } = props;

  const [isChecked, setIsChecked] = useState(completed);
  const handleChange = () => {
    toggleRepair(id);
    setIsChecked(!isChecked);
  };
  return (
    // <li data-id={id} className={completed && "completed"}>
    <li data-id={id} className={completed ? "completed" : ""}>
      <div className="view">
        <input
          onChange={handleChange}
          className="toggle"
          type="checkbox"
          checked={isChecked}
        />
        <label>{description}</label>
        <button onClick={() => deleteRepair(id)} className="destroy"></button>
      </div>
    </li>
  );
};

export default Repair;
