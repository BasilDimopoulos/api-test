import { Station, StationResponse } from "./types/station.interface";

const mapResponse = (response: StationResponse[]) =>
  response.map((p, key) => ({
    id: key,
    name: p.name,
    apparent_t: p.apparent_t,
    lat: p.lat,
    lon: p.lon,
  }));

export const getStationData = async (): Promise<Station[]> => {
  let response;
  let url = "http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json";

  try {
    response = await fetch(url);
  } catch (err) {
    throw new Error(`Error fetching data from ${url}:`);
  }

  if (response?.ok) {
    response = await response.json();
    const responseData = response["observations"]["data"];
    const stationData: Station[] = mapResponse(responseData);
    return stationData;
  } else {
    throw new Error(`HTTP Response Code: ${response?.status}`);
  }
};

export const sortStationsByApparentT = (data: Station[]) => {
  const sortedData = data.sort(function (a, b) {
    return a.apparent_t - b.apparent_t;
  });
  return sortedData;
};

export const filterStationsByApparentT = (
  stations: Station[],
  threshold: number
) => {
  const filteredResult = stations.filter(
    (station) => station.apparent_t > threshold
  );
  return filteredResult;
};
