// Trigger BE CI/CD pipeline
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/data', (req, res) => {
    res.status(200).json({
        message: "Here is the backend response!",
        status: "Active",
        timestamp: new Date().toISOString()
    });
});

// this is done so the jest server wont use port 3000
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Backend running on port: ${PORT}`);
    });
}

module.exports = app;