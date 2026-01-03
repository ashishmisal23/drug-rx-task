const crypto = require('crypto');

const customHeadersMiddleware = (req, res, next) => {
  // ✅ Allow CORS preflight requests
  if (req.method === 'OPTIONS') {
    return next();
  }

  const source = req.headers['x-client-source'];

  // ✅ Fail gracefully (400, not 500)
  if (!source) {
    return res.status(400).json({
      success: false,
      message: 'Missing X-Client-Source header',
    });
  }

  req.meta = {
    source,
    requestId: crypto.randomUUID(),
    ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    userAgent: req.headers['user-agent'] || 'unknown',
  };

  next();
};

module.exports = customHeadersMiddleware;
