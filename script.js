let hasLiked = localStorage.getItem('hasLiked');

const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

function updateLikes() {
  fetch('/api/likes')
    .then(res => res.json())
    .then(data => {
      likeCount.textContent = data.likes;
      if (hasLiked) {
        likeButton.disabled = true;
        likeButton.textContent = 'Liked ❤️';
      }
    });
}

likeButton.addEventListener('click', () => {
  if (!hasLiked) {
    fetch('/api/like', {
      method: 'POST',
      body: JSON.stringify({ increment: true }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        localStorage.setItem('hasLiked', true);
        hasLiked = true;
        updateLikes();
      });
  }
});

updateLikes();
