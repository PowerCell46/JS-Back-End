import { main } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js";
import { create } from "../views/createView.js";


export function createView() {
    render(create, main);
}