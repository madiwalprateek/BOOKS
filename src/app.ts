import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bookRoutes from './routes/bookRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect('mongodb://root:root@localhost:27018/my-book-db?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
app.use('/api/books', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
