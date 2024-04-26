import page from "../node_modules/page/page.mjs";


export function authMiddleware(ctx, next) {  
    ctx.isAuthenticated = !!localStorage.getItem("token");

    next();
}


export function authReq(ctx, next) {
    if (!ctx.isAuthenticated) {
        return page.redirect("/register");
    }

    next();
}


export function authForb(ctx, next) {
    if (ctx.isAuthenticated) {
        return page.redirect("/");
    }

    next();
}