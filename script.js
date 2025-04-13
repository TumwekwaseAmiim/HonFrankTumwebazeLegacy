let likeCount = 0;

document.getElementById('likeButton').addEventListener('click', function () {
  if (likeCount === 0) {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
    document.getElementById('thanks').style.display = 'block';
    setTimeout(() => {
      document.getElementById('thanks').style.display = 'none';
    }, 3000);
  }
});
