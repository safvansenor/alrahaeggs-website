// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Find the form
  const form = document.getElementById("contactForm");

  // When the form is submitted
  form.addEventListener("submit", function (event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Show a thank-you message
    alert("Thank you! Your message has been sent. We'll get back to you soon.");

    // Optional: Clear the form
    form.reset();
  });
});
