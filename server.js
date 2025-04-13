const express = require('express');
const app = express();
const PORT = 3000;

let likes = 0;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/likes', (req, res) => {
  res.json({ likes });
});

app.post('/api/like', (req, res) => {
  if (req.body.increment === true) {
    likes++;
    res.json({ likes });
  } else {
    res.status(400).json({ message: "Invalid like request" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
