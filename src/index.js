import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CoinProvider } from "./Context/CoinContext";

ReactDOM.render(
	<CoinProvider>
		<App />
	</CoinProvider>,
	document.getElementById("root")
);
