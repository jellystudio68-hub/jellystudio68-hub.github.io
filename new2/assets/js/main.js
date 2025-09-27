// main.js
// Currently minimal – you can expand interactivity here
// Example: log when a button is clicked

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        console.log(`Button clicked: ${btn.textContent.trim()}`);
      });
    });
  });
  