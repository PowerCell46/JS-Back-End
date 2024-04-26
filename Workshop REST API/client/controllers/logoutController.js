import { tokenName } from "../constants.js";
import page from "../node_modules/page/page.mjs";
import { getToken } from "../utils/authUtils.js";


export function logoutView(event) {
    event.preventDefault();
    
    const token = getToken();
    if(!token) {
        return alert("You are not authorized!");
    }

    localStorage.removeItem(tokenName);

    page.redirect("/");
}