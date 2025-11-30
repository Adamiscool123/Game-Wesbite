import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Secret from "./Secret";
import Game from "./Game";

const header = {
  textAlign: "center",
  color: "yellow"
}

const button = {
  borderRadius: "10%",
  width: "100px",
  height: "25px",
}

const styling = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  listStyleType: "none",
  color: "cyan",
}

const link = {
  color: "yellow"
}

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/maths");
  };

  return (
    <div>
      <h1 style={header}>Math Links</h1>
      <ul style={styling}>
        <li>Trigonometry (Unit Circle): <a href="https://en.wikipedia.org/wiki/Unit_circle" style={link}>https://en.wikipedia.org/wiki/Unit_circle</a></li>
        <li>Trigonometry Identities (Table): <a href="https://en.wikipedia.org/wiki/List_of_trigonometric_identities" style={link}>https://en.wikipedia.org/wiki/List_of_trigonometric_identities</a></li>
        <li>Algebra I (Purplemath): <a href="https://www.purplemath.com/modules/index.htm" style={link}>https://www.purplemath.com/modules/index.htm</a></li>
        <li>Algebra I Practice (Khan Academy): <a href="https://www.khanacademy.org/math/algebra" style={link}>https://www.khanacademy.org/math/algebra</a></li>
        <li>Geometry Proof Basics: <a href="https://www.mathsisfun.com/geometry/proof.html" style={link}>https://www.mathsisfun.com/geometry/proof.html</a></li>
        <li>Euclidean Geometry (Theorems): <a href="https://en.wikipedia.org/wiki/List_of_theorems" style={link}>https://en.wikipedia.org/wiki/List_of_theorems</a></li>
        <li>Calculus (Paul’s Notes): <a href="https://tutorial.math.lamar.edu" style={link}>https://tutorial.math.lamar.edu</a></li>
        <li>AP Calculus Review: <a href="https://www.khanacademy.org/math/ap-calculus-ab" style={link}>https://www.khanacademy.org/math/ap-calculus-ab</a></li>
        <li>Linear Algebra (3Blue1Brown): <a href="https://www.3blue1brown.com/topics/linear-algebra" style={link}>https://www.3blue1brown.com/topics/linear-algebra</a></li>
        <li>Probability & Statistics (Khan): <a href="https://www.khanacademy.org/math/statistics-probability" style={link}>https://www.khanacademy.org/math/statistics-probability</a></li>
        <li>Number Theory Basics: <a href="https://en.wikipedia.org/wiki/Elementary_number_theory" style={link}>https://en.wikipedia.org/wiki/Elementary_number_theory</a></li>
        <li>Proof Techniques (Wikipedia): <a href="https://en.wikipedia.org/wiki/Mathematical_proof" style={link}>https://en.wikipedia.org/wiki/Mathematical_proof</a></li>
        <li>Proofs to Know (Math SE): <a href="https://math.stackexchange.com/questions/178940/proofs-that-every-mathematician-should-know" style={link}>https://math.stackexchange.com/questions/178940/proofs-that-every-mathematician-should-know</a></li>
        <li>Famous Constants: <a href="https://en.wikipedia.org/wiki/List_of_mathematical_constants" style={link}>https://en.wikipedia.org/wiki/List_of_mathematical_constants</a></li>
        <li>Equations That Changed the World: <a href="https://www.weforum.org/stories/2016/04/the-17-equations-that-changed-the-world/" style={link}>https://www.weforum.org/stories/2016/04/the-17-equations-that-changed-the-world/</a></li>
        <li>Desmos Graphing Calculator: <a href="https://www.desmos.com/calculator" style={link}>https://www.desmos.com/calculator</a></li>
        <li>Wolfram Alpha: <a href="https://www.wolframalpha.com/" style={link}>https://www.wolframalpha.com/</a></li>
        <li>Khan Academy (All Math): <a href="https://www.khanacademy.org/math" style={link}>https://www.khanacademy.org/math</a></li>
        <li>IXL Math: <a href="https://www.ixl.com/math/" style={link}>https://www.ixl.com/math/</a></li>
        <li>Art of Problem Solving: <a href="https://artofproblemsolving.com/" style={link}>https://artofproblemsolving.com/</a></li>
        <li><button onClick={handleClick} style={button}>Second Page</button></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maths" element={<Secret />} />
      <Route path="/learn/:id" element={<Game />} />
    </Routes>
  );
}

export default App;
