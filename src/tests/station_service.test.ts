import { sortStationsByApparentT } from "../stations/station.service";
import { Station } from "../stations/types/station.interface";

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
      }
    ];
    expect(sortStationsByApparentT(sampleData)).toEqual(expectedValue);
  });
});
