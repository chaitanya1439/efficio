import express from 'express';
import bodyParser, { text } from 'body-parser';

// Initialize Express
const app = express();
const port = 3001;

// Parse incoming JSON requests
app.use(bodyParser.json());

// Define your API endpoint
app.post('~/server/db.json', (req, res) => {
    // Handle POST request here
    console.log('usr:', req.body);
    res.status(200).json({ first_name: '',
        last_name: '',
        email: '',
        password: '' });
});

// Start the server
app.listen(port, () => {
    console.log(`http://localhost:${port}/usr`);
});