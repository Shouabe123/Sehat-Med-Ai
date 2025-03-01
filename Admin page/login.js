function login() {
    const adminEmail = "shouabemanzar@gmail.com";
    const adminPassword = "$h0@!b 786";

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    if (email === adminEmail && password === adminPassword) {
        localStorage.setItem("adminLoggedIn", "true");
        window.location.href = "dashboard.html"; // Redirect to Admin Dashboard
    } else {
        errorMsg.innerText = "Invalid email or password!";
    }
}
