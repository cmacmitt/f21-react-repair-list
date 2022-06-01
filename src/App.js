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

  return (
    <section className="fixmeapp">
      <Header>
        <Form />
      </Header>

      <section className="main">
        <RepairList repairs={repairs} />
      </section>

      <Footer />
    </section>
  );
}

export default App;
