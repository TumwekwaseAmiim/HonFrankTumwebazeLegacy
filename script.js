// Like functionality (only allows 1 like per user)
let likeClicked = false;

// Function to handle the 'Like' button click
function likePage() {
    if (!likeClicked) {
        likeClicked = true;  // Prevent multiple likes
        document.getElementById('likeMessage').style.display = 'block';  // Show thanks message
        document.getElementById('likeButton').disabled = true;  // Disable the like button
    }
}

// Share functionality (opens WhatsApp with a predefined message)
function shareNow() {
    const message = "Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice\n\nCheck this out 👉 https://tumwekwaseamiim.github.io/HonFrankTumwebazeLegacy/";
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Show popup after page loads
window.onload = function () {
    document.getElementById('popup').style.display = 'block';
};

// Show thanks message after share
function showThanksMessage() {
    document.getElementById('thanks').style.display = 'block';
    setTimeout(() => {
        document.getElementById('thanks').style.display = 'none';
    }, 3000);
}
