import { authHandler } from "../controllers/authController.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";


export const loginTemplate = html`
    <h2>Login</h2>
    <form @submit=${(event) => authHandler(event, "login")}>
        <label>E-mail: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <button>Login</button>
    </form>
`;
