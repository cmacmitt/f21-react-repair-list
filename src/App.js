import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RepairList from "./components/RepairList";
import Form from "./components/Form";

function App() {
  const initialState = [
    { id: 1, description: "car makes a funny sound", completed: true },
    { id: 2, description: "window is broken", completed: false },
    { id: 3, description: "bike has a flat tire", completed: true },
  ];

  const [repairs, setRepairs] = useState(initialState);

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

      <Footer />
    </section>
  );
}

export default App;
