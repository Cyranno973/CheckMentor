import {Request, Response} from 'express';
import Student from '../model/student';

export const getAllStudents = async (req: Request, res: Response): Promise<void> => {
	try {
		const students = await Student.find();
		res.status(200).json(students);
	}
	catch(err:any){
		res.status(500).json({message: err.message}); // tester juste err sans le point message
	}
}
export const addStudent = async (req: Request, res: Response) => {
	try{
		const student = new Student(req.body);
		const savedStudent = await student.save();
		res.status(201).json(savedStudent);
	}
	catch(err: any) {
		res.status(400).send({message: err.message})
	}
}
export const updateStudent = async (req: Request, res: Response) => {
	const { id } = req.params;
	try{
		const updateStudent = await Student.findByIdAndUpdate(id, req.body, {new: true});
		if(!updateStudent){
			return res.status(404).json({message: "Student not found"}); 
		}
		res.status(200).json(updateStudent); 
	}
	catch(err: any){
		res.status(404).send({message: err.message});
	}
}
export const getStudentById = async (req:Request, res:Response) => {
	const {id} = req.params;
	try{
		const student = await Student.findById(id);
		if(!student){
			return res.status(404).json({message: "Student not found"}); 
		}
		res.status(200).json(student);
	}
	catch(err: any) {
		res.status(500).send({message: err.message})
	}
}
export const deleteStudent = async (req:Request, res:Response) => {
	const {id} = req.params;
	try{
		const student = await Student.findByIdAndDelete(id);
		if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error });
  }
}