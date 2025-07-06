import jwt from "jsonwebtoken";

export const generateToken = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // ✅ Correct method: res.cookie (not cookies)
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,                 // prevents JavaScript access
    sameSite: "strict",             // CSRF protection
    secure: process.env.NODE_ENV !== "development", // HTTPS in production
  });

  return token;
};
