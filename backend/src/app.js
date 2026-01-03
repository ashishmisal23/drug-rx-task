const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const customHeadersMiddleware = require('./middlewares/customHeaders.middleware');

const contactRoutes = require('./routes/contact.routes');

const app = express();

/**
 * ✅ MUST be before any middleware
 * Required for Vercel / proxies
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(customHeadersMiddleware);
app.get('/', (req, res, next) => {
  res.send('API is running...');
});
app.use('/api/contact', contactRoutes);

module.exports = app;
