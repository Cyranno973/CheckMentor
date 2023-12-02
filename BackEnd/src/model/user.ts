import mongoose, {Document}	from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
	name: string;
	username: string;
  password: string;
  email: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}
const userSchema = new mongoose.Schema({
	name: {type: String},
	username: {type: String, required: true},
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true},

})

userSchema.pre<IUser>('save', async function (next) {
    // Vérifie si le mot de passe a été modifié
    if (!this.isModified('password')) return next();
  
    // Si le mot de passe a été modifié, hachez-le avant de sauvegarder
    this.password = await bcrypt.hash(this.password, 10);
  
    // Passez à la prochaine fonction middleware
    next();
  });

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  };

const User = mongoose.model<IUser>('User', userSchema);

export default User;
