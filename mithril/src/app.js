import * as Bacon from 'baconjs';
import m from "mithril";

import "./styles.css";
import Box from "./components/Box";
import Header from "./components/Header";
import Clickdisplay from "./components/ClickDisplay";

Bacon.onValues(Header, Box, Clickdisplay,
	(header, box, clickDisplay) => m.render(document.body,
		<div id="app">
			{header}
			{box}
			{clickDisplay}
		</div>
))