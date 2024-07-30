import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import { MONGODBURL, PORT } from './config/config';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173/', credentials: true }));
app.use('/api/auth', authRoutes);

mongoose.connect(MONGODBURL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));	    
