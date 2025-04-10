// Track if the user has liked the page
let hasLiked = false;

// Handle Like Button Click
function likePage() {
    if (!hasLiked) {
        hasLiked = true;
        document.getElementById('likeMessage').style.display = 'block'; // Show thank you message
        document.getElementById('likeButton').disabled = true; // Disable the Like button after it's clicked
    } else {
        alert("You have already liked this page.");
    }
}

// Share the page with message + link
function shareNow() {
    const message = "Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice\n\nCheck this out 👉 https://tumwekwaseamiim.github.io/HonFrankTumwebazeLegacy/";
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
