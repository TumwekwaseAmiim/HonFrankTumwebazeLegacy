// Tracking the number of likes and the link to share
let likeCounter = 0;
let totalLikes = 0;  // Track likes globally, could be fetched from a server for persistence

// Function to Share on WhatsApp
function shareNow() {
    const shareText = encodeURIComponent("Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice");
    const shareLink = `https://api.whatsapp.com/send?text=Support%20Hon.%20Frank%20Tumwebaze!%20#FrankMyMP%20#FrankMyChoice%20%0Ahttps://yourwebsite.com`;

    // Open WhatsApp share link
    window.open(shareLink, '_blank');
  
    // Show thank you message after sharing
    document.getElementById("thanks").style.display = "block";  // Display thank you message
}

// Like Button Functionality
function likePage() {
    if (likeCounter < 2) {  // Ensure a user can like only twice
        likeCounter++;
        totalLikes++;  // Increase global like counter
        document.getElementById("likeCount").innerText = totalLikes;
        document.getElementById("likeButton").disabled = true;  // Disable the like button after 2 clicks
        
        // Show thank you message after liking
        document.getElementById("thanks").style.display = "block";  // Display thank you message
    }
    if (likeCounter === 2) {
        document.getElementById("likeButton").innerText = "You have liked this post twice";
    }
}
