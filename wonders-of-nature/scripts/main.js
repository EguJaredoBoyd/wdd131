import { natureFacts } from '../data/facts.js';

// DOM references
const factBtn = document.getElementById("showFact");
const factDisplay = document.getElementById("natureFact");
const form = document.getElementById("contactForm");

// Show a random fact
factBtn?.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * natureFacts.length);
  const fact = natureFacts[randomIndex];
  factDisplay.textContent = fact;
});

// Handle form submission
form?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;

  const submission = {
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  // Save to localStorage
  let submissions = JSON.parse(localStorage.getItem("contactSubmissions")) || [];
  submissions.push(submission);
  localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

  // Feedback to user
  alert("Thank you for your message!");

  form.reset();
});
