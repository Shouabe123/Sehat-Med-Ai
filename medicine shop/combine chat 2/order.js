let orders = JSON.parse(localStorage.getItem("orders")) || [];

function displayUserOrders() {
    let orderContainer = document.getElementById("user-orders");
    orderContainer.innerHTML = orders.length === 0 ? "<p>No orders found.</p>" : "";

    orders.forEach((order, index) => {
        orderContainer.innerHTML += `
            <div class="order">
                <h3>Order ${index + 1}</h3>
                ${order.items.map(item => `<p>${item.name} - $${item.price}</p>`).join("")}
                <p><strong>Status:</strong> ${order.status}</p>
                ${order.status !== "Canceled" ? `<button onclick="cancelOrder(${index})">Cancel Order</button>` : "<p>Order Canceled ❌</p>"}
                <button onclick="deleteOrder(${index})">Delete</button>
            </div>
        `;
    });
}

function cancelOrder(index) {
    orders[index].status = "Canceled";
    localStorage.setItem("orders", JSON.stringify(orders));
    alert("Order canceled. Payment will be received in 3-5 days.");
    displayUserOrders();
}

function deleteOrder(index) {
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    displayUserOrders();
}

// **Fix: Ensure orders load properly**
window.onload = displayUserOrders;

