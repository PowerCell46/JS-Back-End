import { createHandler } from "../controllers/createController.js";
import {html} from "../node_modules/lit-html/lit-html.js";


export const homeLoggedOff = (products) => html`
<main>

<div id="container">
    <div id="exercise">
        <!-- <h1>Furniture List</h1>
        <textarea rows="5" cols="50"></textarea>
        <button>Generate</button> -->

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
                            ${products.map(product => productTrTemplate(product, false))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- <textarea rows="4" cols="50" disabled></textarea>
        <button>Buy</button> -->
    </div>
</div>
</main>
`;


export const homeLoggedIn = (products) => html`
<main>

<div id="container">
    <div id="exercise">
        <!-- <h1>Furniture List</h1>
        <textarea rows="5" cols="50"></textarea>
        <button>Generate</button> -->

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
                        <hr>
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
                                ${products.map(product => productTrTemplate(product, true))}
                            </tbody>
                        </table>
                        <button>Buy</button>
                        <hr>
                        <div class="orders">
                            <p>Bought furniture: <span>Office chair, Sofa</span></p>
                            <p>Total price: <span>419 $</span></p>
                            <button>All orders</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <textarea rows="4" cols="50" disabled></textarea> -->
    </div>
</div>
</main>`;


const productTrTemplate = (product, loggedIn) => html`
<tr>
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
        <input type="checkbox"/>` : html`
        <input type="checkbox" disabled/>`
    }
    </td>
</tr>`