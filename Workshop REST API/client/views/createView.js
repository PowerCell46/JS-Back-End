import { createHandler } from "../controllers/createController.js";
import { html } from "../node_modules/lit-html/lit-html.js";


export const createTemplate = html`
    <div id="container">
        <div id="exercise">

            <div class="wrapper">
                <div class="card-wrapper">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Create Product</h2>
                            <form @submit=${createHandler}>
                                <label>Name: <input type="text" name="name"></label>
                                <label>Price: <input type="text" name="price"></label>
                                <label>Factor: <input type="text" name="factor"></label>
                                <label>Img: <input type="text" name="img"></label>
                                <button>Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
`;