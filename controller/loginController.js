// loginController.js
import bcrypt from 'bcrypt';
import Login from '../model/loginModel.js';

const saltRounds = 10;

const loginController = {
  
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;

      console.log('Signup request received:', { username });

      const existingUser = await Login.findOne({ username });

      if (existingUser) {
        console.log('User already exists');
        return res.status(400).json({ error: 'User already exists' });
      }

      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new Login({
        username,
        password: hashedPassword,
      });

      await newUser.save();

      console.log('Signup successful');
      res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      console.log('Login request received:', { username });

      const user = await Login.findOne({ username });

      if (!user) {
        console.log('User not found');
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        console.log('Login successful');
        res.status(200).json({ message: 'Login successful' });
      } else {
        console.log('Password does not match');
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default loginController;
