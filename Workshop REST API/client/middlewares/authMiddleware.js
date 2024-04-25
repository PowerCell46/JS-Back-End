export function authMiddleware(ctx, next) {  
    ctx.isAuthenticated = !!localStorage.getItem("token");

    ctx.getToken = () => localStorage.getItem("token");
    next();
}
