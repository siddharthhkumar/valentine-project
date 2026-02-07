const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const askContainer = document.getElementById("ask-container");
const successContainer = document.getElementById("success-container");

// Logic: Move the "No" button randomly when hovered
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton); // For mobile users

function moveButton() {
    // Get the window size
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate a random new position
    // We keep it within a safe area so it doesn't go completely off-screen
    const newX = Math.random() * (width - 150);
    const newY = Math.random() * (height - 100);

    // Apply the new position
    noBtn.style.position = "fixed";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
}

// Logic: Show celebration when "Yes" is clicked
yesBtn.addEventListener("click", () => {
    askContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
});