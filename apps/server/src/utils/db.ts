import { connect, Connection } from "mongoose";

export class Database extends Connection {
	dburi: string;
	constructor(db: string) {
		super();
		this.dburi = db;
	}
	public async connection() {
		await connect(this.dburi);
	}
}
