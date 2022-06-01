const Repair = (props) => {
  const { id, description, completed, deleteRepair, toggleRepair } = props;

  return (
    // <li data-id={id} className={completed && "completed"}>
    <li data-id={id} className={completed ? "completed" : ""}>
      <div className="view">
        <input
          onClick={() => toggleRepair(id)}
          className="toggle"
          type="checkbox"
          checked={completed ? "completed" : ""}
        />
        <label>{description}</label>
        <button onClick={() => deleteRepair(id)} className="destroy"></button>
      </div>
    </li>
  );
};

export default Repair;
