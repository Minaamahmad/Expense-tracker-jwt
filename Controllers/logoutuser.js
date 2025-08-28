// controllers/authController.js
export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
