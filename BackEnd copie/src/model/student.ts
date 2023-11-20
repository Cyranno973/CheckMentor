import mongoose, {Schema, Document}	from 'mongoose';
interface IStudent extends Document {
	nom: string;
	prenom: string;
	dateFinFormation: Date;
	formationSuivi: string;
	projetEnCours: string;
	progressionActuelle: number;
	progressionAttendue: number;
}
const studentSchema = new mongoose.Schema({
	nom: {type: String, required: true},
	prenom: {type: String, required: true},
	dateFinFormation: {type: Date, required: true},
	projetEnCours: {type: String, required: true},
	formationSuivi: {type: String, required: true},
	progressionActuelle: {type: Number, required: true},
	progressionAttendue: {type: Number, required: true}
})
const Student = mongoose.model<IStudent>('Student', studentSchema);

export default Student;
