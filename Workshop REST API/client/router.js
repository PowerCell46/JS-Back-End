import { createView } from "./controllers/createController.js";
import { navigationView } from "./controllers/navigationController.js";
import { homeView } from "./controllers/homeController.js";
import { loginView } from "./controllers/loginController.js";
import { registerView } from "./controllers/registerController.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import page from "./node_modules/page/page.mjs";


page(authMiddleware);

page(navigationView);

page("/", homeView);

page("/login", loginView);

page("/register", registerView);

page("/create", createView);

page.start();