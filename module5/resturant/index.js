import { menuArray } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const menuListEl = document.getElementById("menu-list")
const orderFormEl = document.getElementById("order-form")
const modal = document.getElementById("modal")
const modalForm = document.getElementById("modal-form")
let orderList = []

document.addEventListener("click", (event) => {
    event.target.classList.contains("add-button") && addToOrder(event.target.id)
    event.target.classList.contains("remove-btn") && removeFromOrder(event.target.id)
    event.target.classList.contains("complete-order-btn") && paymentDetails()
})

document.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(1234)
}
)

function addToOrder(id) {
    const newItem = menuArray.filter(item => 
        item.id === Number(id)
        )[0]
    orderList.unshift({
        name: newItem.name,
        price: newItem.price,
        id: uuidv4(),
    })
    renderOrderList()
}

function removeFromOrder(id) {
    orderList = orderList.filter(item => item.id != id )
    renderOrderList()
}

function paymentDetails() {
    modal.hidden = false
}

function renderOrderList() {
    orderFormEl.innerHTML = ""
    let orderTotal = 0
    let addedItems = ""
    orderList.forEach(item => {
        orderTotal += item.price
        addedItems += `
        <div class="added-item">
            <div>
                ${item.name}
                <span class="remove-btn C8B8B8B f12" id=${item.id}>remove</span>
            </div>
            <div>$${item.price}</div>
        </div>
        `
    })
    orderFormEl.innerHTML = `
        ${addedItems}
        <div class="order-total">Total Price:
            <span class="right">$${orderTotal}</span>
        </div>
        <div class="complete-order-btn">Complete order</div>
    `
}

function renderMenuItems() {
    menuListEl.innerHTML = ""
    menuArray.forEach(item => {
        menuListEl.innerHTML += `
            <div class="menu-item">
                <span class="emoji">${item.emoji}</span>
                <div class="menu-item-details">
                    ${item.name}
                    <span class="f16 C8B8B8B">${item.ingredients}</span>
                    <span class="f20">$${item.price}</span>
                </div>                
                <i class="fa-solid fa-circle-plus fa-2xl add-button" id=${item.id}></i>                
            </div>`
    })      
}

renderMenuItems()
