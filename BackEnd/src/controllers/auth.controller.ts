import {NextFunction, Request, Response} from 'express';
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
    console.log('Token created:', token);
    // Décodez le token ici pour voir son contenu
    const decodedToken = jwt.decode(token);
    console.log('Decoded token:', decodedToken);
    res.status(200).json({ token });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
export const authenticateUser = (req:Request, res:Response, next: NextFunction) => {
  console.log(req.headers);
  const token = req.headers.authorization?.split(' ')[1];
  console.log('Token received:', token);

  if(!token){
    return res.status(401).json({message: 'Authentification required'});
  }

  jwt.verify(token,secretKey,(err, decoded) => {
    if (err) {
      console.log('Token verification failed:', err);
      return res.status(401).json({ message: 'Invalid token' });
    }
    console.log('Token verified. Decoded:', decoded);
    next();
  })
};
