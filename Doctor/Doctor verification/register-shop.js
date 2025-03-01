function registerShop() {
    let shopName = document.getElementById("shop-name").value;
    let ownerName = document.getElementById("owner-name").value;
    let ownerEmail = document.getElementById("owner-email").value;
    let imageFile = document.getElementById("shop-image").files[0];

    if (shopName && ownerName && ownerEmail && imageFile) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let pendingShops = JSON.parse(localStorage.getItem("pendingShops")) || [];
            pendingShops.push({ shopName, ownerName, ownerEmail, image: e.target.result });

            localStorage.setItem("pendingShops", JSON.stringify(pendingShops));

            alert("Shop registration submitted! Waiting for admin approval.");
            window.location.href = "owner.html"; // Redirect back to owner panel
        };
        reader.readAsDataURL(imageFile);
    } else {
        alert("Please fill all details and upload an image.");
    }
}

