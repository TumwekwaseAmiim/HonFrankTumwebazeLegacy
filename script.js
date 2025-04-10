// Function to Share on WhatsApp
function shareNow() {
    const shareText = encodeURIComponent("Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice");
    const shareUrl = encodeURIComponent("https://tumwekwaseamiim.github.io/HonFrankTumwebazeLegacy/");  // The URL of your page
    const shareLink = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;  // Combining both text and URL

    window.open(shareLink, '_blank');
  
    // After sharing, show thank you message
    document.getElementById("thanks").style.display = "block"; // Display the thanks message
}

// Like Button Functionality
let likeCounter = 0;

function likePage() {
    likeCounter++;
    document.getElementById("likeCount").innerText = likeCounter;
}
