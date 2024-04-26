import { html } from "../node_modules/lit-html/lit-html.js";


export const baseAuthTemplate = (viewTemplate) => html`
    <div id="container">
        <div id="exercise">

            <div class="wrapper">
                <div class="card-wrapper">
                    <div class="row">
                        <div id="auth-container" class="col-md-12">
                            ${viewTemplate}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
`;