document.addEventListener("DOMContentLoaded", function() {
    let doctorProfile = JSON.parse(localStorage.getItem("doctorProfile"));
    let profileContainer = document.getElementById("doctor-profiles");

    if (doctorProfile) {
        profileContainer.innerHTML = `
            <div class="profile-card">
                <img src="${doctorProfile.photo}" alt="Doctor Photo" width="100%">
                <p><strong>Name:</strong> ${doctorProfile.name}</p>
                <p><strong>Specialization:</strong> ${doctorProfile.specialization}</p>
                <p><strong>Experience:</strong> ${doctorProfile.experience} years</p>
                <p><strong>College:</strong> ${doctorProfile.college}</p>
                <button onclick="bookAppointment()">Book Appointment</button>
            </div>
        `;
    } else {
        profileContainer.innerHTML = "<p>No doctors available.</p>";
    }
});

function bookAppointment() {
    alert("Redirecting to appointment booking...");
    window.location.href = "appointment.html";
}
