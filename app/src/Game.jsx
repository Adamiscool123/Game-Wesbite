import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Secret from "./Secret";

const style = {
    textAlign: "center"
};

const games = [
    <iframe src="https://html5.gamedistribution.com/d3f1005739584e1294bc7474ce166340/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" width="900" height="815px" scrolling="none" frameborder="0"></iframe>,
    <iframe src="https://html5.gamedistribution.com/70ba0334471c4a79b6e82c17f194f8f3/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" width="900" height="815px" scrolling="none" frameborder="0"></iframe>,
    <iframe src="https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" width="900px" height="815px" scrolling="none" frameborder="0"></iframe>,
    <iframe src="https://html5.gamedistribution.com/31b35af873d245a6855c4a5e7b9f7efb/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" width="900px" height="815px" scrolling="none" frameborder="0"></iframe>,
    <iframe src="https://html5.gamedistribution.com/bf1268dccb5d43e7970bb3edaa54afc8/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" width="900px" height="815px" scrolling="none" frameborder="0"></iframe>,
    <iframe src="https://html5.gamedistribution.com/72b219a0450c465c81f3cd1ebdafb815/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" width="900px" height="815px" scrolling="none" frameborder="0"></iframe>
]

function Game(){
    const {id} = useParams();
    const game_index = Number(id);
    const game = games[game_index]

    return (
        <div style={style}>
            {game}
        </div>
    );
}
export default Game