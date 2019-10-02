import * as Bacon from 'baconjs';

export const click = Bacon.fromEvent(document.body, "click");

export var matches = (selector) => {
	return (e) => e.target.matches(selector);
}