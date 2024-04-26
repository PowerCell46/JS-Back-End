import { BASE_SERVER_URL, urlEndpoints } from "../constants.js";
import page from "../node_modules/page/page.mjs";
import { getToken } from "../utils/authUtils.js";


export function finishOrderHandler(event) {
    // selecting all rows with products
    const tableRows = Array.from(event.currentTarget.parentElement.querySelectorAll("table tbody tr"));
    
    // filtering only the selected ones
    const selectedRows = tableRows.filter(row => row.querySelector("input[type='checkbox']").checked);

    let orderProductsIds = [];

    // iterating through the product IDs
    selectedRows.forEach(row => orderProductsIds.push(row.querySelector("#productId").textContent));

    const token = getToken();

    fetch(`${BASE_SERVER_URL}/${urlEndpoints.orders}`, 
    {method: "POST", 
    headers: {"Content-Type": "application/json", "X-Authorization": token},
    body: JSON.stringify({orderProductsIds})})
    .then(response => {
        if (response.status === 200) {
            console.log("Success!");
            page.redirect("/");
            
        } else {
            console.log(response); // notify the user
        }
    })
    .catch(err => console.error(err));
} 


export function getOrdersHandler() {
    const token = getToken();

    fetch(`${BASE_SERVER_URL}/${urlEndpoints.orders}`, {method: "GET", 
    headers: {"X-Authorization": token}})
    .then(response => response.json())
    .then(data => {
        // showing all of the bought furniture
        const furnitureP = document.querySelector("#bought-furniture-p");
        furnitureP.querySelector("span").textContent = data.productNames;
        furnitureP.style.display = "block";

        // showing the total price
        const totalPriceP = document.querySelector("#total-price-p");
        totalPriceP.querySelector("span").textContent = `${data.totalPrice} $`;
        totalPriceP.style.display = "block";

    })
    .catch(err => console.error(err));
}