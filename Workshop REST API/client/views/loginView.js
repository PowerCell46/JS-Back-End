import { loginHandler } from "../controllers/loginController.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";


export const loginTemplate = html`
    <h2>Login</h2>
    <form @submit=${loginHandler}>
        <label>E-mail: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <button>Login</button>
    </form>
`;
