import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Secret from "./Secret";
import Game from "./Game"

const style = {
  textAlign: "center",
};

const header = {
  color: "yellow"
}

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/secret");
  };

  return (
    <div style={style}>
      <h1 style={header}>Brain Quiz</h1>
      <button onClick={handleClick}>Fun</button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/secret" element={<Secret />} />
      <Route path="/game/:id" element={<Game />} />
    </Routes>
  );
}

export default App;
