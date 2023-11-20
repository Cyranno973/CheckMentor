import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'API CHECKMENTOR!!!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
