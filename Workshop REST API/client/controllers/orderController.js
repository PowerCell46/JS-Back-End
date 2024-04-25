import { BASE_SERVER_URL } from "../constants.js";
import page from "../node_modules/page/page.mjs";


export function finishOrderHandler(event) {
    const tableRows = Array.from(event.currentTarget.parentElement.querySelectorAll("table tbody tr"));
    
    const selectedRows = tableRows.filter(row => row.querySelector("input[type='checkbox']").checked);

    let orderProductsIds = [];

    selectedRows.forEach(row => orderProductsIds.push(row.querySelector("#productId").textContent));

    const token = localStorage.getItem("token"); // move to a function

    fetch(`${BASE_SERVER_URL}/orders`, 
    {method: "POST", 
    headers: {"Content-Type": "application/json", "X-Authorization": token},
    body: JSON.stringify({orderProductsIds})})
    .then(response => {
        if (response.status === 200) {
            console.log("Success!");
            page.redirect("/");
            
        } else {
            // not successful !
        }
    })
    .catch(err => console.error(err));
} 


export function getOrdersHandler() {
    const token = localStorage.getItem("token");

    fetch(`${BASE_SERVER_URL}/orders`, {method: "GET", 
    headers: {"X-Authorization": token}})
    .then(response => response.json())
    .then(data => {
        const furnitureP = document.querySelector("#bought-furniture-p");
        const totalPriceP = document.querySelector("#total-price-p");
        
        furnitureP.querySelector("span").textContent = data.productNames;
        totalPriceP.querySelector("span").textContent = `${data.totalPrice} $`;

        furnitureP.style.display = "block";
        totalPriceP.style.display = "block";
    })
    .catch(err => console.error(err));
}