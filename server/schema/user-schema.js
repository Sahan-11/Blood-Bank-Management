import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const userSchema = new mongoose.Schema({
	name: { type: String, required: true  },
	email: { type: String, required: true },
	password: { type: String, required: true },
    createdDate: { type: Date},
    age: { type: Number, required: true},
    Imageurl: { type: String,required: false},
    phone: { type: Number,required: true},
    // disease: {type: String,required: false},
    location: { type: String,required: true},
    bloodgroup: {type: String, required: true}
    
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, `${process.env.JWTPRIVATEKEY}`, {
		expiresIn: "7d",
	});
	return token;
};

export const User = mongoose.model("userSchema", userSchema);

export const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		age: Joi.string().required().label("Age"),
		createdDate: Joi.string().required().label("Date"),
		Imageurl: Joi.string().required().label("url"),
		phone: Joi.string().required().label("phone"),
		// disease: Joi.string().required().label("disease"),
		location: Joi.string().required().label("location"),
		bloodgroup: Joi.string().required().label("bloodgroup")
	});
	return schema.validate(data);
};