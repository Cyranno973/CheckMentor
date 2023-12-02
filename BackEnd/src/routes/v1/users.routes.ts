import {Router} from 'express';
import * as userController from '../../controllers/users.controller';

const router = Router();
router.get('/', userController.getAllUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUserById);
router.post('/mail', userController.getUserByMail);
export default router;