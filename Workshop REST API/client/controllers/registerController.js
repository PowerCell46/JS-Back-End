import { main } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js";
import { baseAuthTemplate } from "../views/baseAuthentication.js";
import { registerTemplate } from "../views/registerView.js";


export function registerView() {
    render(baseAuthTemplate(registerTemplate), main);
}
