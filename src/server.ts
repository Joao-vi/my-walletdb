import { createServer, Model } from "miragejs";

export function makeServer() {
  createServer({
    models: {
      transaction: Model,
    },
    routes() {
      this.namespace = "api";

      this.get("/transactions");

      this.post(
        "/transactions",
        (schema, request) => {
          const data = JSON.parse(request.requestBody);
          return schema.create("transaction", data);
        },
        { timing: 1500 }
      );
    },
  });
}
