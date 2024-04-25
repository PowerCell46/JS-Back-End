import { BASE_SERVER_URL } from "../constants.js";
import page from "../node_modules/page/page.mjs";


export function authHandler(event, view) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    if (view === "register") {
        var {email, password, rePass} = Object.fromEntries(data);

        if (password !== rePass) {
            // error
        }

    } else {
        var {email, password } = Object.fromEntries(data);
    }

    fetch(`${BASE_SERVER_URL}/${view}`, {method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password})})
    .then(response => {
        if (response.status === 200) {
            return response.json();
        }
    })
    .then(data => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("userId", data.userId);

        page.redirect("/");
    })
    .catch(err => console.error(err));
}