function bookAppointment() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;

    if (name && phone) {
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.push({ name, phone, day, time, canceled: false, reason: "" });

        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Payment Successful! Appointment booked.");
        showBookedAppointments();
    } else {
        alert("Please enter all details.");
    }
}

function showBookedAppointments() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let list = document.getElementById("appointment-list");
    let bookedSection = document.getElementById("booked-appointments");

    bookedSection.style.display = "block";
    list.innerHTML = appointments.length === 0 ? "<p>No appointments booked yet.</p>" : "";

    appointments.forEach((app, index) => {
        if (!app.canceled) {
            list.innerHTML += `
                <div class="appointment-card">
                    <p><strong>Name:</strong> ${app.name}</p>
                    <p><strong>Phone:</strong> ${app.phone}</p>
                    <p><strong>Day:</strong> ${app.day}</p>
                    <p><strong>Time Slot:</strong> ${app.time}</p>
                    <button onclick="cancelAppointment(${index})">Cancel</button>
                </div>
            `;
        }
    });
}

function cancelAppointment(index) {
    let popup = document.getElementById("cancel-popup");
    popup.style.display = "block";
    localStorage.setItem("cancelIndex", index);
}

// Handle cancellation reason
document.getElementById("cancel-reason").addEventListener("change", function() {
    let otherReason = document.getElementById("other-reason");
    otherReason.style.display = this.value === "Other" ? "block" : "none";
});

function confirmCancellation() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let index = localStorage.getItem("cancelIndex");

    if (index !== null) {
        let reason = document.getElementById("cancel-reason").value;
        if (reason === "Other") {
            reason = document.getElementById("other-reason").value;
        }

        appointments[index].canceled = true;
        appointments[index].reason = reason;

        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Your appointment has been canceled. Payment will be refunded in 3-5 days.");
        closePopup();
        showBookedAppointments();
    }
}

function closePopup() {
    document.getElementById("cancel-popup").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let profileContainer = document.getElementById("appointment-list");
    let appointmentStatus = localStorage.getItem("appointmentStatus");

    profileContainer.innerHTML = appointments.length === 0 ? "<p>No appointments booked yet.</p>" : "";

    appointments.forEach((app, index) => {
        let cancelMessage = app.canceled ? `<p style="color: red;">Appointment was canceled by the doctor.</p>` : "";
        let buttons = app.canceled 
            ? `<button onclick="bookAnotherDoctor()">Continue to Book Another Doctor</button>` 
            : `<button onclick="cancelAppointment(${index})">Cancel</button>`;

        profileContainer.innerHTML += `
            <div class="appointment-card">
                <p><strong>Name:</strong> ${app.name}</p>
                <p><strong>Phone:</strong> ${app.phone}</p>
                <p><strong>Day:</strong> ${app.day}</p>
                <p><strong>Time Slot:</strong> ${app.time}</p>
                ${cancelMessage}
                ${buttons}
            </div>
        `;
    });

    if (appointmentStatus === "canceledByDoctor") {
        profileContainer.innerHTML += `
            <p style="color: red;">The appointment was canceled by the doctor. Click below to book another doctor.</p>
            <button onclick="bookAnotherDoctor()">Continue to Book Another Doctor</button>
        `;
        localStorage.removeItem("appointmentStatus");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let profileContainer = document.getElementById("appointment-list");
    let appointmentStatus = localStorage.getItem("appointmentStatus");

    profileContainer.innerHTML = appointments.length === 0 ? "<p>No appointments booked yet.</p>" : "";

    appointments.forEach((app, index) => {
        let cancelMessage = app.canceled ? `<p style="color: red;">Appointment was canceled by the doctor.</p>` : "";
        let buttons = app.canceled 
            ? `<button onclick="bookAnotherDoctor()">Continue to Book Another Doctor</button>` 
            : `<button onclick="cancelAppointment(${index})">Cancel</button>`;

        profileContainer.innerHTML += `
            <div class="appointment-card">
                <p><strong>Name:</strong> ${app.name}</p>
                <p><strong>Phone:</strong> ${app.phone}</p>
                <p><strong>Day:</strong> ${app.day}</p>
                <p><strong>Time Slot:</strong> ${app.time}</p>
                ${cancelMessage}
                ${buttons}
            </div>
        `;
    });

    if (appointmentStatus === "canceledByDoctor") {
        profileContainer.innerHTML += `
            <p style="color: red;">The appointment was canceled by the doctor. Click below to book another doctor.</p>
            <button onclick="bookAnotherDoctor()">Continue to Book Another Doctor</button>
        `;
        localStorage.removeItem("appointmentStatus"); // Remove status to prevent duplicate messages
    }
});

function bookAnotherDoctor() {
    window.location.href = "user.html"; // Redirect to booking page
}


