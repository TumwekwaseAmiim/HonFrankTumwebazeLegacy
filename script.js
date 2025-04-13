// Ensure user can like only once
let isLiked = localStorage.getItem("isLiked") === "true";
const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");
const thanksMessage = document.getElementById("thanks");

// Initialize like count from localStorage or default to 0
let likes = parseInt(localStorage.getItem("likeCount")) || 0;
likeCount.innerText = likes;

// Handle like button click
function likePost() {
  if (!isLiked) {
    likes++;
    localStorage.setItem("likeCount", likes);
    likeCount.innerText = likes;
    localStorage.setItem("isLiked", "true");
    thanksMessage.style.display = "block";
    setTimeout(() => {
      thanksMessage.style.display = "none";
    }, 3000);
  }
}
