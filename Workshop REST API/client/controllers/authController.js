import { BASE_SERVER_URL, tokenName, urlEndpoints } from "../constants.js";
import page from "../node_modules/page/page.mjs";
import { validateUserData } from "../utils/validators.js";


export function authHandler(event, endpoint) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    if (endpoint === urlEndpoints.register) {
        var {email, password, rePass} = Object.fromEntries(data);

        if (password !== rePass) {
            return alert("Password and Repass must match!");
        }

    } else {
        var {email, password } = Object.fromEntries(data);
    }
    
    email = email.trim();

    const validUserData = validateUserData(email, password);

    if (validUserData !== true) {
        return alert(validUserData);
    }

    fetch(`${BASE_SERVER_URL}/${endpoint}`, {method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password})})
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            console.log(response); // notify the user
        }
    })
    .then(data => {
        localStorage.setItem(tokenName, data.token);

        page.redirect("/");
    })
    .catch(err => console.error(err)); // notify the user
}