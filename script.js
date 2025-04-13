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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ increment: true })
    })
      .then(res => res.json())
      .then(data => {
        likeCount.textContent = data.likes;
        likeButton.disabled = true;
        likeButton.textContent = 'Liked ❤️';
        localStorage.setItem('hasLiked', 'true');
        hasLiked = true;
      });
  }
});

updateLikes();
