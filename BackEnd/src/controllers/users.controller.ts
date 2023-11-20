import {Request, Response} from 'express';
import User from '../model/user';

export const getAllUsers= async (req: Request, res: Response): Promise<void> => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	}
	catch(err:any){
		res.status(500).json({message: err.message}); // tester juste err sans le point message
	}
}

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	try{
		const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true});
		if(!updateUser){
			return res.status(404).json({message: "User not found"}); 
		}
		res.status(200).json(updateUser); 
	}
	catch(err: any){
		res.status(404).send({message: err.message});
	}
}
export const getUserById = async (req:Request, res:Response) => {
	const {id} = req.params;
	try{
		const user = await User.findById(id);
		if(!user){
			return res.status(404).json({message: "User not found"}); 
		}
		res.status(200).json(user);
	}
	catch(err: any) {
		res.status(500).send({message: err.message})
	}
}
export const deleteUser = async (req:Request, res:Response) => {
	const {id} = req.params;
	try{
		const user = await User.findByIdAndDelete(id);
		if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
}