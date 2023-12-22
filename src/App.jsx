import { useState } from "react";
import "./App.css";
import { Header, Dropdown } from "./Components";
import { DROP_DOWNS } from "./constants";

function App() {
  const [dropdown, setDropdown] = useState("");

  const handleSelectDropdown = (value) => {
    setDropdown(value);
    console.log("Selected Value", value);
    console.log("Previous dropdown value", dropdown);
  }
  return (
    <div className="w-full h-screen bg-sky-300 font-mono">
      <Header />
      <div className="w-full flex items-center flex-col mt-10">
        <div>
          <h1 className="text-3xl font-bold my-3">
            Should you use a dropdown?
          </h1>
          <Dropdown options={DROP_DOWNS} onSelect={handleSelectDropdown} />
        </div>
      </div>
    </div>
  );
}

export default App;
