function displayAppointments() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let list = document.getElementById("appointment-list");

    list.innerHTML = appointments.length === 0 ? "<p>No appointments available.</p>" : "";

    appointments.forEach((app, index) => {
        let isCanceled = app.canceled;
        let cancelMessage = isCanceled ? `<p style="color: red;">Appointment Canceled by Doctor</p>` : "";

        let buttons = isCanceled 
            ? `<button class="delete-btn" onclick="deleteAppointment(${index})">Delete</button>` 
            : `<button class="done-btn" onclick="markAsDone(${index})">Done</button>
               <button class="delete-btn" onclick="cancelByDoctor(${index})">Cancel</button>`;

        list.innerHTML += `
            <div class="appointment-card">
                <p><strong>Name:</strong> ${app.name} ${isCanceled ? "❌" : ""}</p>
                <p><strong>Phone:</strong> ${app.phone}</p>
                <p><strong>Day:</strong> ${app.day}</p>
                <p><strong>Time Slot:</strong> ${app.time}</p>
                ${cancelMessage}
                ${buttons}
            </div>
        `;
    });
}

function cancelByDoctor(index) {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments[index].canceled = true;
    
    localStorage.setItem("appointments", JSON.stringify(appointments));
    localStorage.setItem("appointmentStatus", "canceledByDoctor"); // Store status for user side

    alert("Appointment has been canceled.");
    displayAppointments();
}

function deleteAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.splice(index, 1);

    localStorage.setItem("appointments", JSON.stringify(appointments));
    displayAppointments();
}

function markAsDone(index) {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.splice(index, 1);

    localStorage.setItem("appointments", JSON.stringify(appointments));
    displayAppointments();
}

window.onload = displayAppointments;
