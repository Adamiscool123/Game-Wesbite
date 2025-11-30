import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./auth";

const password_check = "secret";

const styling = {
  textAlign: "center",
  color: "yellow",
};

const input = {
  width: "200px",
  height: "25px",
};

const button = {
  marginTop: "10px",
  width: "100px",
  height: "25px",
};

const grid = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "200px",
    gap: "8px",
};

const row = {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  columnGap: "18px",
  width: "100%",
  maxWidth: "420px",
};

const pass = {
    fontSize: "20px",
    color: "green"
}

function Password() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    const click = (event) => {
        event.preventDefault();
        if (password === password_check) {
            setError("");
            login();
            navigate("/maths");
        } else {
            setError("Wrong password. Try again.");
        }
    };


    return (
        <div>
        <h1 style={styling}>Login</h1>
        <form style={grid}>
            <div style={row}>
            <label style={pass}>Password:</label>
            <input style={input} id="password" type="password" onChange={handleChange} />
            </div>
            <button type="button" style={button} onClick={click}>Check</button>
            {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
        </div>
    );
}

export default Password;
