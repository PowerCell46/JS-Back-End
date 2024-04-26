import { BASE_SERVER_URL, main, urlEndpoints } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js";
import { createTemplate } from "../views/createView.js";
import page from "../node_modules/page/page.mjs";
import { getToken } from "../utils/authUtils.js";
import { validateProductData } from "../utils/validators.js";


export function createView() {
    render(createTemplate, main);
}


export function createHandler(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let {name, price, factor, img} = Object.fromEntries(data);
    name = name.trim(); price = Number(price); factor = Number(factor); img = img.trim();
   
    const validProductData = validateProductData(name, price, factor, img);
    
    if (validProductData !== true) {
        return alert(validProductData);
    }

    const token = getToken();

    fetch(`${BASE_SERVER_URL}/${urlEndpoints.products}`, {method: "POST", 
    headers: {"Content-Type": "application/json", "X-Authorization": token},
    body: JSON.stringify({name, price, factor, img})})
    .then(response => {
        if (response.status === 200) {
            page.redirect("/");
        } else {
            console.log(response) // notify the user
        }
    })
    .catch(err => console.error(err)); // notify the user
}