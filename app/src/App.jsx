import React, { useMemo, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Secret from "./Secret";
import Game from "./Game";
import Password from "./Password";
import { AuthContext } from "./auth";

const header = {
  textAlign: "center",
  color: "yellow"
}

const button = {
  float: "right",
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
    navigate("/password");
  };

  return (
    <div>
      <h1 style={header}>Links</h1>
      <button onClick={handleClick} style={button}>Second Page</button>
      <ul style={styling}>
        <li>Google: <a href="https://www.google.com/" style={link}>https://www.google.com/</a></li>
        <li>Gmail: <a href="https://gmail.com/" style={link}>https://gmail.com/</a></li>
        <li>Dictionary: <a href="https://www.dictionary.com/" style={link}>https://www.dictionary.com/</a></li>
      </ul>
    </div>
  );
}

function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  const authValue = useMemo(
    () => ({
      isAuthed,
      login: () => setIsAuthed(true),
    }),
    [isAuthed]
  );

  const ProtectedRoute = ({ children }) =>
    isAuthed ? children : <Navigate to="/password" replace />;

  return (
    <AuthContext.Provider value={authValue}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<Password />} />
        <Route
          path="/maths"
          element={
            <ProtectedRoute>
              <Secret />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learn/:id"
          element={
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
