import { main } from "../constants.js";
import { render } from "../node_modules/lit-html/lit-html.js";
import { baseAuthTemplate } from "../views/baseAuthentication.js";
import { loginTemplate } from "../views/loginView.js";


export function loginView() {
    render(baseAuthTemplate(loginTemplate), main);
}
