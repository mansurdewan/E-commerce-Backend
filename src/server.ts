import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import config from "./app/config";

let server: Server;

process.env.PORT;

// main().catch((err) => console.log(err));

async function main() {
  try {
    const result = await mongoose.connect(config.db_url as string);
    server = app.listen(config.port, () => {
      console.log(
        `Example app listening on port http://localhost:${config.port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
main();
