let orders = JSON.parse(localStorage.getItem("orders")) || [];

function showOrderList() {
    let orderItems = document.getElementById("order-items");
    orderItems.innerHTML = orders.map((order, index) => `
        <div class="order">
            <h3>Order ${index + 1}</h3>
            ${order.items.map(item => `<p>${item.name} - $${item.price}</p>`).join("")}
            <p><strong>Status:</strong> ${order.status}</p>
            
            ${order.status === "Pending" ? `
                <button onclick="updateOrderStatus(${index}, 'Packed')">Packed</button>
                <button onclick="updateOrderStatus(${index}, 'Delivered')">Delivered</button>
                <button onclick="cancelOrder(${index})">Cancel Order</button>
            ` : ""}
            
            ${order.status === "Canceled" ? `<button onclick="deleteOrder(${index})">Delete</button>` : ""}
        </div>
    `).join("");
}

function updateOrderStatus(index, status) {
    orders[index].status = status;
    localStorage.setItem("orders", JSON.stringify(orders));
    showOrderList();
}

function cancelOrder(index) {
    let reason = prompt("Enter the reason for cancellation:");
    if (reason) {
        orders[index].status = `Medicine is canceled. We will let you know when it's ready to be ordered.`;
        localStorage.setItem("orders", JSON.stringify(orders));
        showOrderList();
    }
}

function deleteOrder(index) {
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    showOrderList();
}

// **Ensure orders display when admin logs in**
showOrderList();



