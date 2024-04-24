import { main } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js"
import { home } from "../views/homeView.js";


export function homeView() {
    render(home, main);
}