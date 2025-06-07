const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const products = [
  { id: 1, name: "Graphic Tee", price: 499, image: "/images/tshirt1.jpg" },
  { id: 2, name: "Urban Black Tee", price: 599, image: "/images/tshirt2.jpg" },
  { id: 3, name: "Oversized Green Tee", price: 549, image: "/images/tshirt3.jpg" }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
