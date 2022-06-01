import Repair from "./Repair";

const RepairList = (props) => {
  const { repairs, deleteRepair } = props;

  return (
    <ul className="repair-list">
      {repairs.map((repair) => (
        <Repair
          key={repair.id}
          id={repair.id}
          description={repair.description}
          completed={repair.completed}
          deleteRepair={deleteRepair}
        />
      ))}
    </ul>
  );
};

export default RepairList;
