import { Inngest } from "inngest";

export class InngestService extends Inngest {
	constructor(id: string) {
		super({
			id: id,
		});
	}
	/**
	 * AddTopic
	 */
	public async AddTopic({ payload }: { payload: any }) {
		const { ids } = await this.send(payload);
		return ids;
	}

	/**
	 * createFunctions
	 */
	public async createFunctions({
		id,
		event,
		fn,
	}: {
		id: string;
		event: string;
		fn: Function;
	}) {
		this.createFunction(
			{
				id: id,
			},
			{
				event: event,
			},
			async ({ step, event }: { step: any; event: any }) =>
				fn({ step, event }),
		);
	}
}
