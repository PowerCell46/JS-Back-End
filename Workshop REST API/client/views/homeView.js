import { finishOrderHandler, getOrdersHandler } from "../controllers/orderController.js";
import {html} from "../node_modules/lit-html/lit-html.js";


export const homeTemplate = (products, isAuthenticated) => html`
<main>

<div id="container">
    <div id="exercise">

        <div class="wrapper">
            <div class="card-wrapper">
                <div class="row">
                    <div class="col-md-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Decoration factor</th>
                                    <th>Mark</th>
                                </tr>
                            </thead>
                            <tbody>
                            ${products.map(product => productTrTemplate(product, isAuthenticated))}
                            </tbody>
                        </table>
                    ${isAuthenticated ? html`
                        <button @click=${finishOrderHandler}>Buy</button>
                        <hr>
                        <div class="orders">
                            <p id="bought-furniture-p" style="display: none">Bought furniture: <span>Office chair, Sofa</span></p>
                            <p id="total-price-p" style="display: none">Total price: <span>419 $</span></p>
                            <button @click=${getOrdersHandler}>All orders</button>
                        </div>`
                    : null
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</main>
`;


const productTrTemplate = (product, loggedIn) => html`
    <tr>
        <td style="display: none;">
            <p id="productId">${product._id}</p>
        </td>
        <td>
            <img
                src="${product.img}">
        </td>
        <td>
            <p>${product.name}</p>
        </td>
        <td>
            <p>${product.price}</p>
        </td>
        <td>
            <p>${product.factor}</p>
        </td>
        <td>
            ${loggedIn ? html`
                <input type="checkbox"/>` 
            : html`
                <input type="checkbox" disabled/>`
            }
        </td>
    </tr>
`;