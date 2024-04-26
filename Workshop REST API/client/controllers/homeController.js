import { BASE_SERVER_URL, main, urlEndpoints } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js"
import { homeTemplate } from "../views/homeView.js";


export function homeView(ctx) {
    fetch(`${BASE_SERVER_URL}/${urlEndpoints.products}`)
    .then(response => response.json())
    .then(data => {
        render(homeTemplate(data.reverse(), ctx.isAuthenticated), main);
    })
    .catch(err => console.error(err)); // notify the user
}