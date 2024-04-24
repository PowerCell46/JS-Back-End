import { BASE_SERVER_URL, main } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js";
import { baseAuthTemplate } from "../views/baseAuthentication.js";
import { registerTemplate } from "../views/registerView.js";


export function registerView() {
    render(baseAuthTemplate(registerTemplate), main);
}


export function registerHandler(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const {email, password, rePass} = Object.fromEntries(data);

    fetch(`${BASE_SERVER_URL}/register`, {method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password})})
    // .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}