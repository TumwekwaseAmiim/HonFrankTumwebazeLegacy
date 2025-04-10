// Function to Share on WhatsApp
function shareNow() {
    const shareText = encodeURIComponent("Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice");
    const shareLink = `https://api.whatsapp.com/send?text=${shareText}`;
    window.open(shareLink, '_blank');
    
    // After sharing, show thank you message
    document.getElementById("thanks").style.display = "block"; // Display the thanks message
  }
  
  // Like Button Functionality
  let likeCounter = 0;
  let likeCounted = false; // To ensure a person can only like once
  
  function likePage() {
    if (likeCounter < 2 && !likeCounted) {
      likeCounter++;
      likeCounted = true; // Prevent further likes after first
      document.getElementById("likeCount").innerText = likeCounter;
    } else if (likeCounter >= 2) {
      alert("You have already liked this post twice!");
    }
  }
  