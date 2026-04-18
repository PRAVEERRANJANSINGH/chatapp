import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config(); 

export const generateToken = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,// prevents xss attacks by making the cookie inaccessible to client-side scripts
    sameSite: "strict",// prevents CSRF attacks by ensuring the cookie is only sent in requests originating from the same site
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
