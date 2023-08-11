import type { SexType } from "@faker-js/faker";
import { faker } from "@faker-js/faker";
import {
  createRandomPhoneNumber,
  randomDistrict,
  randomDivision,
  randomUpazilla,
} from "./fake-post";

interface IUser {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  phone: string;
  division: string;
  district: string;
  upazilla: string;
  address: string;
}

function createRandomUser(): IUser {
  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    phone: createRandomPhoneNumber(),
    division: randomDivision.name,
    district: randomDistrict.name,
    upazilla: randomUpazilla.name,
    address: faker.location.streetAddress(),
  };
}

function createRandomUsers(count: number): IUser[] {
  const users: IUser[] = [];
  for (let i = 0; i < count; i++) {
    users.push(createRandomUser());
  }
  return users;
}

export const USERS = createRandomUsers(20);
