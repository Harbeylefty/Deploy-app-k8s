const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const loginRoute = require('./login'); // Import the login route

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON

mongoose.connect('mongodb://mongo-user:mongo-password@mongodb:27017/mydb?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use the login route
app.use('/api', loginRoute);

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
