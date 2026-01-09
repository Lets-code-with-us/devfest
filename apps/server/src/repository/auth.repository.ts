import { Auth } from "../interface/auth.interface.js";
import { AuthModel } from "../schema/auth.schema.js";

export class AuthRepository {
	private model = AuthModel;
	async create(data: Auth) {
		try {
			return await this.model.create(data);
		} catch (error) {
			throw new Error(String(error));
		}
	}
	async findByUserId(userid: string) {
		try {
			return await this.model.findOne({ userid: userid });
		} catch (error) {
			throw new Error(String(error));
		}
	}
}
