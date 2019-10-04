/** @jsx m */

import * as Bacon from "baconjs";
import m from "mithril";

import { totalClicks } from "./Box";

const view = (clicksCount) => {
  return <div id="box-display">Box clicked {clicksCount} x</div>
}

export default Bacon
  .combineWith(clicks => clicks, totalClicks)
  .startWith(0)
  .map(view);