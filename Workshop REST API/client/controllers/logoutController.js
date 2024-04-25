import page from "../node_modules/page/page.mjs";


export function logoutView(event) {
    event.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");

    page.redirect("/");
}