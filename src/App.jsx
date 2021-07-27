import React, { useState } from "react";
import Navigation from "./components/Nav/Navigation";
import Wrapper from "./components/Wrapper";

function App() {
  const [bg, setBg] = useState("bg-indigo-300");
  return (
    <div className={`${bg} bg-cover bg-center h-screen`}>
      <Navigation setBg={setBg} />
      <Wrapper />
    </div>
  );
}

export default App;
