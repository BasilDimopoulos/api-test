import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { stationsRouter } from "./stations/station.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("", stationsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
