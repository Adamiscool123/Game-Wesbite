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
];

function Secret() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("secret-background");
    return () => document.body.classList.remove("secret-background");
  }, []);

  const Clicked = (id) => {
    navigate(`/learn/${id}`);
  };

  return (
    <div className="secret-page">
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
