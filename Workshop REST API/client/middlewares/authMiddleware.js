export function authMiddleware(ctx, next) {  
    ctx.isAuthenticated = !!localStorage.getItem("token");

    next();
}
