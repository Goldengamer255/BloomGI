import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Base endpoint for BloomGI health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        project: 'BloomGI Symptom Tracking Platform API',
        message: 'Backend architecture operational and ready for database development.'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 BloomGI Server running on port ${PORT}`);
});
