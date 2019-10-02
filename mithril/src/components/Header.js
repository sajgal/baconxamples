/** @jsx m */

import * as Bacon from "baconjs";
import m from "mithril";

const view = () => {
	return <div id="header">Mithril + Bacon example</div>
}

export default Bacon.constant(view());