import {html} from "../node_modules/lit-html/lit-html.js";
import { logoutView } from "../controllers/logoutController.js";


export const navigationTemplate = (isAuthenticated) => html`
    <a href="/">Catalog</a>
    ${isAuthenticated ? html`
        <div id="user">
            <a id="logoutBtn" @click=${logoutView} href="javascript:void(0)">Logout</a>
        </div>
    ` : html`
        <div id="guest">
            <a href="/login" class="active">Login</a>
            <a href="/register" class="active">Register</a>
        </div>
    `}
`;