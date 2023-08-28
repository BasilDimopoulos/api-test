import { Station, StationResponse } from "./types/station.interface";

const mapResponse = (response: StationResponse[]) => response.map((p, key) => ({
    id: key,
    name: p.name,
    apparent_t: p.apparent_t,
    lat: p.lat,
    lon: p.lon
  }));

export const getStationData = async(): Promise<Station[]> => {
    const response = await fetch("http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json")
        .then((response) => response.json());

    const responseData = response["observations"]["data"];
    const stationData: Station[] = mapResponse(responseData);

    return stationData;
}