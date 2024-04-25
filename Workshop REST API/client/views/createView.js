import {html, render} from "../node_modules/lit-html/lit-html.js";


export const create = html`
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
                                <form action="" method="post">
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
                                        <tr>
                                            <td>
                                                <img
                                                    src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
                                            </td>
                                            <td>
                                                <p>Office chair</p>
                                            </td>
                                            <td>
                                                <p>160</p>
                                            </td>
                                            <td>
                                                <p>0.5</p>
                                            </td>
                                            <td>
                                                <input type="checkbox"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    src="https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg">
                                            </td>
                                            <td>
                                                <p>Sofa</p>
                                            </td>
                                            <td>
                                                <p>259</p>
                                            </td>
                                            <td>
                                                <p>1.2</p>
                                            </td>
                                            <td>
                                                <input type="checkbox"/>
                                            </td>
                                        </tr>
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
        </div>`