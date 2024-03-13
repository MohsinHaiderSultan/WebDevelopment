// script.js

// Example: Toggle navigation menu for mobile devices
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Example: Form validation for the contact form
const contactForm = document.querySelector("#contact-form");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate message length
  if (messageInput.value.length < 10) {
    alert("Message should be at least 10 characters long.");
    return;
  }

  // Submit the form (you can add an AJAX request here)
  alert("Form submitted successfully!");
});
