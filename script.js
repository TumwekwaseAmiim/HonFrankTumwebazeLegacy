// Like functionality
let likeCount = 0;

function likePage() {
  if (likeCount === 0) {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
    document.getElementById('thanks').style.display = 'block';
    setTimeout(() => {
      document.getElementById('thanks').style.display = 'none';
    }, 3000);
  }
}

// Function for sharing on WhatsApp
function shareNow() {
  const message = "Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice\n\nCheck this out 👉 https://tumwekwaseamiim.github.io/HonFrankTumwebazeLegacy/";
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Show number of people who joined the group
let joinedCount = 348; // Update with the actual number of members
document.getElementById('joinedCount').innerText = `Members Joined: ${joinedCount}`;
