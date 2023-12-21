const jwt = require('jsonwebtoken');
const secretKey='mouhib'
function authenticateToken(req, res, next) {
  const {token} = req.body;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    next();
  });
}

module.exports = authenticateToken;
