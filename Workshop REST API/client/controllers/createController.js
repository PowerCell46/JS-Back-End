import { main } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js";
import { create } from "../views/createView.js";


export function createView() {
    render(create, main);
}


export function createHandler(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let {name, price, factor, img} = Object.fromEntries(data);
    name = name.trim(); price = Number(price); factor = factor.trim(); img = img.trim();
    
    console.log({name, price, factor, img});
}