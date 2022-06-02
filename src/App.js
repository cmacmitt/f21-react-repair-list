import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RepairList from "./components/RepairList";
import Form from "./components/Form";

function App() {
  const initialState = JSON.parse(localStorage.getItem("repairs"));

  const [repairs, setRepairs] = useState(initialState || []);

  useEffect(() => {
    localStorage.setItem("repairs", JSON.stringify(repairs));
  }, [repairs]);

  const handleAddRepair = (description) => {
    const id = +(Math.random() * 100).toFixed(4);
    setRepairs((prevState) => [
      { id: id, description: description, completed: false },
      ...prevState,
    ]);
  };

  const handleDeleteRepair = (id) => {
    setRepairs((prevState) => prevState.filter((repair) => repair.id !== id));
  };

  const handleToggleRepair = (id) => {
    // copy the array to a new array
    // find the index of the item that has the passed in id
    // toggle the completed status
    // return the new array

    setRepairs((prevState) => {
      const newRepairs = [...prevState];
      const itemIndex = newRepairs.findIndex((repair) => repair.id === +id);
      newRepairs[itemIndex] = {
        ...newRepairs[itemIndex],
        completed: !newRepairs[itemIndex].completed,
      };
      return newRepairs;
    });
  };

  const handleClearCompleted = () => {
    setRepairs((prevState) =>
      prevState.filter((repair) => repair.completed === false)
    );
  };

  return (
    <section className="fixmeapp">
      <Header>
        <Form addRepair={handleAddRepair} />
      </Header>

      <section className="main">
        <RepairList
          repairs={repairs}
          deleteRepair={handleDeleteRepair}
          toggleRepair={handleToggleRepair}
        />
      </section>

      <Footer clearCompleted={handleClearCompleted} />
    </section>
  );
}

export default App;
