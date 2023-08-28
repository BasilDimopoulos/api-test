import { getStationData } from "./station.service";
import { Station } from "./types/station.interface";
import express, { Request, Response } from "express";

export const stationsRouter = express.Router();

stationsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Station[] = await getStationData();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

