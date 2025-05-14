// Handle menu toggle
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");
const cancelButton = document.getElementById("cancel-button");

menuToggle.addEventListener("click", function () {
    menu.classList.add("show");
    menuToggle.classList.add("show");
    cancelButton.classList.add("show");
});

cancelButton.addEventListener("click", function () {
    menu.classList.remove("show");
    menuToggle.classList.remove("show");
    cancelButton.classList.remove("show");
});

// Set current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
