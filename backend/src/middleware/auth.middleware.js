import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const productRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - No Token Provided' });
    }

    // jwt.verify throws an error if invalid, so we don't need the additional check
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Use userID to match what's in the token (from generateToken function)
    const user = await User.findById(decoded.userID).select("-password");
    if (!user) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    req.user = user;
    next(); // 🔥 THIS IS IMPORTANT
  } catch (error) {
    console.log("Error in productRoute", error.message);
    // For JWT errors, return 401 Unauthorized
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({ message: 'Unauthorized - Invalid Token' });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
