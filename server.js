const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

const { postsRouter } = require('./routers/postsRouter');

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/posts', postsRouter);

app.listen(PORT, error => {
  if (error) {
    console.log('error at server luunch:', error);
  }
  console.log(`Server run on port ${PORT}`);
});
