import React from "react";
import { useNavigate } from "react-router-dom";
import "../public/Hmm.css";

const body = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "10px",
};

const size = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
};

const game_pictures = [
  "/Images/image1.jpg",
  "/Images/image2.jpg",
  "/Images/image4.jpg",
  "/Images/image5.jpg",
  "/Images/image6.jpg",
  "/Images/image7.jpg",
  "/Images/image8.jpg",
  "/Images/image9.jpg"
];

const picture = {
    gridArea: "repeat(3, auto)", 
}

const list_style = {
    listStyleType: "none"
}

function Secret() {
  const navigate = useNavigate();

  const Clicked = (id) => {
    navigate(`/learn/${id}`);
  };

  return (
    <div style={body}>
        {game_pictures.map((item, index) => (
            <li key={index} style={list_style} onClick={() => Clicked(index)}><img src={item} style={size}></img></li>
        ))}
    </div>
  );
}

export default Secret;
