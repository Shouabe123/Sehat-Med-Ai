// Check if Admin is logged in
if (localStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "login.html"; // Redirect if not logged in
}

// Logout Function
function logout() {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "login.html";
}
