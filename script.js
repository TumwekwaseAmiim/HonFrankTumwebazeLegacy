// Share the page with message + link
function shareNow() {
    const message = "Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice\n\nCheck this out 👉 https://tumwekwaseamiim.github.io/HonFrankTumwebazeLegacy/";
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    showThanksMessage();
  }
  
  // Like functionality (max 2 likes per user)
  let likeCount = 0;
  function likePage() {
    if (likeCount < 2) {
      likeCount++;
      document.getElementById('likeCount').innerText = likeCount;
      if (likeCount === 2) {
        alert("You've maxed out your likes! Thank you for supporting Hon. Frank.");
      }
    }
  }
  
  // Show popup after load
  window.onload = function () {
    document.getElementById('popup').style.display = 'block';
  };
  
  // Show thank you after share
  function showThanksMessage() {
    document.getElementById('thanks').style.display = 'block';
    setTimeout(() => {
      document.getElementById('thanks').style.display = 'none';
    }, 3000);
  }
  