const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const contactRoutes = require('./routes/contact.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use(errorMiddleware);

module.exports = app;
