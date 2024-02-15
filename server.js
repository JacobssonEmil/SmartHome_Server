const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // for parsing application/json

// Example route for turning a lamp on/off
app.post('/lamp', (req, res) => {
    const { state } = req.body; // state can be "on" or "off"
    // Logic to communicate with Arduino goes here

    // Send response back to client
    res.json({ message: `Lamp turned TEMP` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
