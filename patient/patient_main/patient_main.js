// // Function to enable infinite scrolling
// function enableInfiniteScroll(containerSelector) {
//     const container = document.querySelector(containerSelector);
//     const cards = container.children;
  
//     // Clone all cards and append them to the container
//     for (let i = 0; i < cards.length; i++) {
//       const clone = cards[i].cloneNode(true);
//       container.appendChild(clone);
//     }
  
//     // Scroll animation
//     let scrollPosition = 0;
//     const scrollSpeed = 1; // Adjust speed here
  
//     function scrollCards() {
//       scrollPosition -= scrollSpeed;
//       if (scrollPosition <= -container.scrollWidth / 2) {
//         scrollPosition = 0;
//       }
//       container.style.transform = translateX(${scrollPosition}px);
//       requestAnimationFrame(scrollCards);
//     }
  
//     requestAnimationFrame(scrollCards);
//   }
  
//   // Enable infinite scrolling for doctors and medicine sections
//   document.addEventListener("DOMContentLoaded", function () {
//     enableInfiniteScroll(".doctors-section .scrolling-card-container");
//     enableInfiniteScroll(".medicine-section .scrolling-card-container");
  
//     // Smooth scrolling for navbar links
//     const navLinks = document.querySelectorAll(".nav-links a");
//     navLinks.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute("href");
//         const targetSection = document.querySelector(targetId);
//         targetSection.scrollIntoView({ behavior: "smooth" });
//       });
//     });
//   });
//   // Get the modal and login link
// const modal = document.getElementById("login-modal");
// const loginLink = document.getElementById("login-link");
// const closeBtn = document.querySelector(".close");

// // Function to open the modal
// loginLink.addEventListener("click", (e) => {
//   e.preventDefault(); // Prevent default link behavior
//   modal.style.display = "flex"; // Show the modal
// });

// // Function to close the modal
// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none"; // Hide the modal
// });

// // Close the modal if the user clicks outside of it
// window.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none"; // Hide the modal
//   }
// });

// // Handle login options
// document.getElementById("doctor-login").addEventListener("click", () => {
//   alert("Login as Doctor");
//   modal.style.display = "none"; // Close the modal
// });

// document.getElementById("patient-login").addEventListener("click", () => {
//   alert("Login as Patient");
//   modal.style.display = "none"; // Close the modal
// });

// document.getElementById("test-lab-login").addEventListener("click", () => {
//   alert("Login as Test Lab");
//   modal.style.display = "none"; // Close the modal
// });

// document.getElementById("medicine-shop-login").addEventListener("click", () => {
//   alert("Login as Medicine Shop");
//   modal.style.display = "none"; // Close the modal
// });