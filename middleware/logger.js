const logger = (req, res, next) => {
    console.log(`Method: ${req.method} | URL: ${req.url} | Timestamp: ${new Date()}`);
    next();
  };
  
  module.exports = logger;