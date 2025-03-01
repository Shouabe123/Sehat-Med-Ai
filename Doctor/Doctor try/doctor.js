document.getElementById("doctor-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let doctorProfile = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        specialization: document.getElementById("specialization").value,
        experience: document.getElementById("experience").value,
        certificates: document.getElementById("certificates").value,
        college: document.getElementById("college").value,
        placesWorked: document.getElementById("placesWorked").value,
        languages: document.getElementById("languages").value,
        awards: document.getElementById("awards").value,
        photo: document.getElementById("photo").files[0] ? URL.createObjectURL(document.getElementById("photo").files[0]) : ""
    };

    localStorage.setItem("doctorProfile", JSON.stringify(doctorProfile));
    alert("Profile saved successfully!");
});
