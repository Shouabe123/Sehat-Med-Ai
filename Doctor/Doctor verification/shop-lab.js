let shopStatus = JSON.parse(localStorage.getItem("shopStatus")) || { status: "Pending", message: "Waiting for admin approval." };

function displayShopStatus() {
    let messageElement = document.getElementById("verification-message");

    if (shopStatus.status === "Approved") {
        messageElement.innerHTML = `<strong style="color:green;">✅ Your shop has been approved!</strong>`;
    } else if (shopStatus.status === "Rejected") {
        messageElement.innerHTML = `<strong style="color:red;">❌ Authorization canceled. Contact the admin.</strong>`;
    } else {
        messageElement.innerHTML = `<strong style="color:blue;">⏳ Waiting for admin approval...</strong>`;
    }
}

window.onload = displayShopStatus;
