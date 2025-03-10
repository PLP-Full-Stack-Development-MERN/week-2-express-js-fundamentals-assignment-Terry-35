// Mock Data
let users = [];

// Controller Functions
exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  res.json(user || { error: 'User not found' });
};

exports.createUser = (req, res) => {
  const newUser = { id: Date.now().toString(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  users = users.map(u =>
    u.id === req.params.id ? { ...u, ...req.body } : u
  );
  res.json({ message: 'User updated' });
};

exports.deleteUser = (req, res) => {
  users = users.filter(u => u.id !== req.params.id);
  res.json({ message: 'User deleted' });
};