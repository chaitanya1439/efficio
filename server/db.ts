import express from 'express';
import bodyParser from 'body-parser';

// Initialize Express
const app = express();
const port = 3001;

// Parse incoming JSON requests
app.use(bodyParser.json());

// Define your API endpoint
app.post('/server/db.json', (req, res) => {
    // Handle POST request here
    console.log('Received POST request:', req.body);
    res.status(200).json({ message: 'User created successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
