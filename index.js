const express = require('express');
const app = express();

// Перенаправление с корневого URL на другой домен
app.get('/', (req, res) => {
  res.redirect(301, 'https://girskii.com'); // 301 - это код постоянного перенаправления
});

// Запуск сервера на порту 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
