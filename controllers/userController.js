const User = require('../models/userModel');

let users = [
  new User(1, "John Doe", "john@example.com"),
  new User(2, "Jane Doe", "jane@example.com")
];

/**
 * @desc Get all users
 * @route GET /api/users
 */
exports.getUsers = (req, res) => {
  res.json(users);
};

/**
 * @desc Get a single user by ID
 * @route GET /api/users/:id
 */
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

/**
 * @desc Create a new user
 * @route POST /api/users
 */
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = new User(users.length + 1, name, email);
  users.push(newUser);
  res.status(201).json(newUser);
};
