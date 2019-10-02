/** @jsx m */

import * as Bacon from "baconjs";
import m from "mithril";

import { click, matches } from "../events";

const view = () => {
  return <div id="box">Box</div>
}

click
  .filter(matches("#box"))
  .map(() => "box clicked")
  .log();

export default Bacon.constant(view());