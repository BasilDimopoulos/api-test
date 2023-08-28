import {
  filterStationsByApparentT,
  getStationData,
  sortStationsByApparentT,
} from "./station.service";
import { Station } from "./types/station.interface";
import express, { Request, Response } from "express";

export const stationsRouter = express.Router();

stationsRouter.get("/", async (req: Request, res: Response) => {
  try {
    let items: Station[] = await getStationData();
    items = filterStationsByApparentT(items, 15.0);
    items = sortStationsByApparentT(items);
    res.status(200).send(items);
  } catch (err) {
    if (err instanceof Error) {
      res.status(503).send(err.message);
    } else {
      res.status(500).send(`Unknown Error ${err}`);
    }
  }
});
