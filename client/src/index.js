import React from "react";
// import env from "react-dotenv";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main/Main";

export const REACT_APP_SERVER_URL =
	process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

ReactDOM.render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>,
	document.getElementById("root"),
);
