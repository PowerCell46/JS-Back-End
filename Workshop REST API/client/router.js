import { createView } from "./controllers/createController.js";
import { navigationView } from "./controllers/navigationController.js";
import { homeView } from "./controllers/homeController.js";
import { loginView } from "./controllers/loginController.js";
import { registerView } from "./controllers/registerController.js";
import { authForb, authMiddleware, authReq } from "./middlewares/authMiddlewares.js";
import page from "./node_modules/page/page.mjs";


page(authMiddleware);

page(navigationView);

page("/", homeView);

page("/login", authForb, loginView);

page("/register", authForb, registerView);

page("/create", authReq, createView);

page.start();