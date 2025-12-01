import React from "react";
import { useNavigate } from "react-router-dom";
import "../public/Hmm.css";

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
  height: "auto",
  objectFit: "cover",
  display: "block",
};

const listItem = {
  cursor: "pointer",
};

const game_pictures = [
  "/Images/image1.jpg",
  "/Images/image2.jpg",
  "/Images/image4.jpg",
  "/Images/image5.jpg",
  "/Images/image6.jpg",
  "/Images/image7.jpg",
  "/Images/image8.jpg",
  "/Images/image9.jpg",
  "/Images/image10.png",
  "/Images/image11.png",
  "/Images/image12.jpg",
  "/Images/image13.png",
  "/Images/image14.png",
  "/Images/image15.png",
  "/Images/image16.jpg",
  "/Images/image17.jpg",
];

const heading = {
  color: "red",
  textAlign: "center",
  visibility: "visible"
}

function Secret() {
  const navigate = useNavigate();

  const Clicked = (id) => {
    navigate(`/learn/${id}`);
  };

  return (
    <div>
      <h1 style={heading}>Games are temporarily offline due to some issues, but we are actively working to fix it</h1>
      <ul style={gallery}>
        {game_pictures.map((item, index) => (
          <li key={index} style={listItem} onClick={() => Clicked(index)}>
            <img src={item} style={size} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Secret;
