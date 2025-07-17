import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//console.log(process.env.PORT);
//console.log(process.env.DATABASE_URL); 
//console.log(process.env.WEATHER_API_KEY);   

app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from your frontend origin
  }));

// app.options('*', cors()); 
app.use(express.json());

app.use('/users', userRoutes);

app.use('/weather', weatherRoutes);



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});