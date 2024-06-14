const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Inisialisasi aplikasi Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rute dasar
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Tambahkan rute lain sesuai kebutuhan
app.post('/data', (req, res) => {
    const data = req.body;
    res.send(`Data received: ${JSON.stringify(data)}`);
});

// Tentukan port untuk server
const PORT = process.env.PORT || 3000;

// Mulai server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
