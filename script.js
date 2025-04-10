// Flag to check if the user has already shared the link
let hasShared = false;

// Function to Share on WhatsApp
function shareNow() {
    if (!hasShared) {  // Only allow showing thank you once
        const shareText = encodeURIComponent("Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice");
        const shareUrl = encodeURIComponent("https://tumwekwaseamiim.github.io/HonFrankTumwebazeLegacy/");  // The URL of your page
        const shareLink = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;  // Combining both text and URL
    
        window.open(shareLink, '_blank');
    
        // Show thank you message
        document.getElementById("thanks").style.display = "block";  // Display the thanks message
        hasShared = true;  // Set the flag to true so the message won't show again
    } else {
        // If they've already shared, you can show a message (optional)
        alert("You've already shared the link. Thank you!");
    }
}

// Like Button Functionality
let likeCounter = 0;

function likePage() {
    likeCounter++;
    document.getElementById("likeCount").innerText = likeCounter;
}
