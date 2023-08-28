import { BomError } from "./types/error.interface";
import { Station, StationResponse } from "./types/station.interface";

/**
 * Maps the response from the BOM API to a list of Station objects
 * @param response An array of StationResponse objects representing the response from the BOM API.
 * @returns An array of Station objects
 */
export const mapResponseToStations = (response: StationResponse[]) =>
  response.map((p, key) => ({
    id: key,
    name: p.name,
    apparent_t: p.apparent_t,
    lat: p.lat,
    lon: p.lon,
  }));

/**
 * GET's the list of stations from the BOM API
 * @returns array of Station objects
 */
export const getStationData = async (url: string): Promise<Station[]> => {
  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    if (err instanceof Error) {
      const bomErr: BomError = new BomError(err.message, 503);
      throw bomErr;
    }
  }

  if (!response?.ok) {
    throw new Error(`HTTP Response Code: ${response?.status}`);
  }

  response = await response.json();
  const stationData: Station[] = mapResponseToStations(
    response["observations"]["data"]
  );
  return stationData;
};

/**
 * Sorts a list of stations by the apparent temperature in ascending order
 * @param data An array of Station objects
 * @returns The sorted array of Station objects
 */
export const sortStationsByApparentT = (data: Station[]) => {
  const sortedData = data.sort(function (a, b) {
    return a.apparent_t - b.apparent_t;
  });
  return sortedData;
};

/**
 * Filters a list of Stations by removing values below a threshold
 * @param stations The array of Station objects
 * @param threshold The minimum apparent_t value to stay in the list
 * @returns The filtered array of Station objects
 */
export const filterStationsByApparentT = (
  stations: Station[],
  threshold: number
) => {
  const filteredResult = stations.filter(
    (station) => station.apparent_t > threshold
  );
  return filteredResult;
};
