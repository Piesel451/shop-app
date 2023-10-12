const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Simple route to handle GET request
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});