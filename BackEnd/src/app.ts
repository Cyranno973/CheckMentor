import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotEnv from 'dotenv';
import connectDatabase from './config/db';
import studentRoutes from './routes/v1/students.routes';
import userRoutes from './routes/v1/users.routes';
import authRoutes from './routes/v1/auth.routes'; // Importez le fichier de routes d'authentification

dotEnv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connexion à la base de données
connectDatabase();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Route de base pour vérifier que l'API fonctionne
app.get('/', (req: Request, res: Response) => res.json({ message: 'Welcome to the CHECKMENTOR API!' }));

//routes d'étudiants avec le préfixe `/api/students`
app.use('/api/students', studentRoutes);
app.use('/api/auth', authRoutes); // Utilisez les routes d'authentification avec le préfixe '/api/auth'
app.use('/api/users', userRoutes);
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
