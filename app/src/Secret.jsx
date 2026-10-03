import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../public/Secret.css";

const gallery = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "10px",
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const size = {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  display: "block",
};

const listItem = {
  cursor: "pointer",
};

const navbar = {
  display: "flex",
  height: "80px",
  width: "100%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  gap: "10px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  position: "relative",
  zIndex: "1000",
}

const gridbox = {
  display: "grid",
  alignItems: "center",
  textAlign: "center",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "0px",
  width: "100%",
  height: "100%",
}

const arcade = {
  gridArea: "1 / 1 / 2 / 2",
  transition: "all 0.3s ease",
}

const strategy = {
  gridArea: "auto",
  transition: "all 0.3s ease",
}

const link = {
  textDecoration: "none",
  color: "white",
  fontWeight: "600",
  letterSpacing: "1px",
  fontSize: "1.1rem",
  padding: "10px 20px",
  borderRadius: "8px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  position: "relative",
  overflow: "hidden",
}

function Secret() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("secret-background");
    return () => document.body.classList.remove("secret-background");
  }, []); 

  return (
    <div className="secret-page">
      <div style={navbar}>
        <div style={gridbox}>
          <a href="/arcade/list/index.html" style={link}><h1 style={arcade}>Arcade</h1></a>
          <a href="/strategy/list/index.html" style={link}><h1 style={strategy}>Strategy</h1></a>
          <a href="/racing/list/index.html" style={link}><h1 style={strategy}>Racing</h1></a>
          <a href="/puzzles/list/index.html" style={link}><h1 style={strategy}>Puzzles</h1></a>
        </div>
      </div>
    </div>
  );
}

export default Secret;
