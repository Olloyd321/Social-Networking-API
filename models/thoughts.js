const express = require('express');
const mongoose = require('mongoose');
const thoughtsRoutes = require('./routes/thoughts');

const app = express();
app.use(express.json());
app.use('/thoughts', thoughtsRoutes);

mongoose.connect('mongodb://localhost/3001', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(3001, () => {
    console.log('Server listening on port 3000');
  });
}).catch(err => {
  console.error(err);
});