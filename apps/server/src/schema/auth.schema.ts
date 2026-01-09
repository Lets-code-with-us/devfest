import mongoose, { Model } from "mongoose";
import { Auth } from "../interface/auth.interface.js";

const AuthSchema = new mongoose.Schema<Auth>(
	{
		userid: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
		},
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
		},
	},
	{ timestamps: true },
);

export const AuthModel: Model<Auth> =
	mongoose.models.auth || mongoose.model<Auth>("auth", AuthSchema);
