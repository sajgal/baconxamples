/** @jsx m */

import * as Bacon from "baconjs";
import m from "mithril";

import { click, matches } from "../events";

const view = () => {
  return <div id="box">Box</div>
}

const boxClick = click
  .filter(matches("#box"))
  .map(1);

export const totalClicks = boxClick.scan(0, (a, b) => a + b);

export default Bacon.constant(view());