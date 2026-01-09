import { AuthRepository } from "../repository/auth.repository.js";
import { Response, Request } from "express";

export class AuthWebHook {
	static async captureWebHook(req: Request, res: Response) {
		try {
			const data = await req.body;
			new AuthRepository().create(data as any);
			res.status(201).json({ message: "User Added" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "Internal Server error" });
		}
	}
}
