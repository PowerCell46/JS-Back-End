import { html, render } from "../node_modules/lit-html/lit-html.js";


export const baseAuthTemplate = (viewTemplate) => html`
    <div id="container">
        <div id="exercise">
            <!-- <h1>Furniture List</h1>
            <textarea rows="5" cols="50"></textarea>
            <button>Generate</button> -->

            <div class="wrapper">
                <div class="card-wrapper">
                    <div class="row">
                        <div id="auth-container" class="col-md-12">
                            ${viewTemplate}
                        </div>
                    </div>
                </div>
            </div>

            <!-- <textarea rows="4" cols="50" disabled></textarea>
            <button>Buy</button> -->
        </div>
    </div>
`;