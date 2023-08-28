import {
  filterStationsByApparentT,
  mapResponseToStations,
  sortStationsByApparentT,
} from "../stations/station.service";
import { Station, StationResponse } from "../stations/types/station.interface";

const sampleData: Station[] = [
  {
    id: 25,
    name: "Sydney Olympic Park",
    apparent_t: 5.9,
    lat: -33.8,
    lon: 151.1,
  },
  {
    id: 107,
    name: "Sydney Olympic Park",
    apparent_t: 18.2,
    lat: -33.8,
    lon: 151.1,
  },
  {
    id: 45,
    name: "Sydney Olympic Park",
    apparent_t: 15.9,
    lat: -33.8,
    lon: 151.1,
  },
];

describe("sortStationsByApparentT Test", () => {
  it("should test that the sortStationsByApparentT() sorts by apparent_t in ascending order", () => {
    const expectedValue: Station[] = [
      {
        id: 25,
        name: "Sydney Olympic Park",
        apparent_t: 5.9,
        lat: -33.8,
        lon: 151.1,
      },
      {
        id: 45,
        name: "Sydney Olympic Park",
        apparent_t: 15.9,
        lat: -33.8,
        lon: 151.1,
      },
      {
        id: 107,
        name: "Sydney Olympic Park",
        apparent_t: 18.2,
        lat: -33.8,
        lon: 151.1,
      },
    ];
    expect(sortStationsByApparentT(sampleData)).toEqual(expectedValue);
  });
});

describe("filterStationsByApparentT Test", () => {
  it("should test that the filterStationsByApparentT() filters by the apparent_t threshold correctly", () => {
    const expectedValue: Station[] = [
      {
        id: 45,
        name: "Sydney Olympic Park",
        apparent_t: 15.9,
        lat: -33.8,
        lon: 151.1,
      },
      {
        id: 107,
        name: "Sydney Olympic Park",
        apparent_t: 18.2,
        lat: -33.8,
        lon: 151.1,
      },
    ];
    expect(filterStationsByApparentT(sampleData, 15)).toEqual(expectedValue);
  });
});

describe("mapResponse Test", () => {
  it("should test that the mapResponse converts an array of StationResponse to an array of Station objects", () => {
    const expectedValue: Station[] = [
      {
        id: 0,
        name: "Sydney Olympic Park",
        apparent_t: 15.9,
        lat: -33.8,
        lon: 151.1,
      },
      {
        id: 1,
        name: "Sydney Olympic Park",
        apparent_t: 18.2,
        lat: -33.8,
        lon: 151.1,
      },
    ];

    const responseObjects: StationResponse[] = [
      {
        name: "Sydney Olympic Park",
        wmo: 23,
        apparent_t: 15.9,
        lat: -33.8,
        lon: 151.1,
        cloud: "yes"
      },
      {
        name: "Sydney Olympic Park",
        apparent_t: 18.2,
        lat: -33.8,
        lon: 151.1,
        rel_hum: 123,
        rain_trace: 12
      },
    ];
    expect(mapResponseToStations(responseObjects)).toEqual(expectedValue);
  });
});