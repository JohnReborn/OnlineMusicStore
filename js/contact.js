// script for handling the contact form if we want 
console.log("Contact script loaded.");

// form submission if we want
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted!");
});
