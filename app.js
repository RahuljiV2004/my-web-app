const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>Hello from Chennai!</h1><p>Welcome to our web application.</p>made with ❤️ by Rahulji</p>');
})

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//test change 1 working fine