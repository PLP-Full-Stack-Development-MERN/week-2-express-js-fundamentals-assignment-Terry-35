// Mock Data
let products = [];

// Controller Functions
exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  res.json(product || { error: 'Product not found' });
};

exports.createProduct = (req, res) => {
  const newProduct = { id: Date.now().toString(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  products = products.map(p =>
    p.id === req.params.id ? { ...p, ...req.body } : p
  );
  res.json({ message: 'Product updated' });
};

exports.deleteProduct = (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: 'Product deleted' });
};