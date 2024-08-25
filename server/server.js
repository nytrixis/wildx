import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock database (replace with a real database in production)
const users = [];

app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { email, password: hashedPassword };
  users.push(newUser);
  res.status(201).json({ message: 'User created successfully' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ email: user.email }, 'your_secret_key', { expiresIn: '1h' });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
