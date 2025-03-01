function addMedicine() {
    let name = document.getElementById("med-name").value;
    let price = document.getElementById("med-price").value;
    let imageFile = document.getElementById("med-image").files[0];

    if (name && price && imageFile) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let medicines = JSON.parse(localStorage.getItem("medicines")) || [];
            medicines.push({ name, price: Number(price), image: e.target.result });

            localStorage.setItem("medicines", JSON.stringify(medicines));

            alert("Medicine added successfully!");
            window.location.href = "owner.html"; // Redirect back to admin panel
        };
        reader.readAsDataURL(imageFile);
    } else {
        alert("Please enter all details.");
    }
}
