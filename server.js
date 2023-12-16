import express from 'express'
import connectToMongoDB from './conn.js'
import routes from './routes.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
<<<<<<< HEAD
//comment the data above the code github data
=======

>>>>>>> chandra
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', routes); 

const startServer = async () => {
  try {
    await connectToMongoDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`MongoDB connected successfully`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

startServer();
