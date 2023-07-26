import { faker } from "@faker-js/faker";
import { DISTRICTS, DIVISIONS } from "../filters/filter-elements";
import { UPAZILLAS } from "../filters/upazillas";

export interface IHouses {
  _id: string;
  images: string[];
  houseType: string;
  availableFrom: string;
  houseSize: number | string;
  houseRent: number | string;
  rentNegotiable: boolean;
  serviceCharge: number | string;
  bedRoom: number | string;
  bathRoom: number | string;
  kitchen: number | string;
  balcony: number | string;
  floor: number | string;
  floorType: string;
  diningSpace: number | string;
  attachedWashroom: boolean;
  commomWashroom: boolean;
  lift: boolean;
  parking: boolean;
  generator: boolean;
  security: boolean;
  cctv: boolean;
  wifi: boolean;
  gas: boolean;
  gasFacility: boolean;
  water: boolean;
  electricity: boolean;
  description: string;
  contactNo: string;
  contactEmail: string;
  contactAddress: string;
  contactName: string;
  preferredGender: string;
  location: {
    division: string;
    district: string;
    upazilla: string;
    address: string;
    googleMapLink: string;
  };
}

function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getRandomNumber(options: { min?: number; max?: number }): number {
  const { min = 0, max = 1000 } = options;
  const randomNumber = faker.number.int({ min, max });
  return randomNumber - (randomNumber % 100);
}

function createRandomPhoneNumber(): string {
  const phoneCode = "+8801";
  const phoneNumber =
    phoneCode +
    faker.number.int({ min: 1, max: 9 }) +
    faker.number.int({ min: 10000000, max: 99999999 });
  return phoneNumber;
}

function createRandomHouses(): IHouses {
  const randomDivision = getRandomElement(DIVISIONS);
  const randomDistrict = getRandomElement(
    DISTRICTS.filter((d) => d.division_id === randomDivision.id)
  );
  const randomUpazilla = getRandomElement(
    UPAZILLAS.filter((u) => u.district_id === randomDistrict.id)
  );

  return {
    _id: faker.string.uuid(),
    images: [
      faker.image.urlLoremFlickr({ category: "house" }),
      faker.image.urlLoremFlickr({ category: "washroom" }),
      faker.image.urlLoremFlickr({ category: "kitchen" }),
    ],
    houseType: getRandomElement([
      "Room",
      "Flat",
      "Sublet",
      "Super Hostel",
      "Hostel",
      "Mess",
      "Shared Room",
    ]),
    availableFrom: faker.date
      .between({
        from: new Date(),
        to: new Date(new Date().setMonth(new Date().getMonth() + 2)),
      })
      .toDateString(),
    houseSize: getRandomNumber({ min: 500, max: 2000 }),
    houseRent: getRandomNumber({ min: 1500, max: 20000 }),
    rentNegotiable: faker.datatype.boolean(),
    serviceCharge: getRandomNumber({ min: 500, max: 2000 }),
    bedRoom: faker.number.int({ min: 1, max: 3 }),
    bathRoom: faker.number.int({ min: 1, max: 3 }),
    kitchen: faker.number.int({ min: 1, max: 2 }),
    balcony: faker.number.int({ min: 1, max: 5 }),
    floor: faker.number.int({ min: 1, max: 10 }),
    floorType: getRandomElement(["Tiles", "Marble", "Wooden", "Cement"]),
    diningSpace: getRandomNumber({ min: 1, max: 1 }),
    attachedWashroom: faker.datatype.boolean(),
    commomWashroom: faker.datatype.boolean(),
    lift: faker.datatype.boolean(),
    parking: faker.datatype.boolean(),
    generator: faker.datatype.boolean(),
    security: faker.datatype.boolean(),
    cctv: faker.datatype.boolean(),
    wifi: faker.datatype.boolean(),
    gas: faker.datatype.boolean(),
    gasFacility: faker.datatype.boolean(),
    water: faker.datatype.boolean(),
    electricity: faker.datatype.boolean(),
    description: faker.lorem.paragraph(),
    contactNo: createRandomPhoneNumber(),
    contactEmail: faker.internet.email(),
    contactAddress: faker.location.streetAddress(),
    contactName: faker.person.fullName(),
    preferredGender: getRandomElement(["Boys", "Girls"]),
    location: {
      division: randomDivision.name,
      district: randomDistrict.name,
      upazilla: randomUpazilla.name,
      address: faker.location.streetAddress(),
      googleMapLink: faker.internet.url(),
    },
  };
}

function createRandomHouse(count: number): IHouses[] {
  const houses: IHouses[] = [];
  for (let i = 0; i < count; i++) {
    houses.push(createRandomHouses());
  }
  return houses;
}

export const HOUSES = createRandomHouse(100);
