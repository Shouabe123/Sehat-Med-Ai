function displayShops() {
    let approvedShops = JSON.parse(localStorage.getItem("approvedShops")) || [];
    let shopList = document.getElementById("shop-list");

    shopList.innerHTML = ""; // Clear previous list
    approvedShops.forEach(shop => {
        shopList.innerHTML += `
            <div class="card">
                <img src="${shop.image}" alt="Shop Image" width="100%">
                <h3>${shop.shopName}</h3>
                <p><strong>Owner:</strong> ${shop.ownerName}</p>
                <p><strong>Email:</strong> ${shop.ownerEmail}</p>
                <button onclick="viewShop('${shop.shopName}')">Visit Shop</button>
            </div>
        `;
    });
}

function searchShops() {
    let searchInput = document.getElementById("search").value.toLowerCase();
    let approvedShops = JSON.parse(localStorage.getItem("approvedShops")) || [];
    let shopList = document.getElementById("shop-list");

    shopList.innerHTML = ""; // Clear previous list
    approvedShops
        .filter(shop => shop.shopName.toLowerCase().includes(searchInput))
        .forEach(shop => {
            shopList.innerHTML += `
                <div class="card">
                    <img src="${shop.image}" alt="Shop Image" width="100%">
                    <h3>${shop.shopName}</h3>
                    <p><strong>Owner:</strong> ${shop.ownerName}</p>
                    <p><strong>Email:</strong> ${shop.ownerEmail}</p>
                    <button onclick="viewShop('${shop.shopName}')">Visit Shop</button>
                </div>
            `;
        });

    if (shopList.innerHTML === "") {
        shopList.innerHTML = "<p>No matching doctor found.</p>";
    }
}

function viewShop(shopName) {
    alert(`Redirecting to ${shopName}`);
}

window.onload = displayShops;


