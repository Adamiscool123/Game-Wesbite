import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

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
  maxWidth: "900px",
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

const games = [
  <iframe src="https://html5.gamedistribution.com/d3f1005739584e1294bc7474ce166340/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" style={iframeStyle} scrolling="none"></iframe>,
  <iframe src="https://html5.gamedistribution.com/70ba0334471c4a79b6e82c17f194f8f3/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" style={iframeStyle} scrolling="none"></iframe>,
  <iframe src="https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" style={iframeStyle} scrolling="none"></iframe>,
  <iframe src="https://html5.gamedistribution.com/31b35af873d245a6855c4a5e7b9f7efb/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" style={iframeStyle} scrolling="none"></iframe>,
  <iframe src="https://html5.gamedistribution.com/bf1268dccb5d43e7970bb3edaa54afc8/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" style={iframeStyle} scrolling="none"></iframe>,
  <iframe src="https://html5.gamedistribution.com/72b219a0450c465c81f3cd1ebdafb815/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" style={iframeStyle} scrolling="none"></iframe>,
  <iframe src="https://html5.gamedistribution.com/c5d8e68694434595a8a2c367bc3a4fdb/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" style={iframeStyle} scrolling="none"></iframe>,
  <iframe src="https://html5.gamedistribution.com/e5dcbebf386c46899035f042f40982d5/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" style={iframeStyle} scrolling="none"></iframe>,
];

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
