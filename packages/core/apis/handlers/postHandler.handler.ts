import { API } from "../pkg/api.package.js";

export class PostHandler extends API {
	constructor({ baseURL }: { baseURL: string }) {
		super(baseURL);
	}

	public async postAPIMethod({
		endpoint,
		body,
		configs,
	}: {
		endpoint: string;
		body: any;
		configs: any;
	}) {
		try {
			const response = await this.instance.post(
				`/${endpoint}`,
				body,
				configs,
			);
			const { config, data, headers, status, statusText, request } =
				response;
		} catch (error) {
			console.log(error);
		}
	}
}
