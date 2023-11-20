import mongoose from "mongoose";
const connectDatabase = async (): Promise<void> => {
	const dbUri = process.env.MONGODB_URI as string;
	try {
		await mongoose.connect(dbUri);
		console.log('Connected to the database successfully');
	}
	catch(error) {
		console.error('Database connection failed' ,error);
		process.exit(1);
	}
};
export default connectDatabase;