import {Router} from 'express';
import * as studentController from '../../controllers/students.controller';

const router = Router();
router.get('/', studentController.getAllStudents);
router.post('/add', studentController.addStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
router.get('/:id', studentController.getStudentById);
export default router;