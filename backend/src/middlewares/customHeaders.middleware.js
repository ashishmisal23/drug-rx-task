const crypto = require('crypto');

const customHeadersMiddleware = (req, res, next) => {
  console.log('Custom Headers Middleware Invoked');
  if (req.method === 'OPTIONS') {
    return next();
  }

  req.meta = {
    requestId: crypto.randomUUID(),
    ipAddress: req.ip,
    userAgent: req.headers['user-agent'] || 'unknown',
    source: req.headers['x-client-source'] || null,
  };

  next();
};

module.exports = customHeadersMiddleware;
