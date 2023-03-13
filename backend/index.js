import app from './app.js';
import connectToDatabase from './config/db.js';
import dotenv from 'dotenv';

// Config
dotenv.config({ path: "./config/config.env" });
// Connection to database
connectToDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`iNotebook backend listening at http://localhost:${PORT}`);
});