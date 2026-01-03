const crypto = require('crypto');

const customHeadersMiddleware = (req, res, next) => {
  console.log('Custom Headers Middleware Invoked');
  console.log('Request Method:', req.method);
  console.log('Incoming Request Headers:', req.headers);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Client-Source');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
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
