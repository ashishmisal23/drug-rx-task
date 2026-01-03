const { v4: uuidv4 } = require('uuid');

const customHeadersMiddleware = (req, res, next) => {
  const source = req.headers['x-client-source'];

  if (!source) {
    return res.status(400).json({
      success: false,
      message: 'Missing X-Client-Source header',
    });
  }

  req.meta = {
    source,
    requestId: uuidv4(),
    ipAddress: req.ip,
    userAgent: req.headers['user-agent'],
  };

  next();
};

module.exports = customHeadersMiddleware;
