import jwt from 'jsonwebtoken';

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // ✅ 1. Check if token is provided
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // ✅ 2. Extract token
  const token = authHeader.split(' ')[1];

  try {
    // ✅ 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id; // this matches what you sign at login/signup
    next(); // go to next middleware/route
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
