import { tokenName } from "../constants.js";


export function getToken() {
    return localStorage.getItem(tokenName);
}