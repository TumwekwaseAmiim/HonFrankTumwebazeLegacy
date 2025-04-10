function shareNow() {
    const shareText = encodeURIComponent("Support Hon. Frank Tumwebaze! #FrankMyMP #FrankMyChoice");
    const shareLink = `https://api.whatsapp.com/send?text=${shareText}`;
    window.open(shareLink, '_blank');
  
    // After "sharing", show thank you
    document.getElementById("popup").style.display = "none";
    document.getElementById("thanks").style.display = "block";
  }
  
  let likeCounter = 0;
  
  function likePage() {
    likeCounter++;
    document.getElementById("likeCount").innerText = likeCounter;
  }
  