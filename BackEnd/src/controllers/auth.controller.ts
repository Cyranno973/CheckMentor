import { Request, Response } from 'express';
import User, { IUser } from '../model/user';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your_secret_key';

export const signup = async (req: Request, res: Response) => {
  console.log('signup');
  
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
