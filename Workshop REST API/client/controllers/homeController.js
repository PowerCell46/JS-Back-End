import { BASE_SERVER_URL, main } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js"
import { homeLoggedIn, homeLoggedOff } from "../views/homeView.js";


export function homeView(ctx) {
    fetch(`${BASE_SERVER_URL}/products`)
    .then(response => response.json())
    .then(data => {
        render(ctx.isAuthenticated ? homeLoggedIn(data.reverse()) : homeLoggedOff(data.reverse()), main);
    })
    .catch(err => console.error(err));
}