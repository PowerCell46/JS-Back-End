import { urlEndpoints } from "../constants.js";
import { authHandler } from "../controllers/authController.js";
import { html } from "../node_modules/lit-html/lit-html.js";


export const registerTemplate = html`
    <h2>Register</h2>
    <form @submit=${(event) => authHandler(event, urlEndpoints.register)}>
        <label>E-mail: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <label>Repeat: <input type="password" name="rePass"></label>
        <button>Register</button>
    </form>
`;