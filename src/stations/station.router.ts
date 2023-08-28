import {
  filterStationsByApparentT,
  getStationData,
  sortStationsByApparentT,
} from "./station.service";
import { BomError } from "./types/error.interface";
import { Station } from "./types/station.interface";
import express, { Request, Response } from "express";

export const stationsRouter = express.Router();

stationsRouter.get("/", async (req: Request, res: Response) => {
  if (!process.env.URL) {
    return res.status(500).send(`Incorrect configuration of API URL`);
  }

  try {
    let items: Station[] = await getStationData(process.env.URL);
    items = filterStationsByApparentT(items, 15.0);
    items = sortStationsByApparentT(items);
    return res.status(200).send(items);
  } catch (err) {
    if (err instanceof BomError) {
      return res.status(err.status).send(err.message);
    } else if (err instanceof Error) {
      return res.status(500).send(err.message);
    }
    return res.status(500).send(`Unknown Error ${err}`);
  }
});
