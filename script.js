// Share the current page URL via WhatsApp
function shareNow() {
    // Get the current page URL
    const currentUrl = window.location.href;
  
    // WhatsApp sharing URL, including the current page URL
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
  
    // Open the WhatsApp sharing link
    window.open(whatsappUrl, '_blank');
  }
  
  // Optional: Handle the "Thanks" message after sharing
  function showThanksMessage() {
    document.getElementById('thanks').style.display = 'block';
    setTimeout(() => {
      document.getElementById('thanks').style.display = 'none';
    }, 3000); // Hide after 3 seconds
  }
  
  // For the "Like" button functionality
  let likeCount = 0;
  
  function likePage() {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
  }
  
  // Show the popup after the page loads
  window.onload = function () {
    document.getElementById('popup').style.display = 'block';
  };
  