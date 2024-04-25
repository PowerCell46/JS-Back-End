import { render } from "../node_modules/lit-html/lit-html.js";
import { navigationTemplate } from "../views/navigationView.js";
import { navigation } from "../constants.js";


export function navigationView(ctx, next) {
    render(navigationTemplate(ctx.isAuthenticated), navigation);

    next();
}