let medicines = JSON.parse(localStorage.getItem("medicines")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// **Display Medicines from LocalStorage**
function displayMedicines() {
    let list = document.getElementById("medicine-list");
    list.innerHTML = "";
    medicines.forEach((med, index) => {
        list.innerHTML += `
            <div class="card">
                <img src="${med.image}" alt="${med.name}">
                <h3>${med.name}</h3>
                <p>Price: $${med.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

// **Add Multiple Medicines to Cart**
function addToCart(index) {
    cart.push(medicines[index]);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    document.getElementById("cart-count").innerText = cart.length;
    showCart();
}

// **Show Cart with Multiple Selected Medicines**
function showCart() {
    let cartItems = document.getElementById("cart-items");
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    
    cartItems.innerHTML = cart.map((item, i) => `<p>${item.name} - $${item.price}</p>`).join("");
    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("cart-modal").style.display = "block";
}

// **Proceed to Payment with Multiple Medicines in One Order**
function proceedToPayment() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    orders.push({ id: orders.length + 1, items: [...cart], status: "Pending" });
    localStorage.setItem("orders", JSON.stringify(orders));

    resetCart();
    alert("Order placed successfully!");
}

// **Reset Cart After Payment**
function resetCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart)); 
    document.getElementById("cart-count").innerText = 0;
    closeCart();
}

// **Close Cart Modal**
function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// **Load Medicines on Page Load**
window.onload = displayMedicines;
function displayMedicines() {
    let medicines = JSON.parse(localStorage.getItem("medicines")) || [];
    let list = document.getElementById("medicine-list");

    list.innerHTML = ""; // Clear previous list
    medicines.forEach((med, index) => {
        list.innerHTML += `
            <div class="card">
                <img src="${med.image}" alt="${med.name}">
                <h3>${med.name}</h3>
                <p>Price: $${med.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

// **Ensure medicines load when the page opens**
window.onload = displayMedicines;
function searchMedicine() {
    let searchInput = document.getElementById("search").value.toLowerCase();
    let medicines = JSON.parse(localStorage.getItem("medicines")) || [];
    let list = document.getElementById("medicine-list");

    list.innerHTML = ""; // Clear previous list
    medicines
        .filter(med => med.name.toLowerCase().includes(searchInput)) // Filter matching medicines
        .forEach((med, index) => {
            list.innerHTML += `
                <div class="card">
                    <img src="${med.image}" alt="${med.name}">
                    <h3>${med.name}</h3>
                    <p>Price: $${med.price}</p>
                    <button onclick="addToCart(${index})">Add to Cart</button>
                </div>
            `;
        });

    // If no medicines match, show a message
    if (list.innerHTML === "") {
        list.innerHTML = "<p>No matching medicines found.</p>";
    }
}

// **Ensure search works as user types**
document.getElementById("search").addEventListener("keyup", searchMedicine);






