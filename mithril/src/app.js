import * as Bacon from 'baconjs';
import m from "mithril";

import "./styles.css";
import Box from "./components/Box";
import Header from "./components/Header";

Bacon.onValues(Header, Box,
	(header, box) => m.render(document.body,
		<div id="app">
			{header}
			{box}
		</div>
))