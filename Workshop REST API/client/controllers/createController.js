import { BASE_SERVER_URL, main } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js";
import { create } from "../views/createView.js";
import page from "../node_modules/page/page.mjs";


export function createView() {
    render(create, main);
}


export function createHandler(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let {name, price, factor, img} = Object.fromEntries(data);
    name = name.trim(); price = Number(price); factor = Number(factor); img = img.trim();
    const token = localStorage.getItem("token");

    fetch(`${BASE_SERVER_URL}/products`, 
    {method: "POST", 
    headers: {"Content-Type": "application/json", "X-Authorization": token},
    body: JSON.stringify({name, price, factor, img})})
    .then(response => {
        if (response.status === 200) {
            page.redirect("/");
        }
    })
    .catch(err => console.error(err));
}