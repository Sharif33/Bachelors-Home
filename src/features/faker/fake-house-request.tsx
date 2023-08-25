import type { SexType } from "@faker-js/faker";
import { faker } from "@faker-js/faker";
import { DISTRICTS, DIVISIONS } from "../filters/filter-elements";
import { UPAZILLAS } from "../filters/upazillas";
import {
  createRandomPhoneNumber,
  getRandomElement,
  getRandomNumber,
} from "./fake-post";

export interface IReqHouses {
  _id: string;
  postDate: string;
  avatar: string;
  birthday: string;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  phone: string;
  houseType: string;
  PrferrableRent: number | string;
  division: string;
  district: string;
  upazilla: string;
  address: string;
  description: string;
  preferrableDate: string;
}

function createRandomHouseRequest(): IReqHouses {
  const randomDivision = getRandomElement(DIVISIONS);
  const randomDistrict = getRandomElement(
    DISTRICTS.filter((d) => d.division_id === randomDivision.id)
  );
  const randomUpazilla = getRandomElement(
    UPAZILLAS.filter((u) => u.district_id === randomDistrict.id)
  );
  return {
    _id: faker.string.uuid(),
    postDate: faker.date.recent().toLocaleDateString(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate().toLocaleDateString(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    phone: createRandomPhoneNumber(),
    houseType: getRandomElement([
      "Room",
      "Flat",
      "Sublet",
      "Super Hostel",
      "Hostel",
      "Mess",
      "Shared Room",
    ]),
    PrferrableRent: getRandomNumber({ min: 2000, max: 10000 }),
    division: randomDivision.name,
    district: randomDistrict.name,
    upazilla: randomUpazilla.name,
    address: faker.location.streetAddress(),
    description: faker.lorem.paragraph(10),
    preferrableDate: faker.date
      .between({
        from: new Date(),
        to: new Date(new Date().setMonth(new Date().getMonth() + 2)),
      })
      .toDateString(),
  };
}

function createRandomReqHouses(count: number): IReqHouses[] {
  const houses: IReqHouses[] = [];
  for (let i = 0; i < count; i++) {
    houses.push(createRandomHouseRequest());
  }
  return houses;
}

export const REQUEST_HOUSES = createRandomReqHouses(50);
