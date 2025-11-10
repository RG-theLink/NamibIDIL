const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all other routes by serving index.html (for SPA behavior)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📱 Press Ctrl+C to stop the server`);
});
