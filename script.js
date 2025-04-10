// Like functionality (one like per user)
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

// Share the page with message + link on WhatsApp
function shareNow() {
  const message = "Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice\n\nCheck this out 👉 https://tumwekwaseamiim.github.io/HonFrankTumwebazeLegacy/";
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}
