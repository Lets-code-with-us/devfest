import { API } from "../pkg/api.package.js";
import { Assert } from "../pkg/assert.package.js";
import { Schema } from "../pkg/schema.package.js";

export class GETHandler extends API {
	assert: Assert;
	schema: Schema;
	constructor({ baseURL }: { baseURL: string }) {
		super(baseURL);
		this.assert = new Assert();
		this.schema = new Schema();
	}
	public async getAPIMethod({ endpoint }: { endpoint: string }) {
		const response = await this.instance.get(`${endpoint}`);
		const { config, data, headers, status, statusText, request } = response;

		// check the data to be expected
		this.assert.assert({
			expected: 200,
			actual: status,
		});

		this.assert.assert({
			expected: "OK",
			actual: statusText,
		});
	}
}
