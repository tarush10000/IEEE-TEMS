// Get references to the button and the main div
const exploreButton = document.getElementById("explore");
const mainDiv = document.getElementById("main");

// Add a click event listener to the button
exploreButton.addEventListener("click", () => {
  // Toggle the visibility of the main div
  if (mainDiv.style.display === "none" || mainDiv.style.display === "") {
    mainDiv.style.display = "block";
  } else {
    mainDiv.style.display = "none";
  }

  // Scroll down to the main div
  mainDiv.scrollIntoView({ behavior: "smooth" });
});
