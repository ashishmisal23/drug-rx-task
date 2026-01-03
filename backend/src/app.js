const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const contactRoutes = require('./routes/contact.routes');

const app = express();

/**
 * ✅ MUST be before any middleware
 * Required for Vercel / proxies
 */
app.set('trust proxy', true);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

// ❌ REMOVED errorMiddleware (as requested)

module.exports = app;
