import { main } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js"
import { homeLoggedIn, homeLoggedOff } from "../views/homeView.js";


export function homeView(ctx) {
    render(ctx.isAuthenticated ? homeLoggedIn : homeLoggedOff, main);
}