let pendingShops = JSON.parse(localStorage.getItem("pendingShops")) || [];
let approvedShops = JSON.parse(localStorage.getItem("approvedShops")) || [];

function displayPendingShops() {
    let shopContainer = document.getElementById("pending-shops");
    shopContainer.innerHTML = pendingShops.length === 0 ? "<p>No pending shops.</p>" : "";

    pendingShops.forEach((shop, index) => {
        shopContainer.innerHTML += `
            <div class="shop">
                <img src="${shop.image}" alt="Shop Image" width="100">
                <h3>${shop.shopName}</h3>
                <p><strong>Owner:</strong> ${shop.ownerName}</p>
                <p><strong>Email:</strong> ${shop.ownerEmail}</p>
                <button onclick="approveShop(${index})">✅ Approve</button>
                <button onclick="rejectShop(${index})">❌ Reject</button>
            </div>
        `;
    });
}

function approveShop(index) {
    approvedShops.push(pendingShops[index]);
    localStorage.setItem("approvedShops", JSON.stringify(approvedShops));

    pendingShops.splice(index, 1);
    localStorage.setItem("pendingShops", JSON.stringify(pendingShops));

    alert("Shop Approved!");
    displayPendingShops();
}

function rejectShop(index) {
    pendingShops.splice(index, 1);
    localStorage.setItem("pendingShops", JSON.stringify(pendingShops));

    alert("Authorization canceled. Contact the admin.");
    displayPendingShops();
}

// Load shops on page open
window.onload = displayPendingShops;
function approveShop(index) {
    approvedShops.push(pendingShops[index]);
    localStorage.setItem("approvedShops", JSON.stringify(approvedShops));

    localStorage.setItem("shopStatus", JSON.stringify({ status: "Approved", message: "Your shop has been approved!" }));

    pendingShops.splice(index, 1);
    localStorage.setItem("pendingShops", JSON.stringify(pendingShops));

    alert("Shop Approved!");
    displayPendingShops();
}

function rejectShop(index) {
    localStorage.setItem("shopStatus", JSON.stringify({ status: "Rejected", message: "Authorization canceled. Contact the admin." }));

    pendingShops.splice(index, 1);
    localStorage.setItem("pendingShops", JSON.stringify(pendingShops));

    alert("Authorization canceled. Contact the admin.");
    displayPendingShops();
}




