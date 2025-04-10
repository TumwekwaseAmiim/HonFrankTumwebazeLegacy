// Check if the user has already liked and how many times they have liked
let likeCounter = parseInt(localStorage.getItem("likeCount")) || 0;
let userLikes = parseInt(localStorage.getItem("userLikes")) || 0;

// Function to Share on WhatsApp
function shareNow() {
    const shareText = encodeURIComponent("Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice");
    const shareLink = `https://api.whatsapp.com/send?text=${shareText}`;
    window.open(shareLink, '_blank');

    // After sharing, show thank you message
    document.getElementById("thanks").style.display = "block"; // Display the thanks message
}

// Like Button Functionality
function likePage() {
    // Ensure the user has not liked more than twice
    if (userLikes < 2) {
        likeCounter++;
        userLikes++;
        localStorage.setItem("likeCount", likeCounter);
        localStorage.setItem("userLikes", userLikes);
        document.getElementById("likeCount").innerText = likeCounter;

        // Optionally, disable the like button if the user has liked twice
        if (userLikes === 2) {
            document.getElementById("likeButton").disabled = true;
        }
    } else {
        alert("You can like only twice.");
    }
}

// Display the number of likes when the page loads
window.onload = function() {
    // Display the current like count
    document.getElementById("likeCount").innerText = likeCounter;

    // If the user has already liked, disable the like button
    if (userLikes >= 2) {
        document.getElementById("likeButton").disabled = true;
    }
};
