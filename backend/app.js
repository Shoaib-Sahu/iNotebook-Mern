import express from 'express';
const app = express();
import cors from 'cors';
import authRoute from './routes/authRoute.js';
import notesRoute from './routes/notesRoute.js';

// Midllewares
app.use(express.json());
app.use(cors());

// Available Routes
app.use('/api/auth', authRoute);
app.use('/api/notes', notesRoute);

export default app;