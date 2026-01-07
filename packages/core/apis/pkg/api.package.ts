import axios from "axios";
export class API {
	private baseURL: string;
	public instance;
	constructor(uri: string) {
		this.baseURL = uri;
		this.instance = axios.create({
			baseURL: this.baseURL,
			timeout: 3000,
			validateStatus: () => true,
		});
	}
}
