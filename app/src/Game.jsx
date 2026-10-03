import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../public/Secret.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "16px",
  padding: "16px",
  flexWrap: "wrap",
};

const frameWrap = {
  flex: "3 1 320px",
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const iframeStyle = {
  width: "100%",
  height: "800px",
  minHeight: "500px",
  aspectRatio: "16 / 9",
  border: "none",
};

const adColumn = {
  flex: "1 1 160px",
  minWidth: "140px",
  width: "100%",
  maxWidth: "200px",
};

const adStyle = {
  display: "block",
  width: "100%",
  minWidth: "120px",
};

const games = [];

const AdSlot = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      /* ignore */
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={adStyle}
      data-ad-client="ca-pub-2907954263565331"
      data-ad-slot="6364526547"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

function Game() {
  const { id } = useParams();
  const game_index = Number(id);
  const game = games[game_index];

  useEffect(() => {
    document.body.classList.add("game-background");
    return () => document.body.classList.remove("game-background");
  }, []);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2907954263565331";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={containerStyle}>
      <div style={adColumn}>
        <AdSlot />
      </div>
      <div style={frameWrap}>{game}</div>
      <div style={adColumn}>
        <AdSlot />
      </div>
    </div>
  );
}

export default Game;
