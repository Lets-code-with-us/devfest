import express, { Express, Request, Response } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { schema, rootValue } from "./graphql/graphql.js";
import { ruruHTML } from "ruru/server";
import { AuthWebHook } from "./webhooks/auth.webhook.js";

export const app: Express = express();

app.get("/", (_req, res) => {
	res.type("html");
	res.end(ruruHTML({ endpoint: "/v1/graphql" }));
});

app.post(
	"/api/v1/webhook",
	async (req: Request, res: Response) =>
		await AuthWebHook.captureWebHook(req, res),
);

app.use(
	"/v1/graphql",
	createHandler({
		schema,
		rootValue,
	}),
);
