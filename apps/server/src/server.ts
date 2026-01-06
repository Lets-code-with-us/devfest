import express, { Express } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { schema, rootValue } from "./schema/schema.js";
import { ruruHTML } from "ruru/server";

export const app: Express = express();

app.get("/", (_req, res) => {
	res.type("html");
	res.end(ruruHTML({ endpoint: "/v1/graphql" }));
});

app.use(
	"/v1/graphql",
	createHandler({
		schema,
		rootValue,
	}),
);
