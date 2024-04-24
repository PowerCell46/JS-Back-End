import { createView } from "./controllers/createController.js";
import { homeView } from "./controllers/homeController.js";
import { loginView } from "./controllers/loginController.js";
import { registerView } from "./controllers/registerController.js";
import page from "./node_modules/page/page.mjs";


page("/", homeView);

page("/login", loginView);

page("/register", registerView);

page("/create", createView);

page.start();