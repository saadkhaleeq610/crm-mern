import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './db/connectDB.js'
import router from './routes/authRoutes.js'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use('/api/auth', router)


app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});
