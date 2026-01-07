import { z } from "zod";

export class Schema {
	/**
	 * validate status schema
	 */
	public statusSchema(obj: any) {
		const statusZType = z.object({
			status: z.literal(200),
			statusText: z.literal("OK"),
		});
		const { success, data, error } = statusZType.safeParse(obj);

		return {
			success,
			data,
			error,
		};
	}
}
