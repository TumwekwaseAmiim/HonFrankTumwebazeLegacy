// Ensure user can like only once and persist the like count
let isLiked = localStorage.getItem("isLiked") === "true"; // Check if the user has already liked
const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");
const thanksMessage = document.getElementById("thanks");

// Retrieve the like count from localStorage (or default to 0)
let likes = parseInt(localStorage.getItem("likeCount")) || 0;
likeCount.innerText = likes;

// Disable the "Like" button if the user has already liked
if (isLiked) {
  likeButton.disabled = true;
}

// Handle like button click
function likePost() {
  if (!isLiked) {
    likes++; // Increment like count
    localStorage.setItem("likeCount", likes); // Save the new like count to localStorage
    likeCount.innerText = likes; // Update the displayed like count
    localStorage.setItem("isLiked", "true"); // Mark that the user has liked
    likeButton.disabled = true; // Disable the "Like" button
    thanksMessage.style.display = "block"; // Show "Thank You" message
    setTimeout(() => {
      thanksMessage.style.display = "none"; // Hide "Thank You" message after 3 seconds
    }, 3000);
  }
}
