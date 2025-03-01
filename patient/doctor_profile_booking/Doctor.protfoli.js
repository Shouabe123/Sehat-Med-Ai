// Handle appointment form submission
const appointmentForm = document.querySelector(".book-appointment form");
appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Display confirmation message
  alert(Appointment booked successfully!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time});

  // Reset the form
  appointmentForm.reset();
});