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
  lift: boolean;
  parking: boolean;
  generator: boolean;
  security: boolean;
  cctv: boolean;
  wifi: boolean;
  gasBill: number | string;
  gasFacility: string;
  water: boolean;
  electricity: string;
  electricityBill: string;
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

export function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getRandomNumber(options: { min?: number; max?: number }): number {
  const { min = 0, max = 1000 } = options;
  const randomNumber = faker.number.int({ min, max });
  return randomNumber - (randomNumber % 100);
}

export function createRandomPhoneNumber(): string {
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

  const imageUrls = [
    "https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?w=1380&t=st=1692701565~exp=1692702165~hmac=e8be6b3970a0044fb6c625dc9a19d4c92ad9fb252e6ca628a0e7feb32f26c942",
    "https://img.freepik.com/free-photo/room-interior-design_23-2148899438.jpg?w=1380&t=st=1692707729~exp=1692708329~hmac=5d186fa2e3d3ef0663b7c7e5888acba489672ac760e3bece30d8f0233ce11a8e",
    "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=1380&t=st=1692708072~exp=1692708672~hmac=6fb7c73e510ea1e5f0bc4a4aa33afaf2628cdb8f7754e2cdd2a6f2c183d8d1ef",
    "https://img.freepik.com/free-photo/modern-bathroom-with-toilet-bathtub_181624-40037.jpg?w=1380&t=st=1692710170~exp=1692710770~hmac=46c91ebfb16a952e91a9940135c1fe04b51b484ff2f63cf1e10e144cd6d179ca",
    "https://img.freepik.com/free-photo/small-hotel-room-interior-with-double-bed-bathroom_1262-12489.jpg?w=1380&t=st=1692708225~exp=1692708825~hmac=3680d7dfbf58062b4b2ffbaf0043a03ee9d7c706601e89a45b00e24a0a01dc21",
    "https://img.freepik.com/free-photo/hygiene-bowl-modern-bath-close_1203-4854.jpg?w=1380&t=st=1692708272~exp=1692708872~hmac=a991d36cebe120536f809a0f9418b4f68b15c51e76753d3f4387e383c17a35e3",
    "https://img.freepik.com/free-photo/handsome-man-using-cellphone-standing-near-his-friend-cutting-apple-wooden-counter_23-2148195252.jpg?w=1380&t=st=1692708364~exp=1692708964~hmac=425ce40f5124a854a0ed38b483f0b68f699b63d001a6ab9a47538a8706cda54b",
    "https://img.freepik.com/free-photo/cup-coffee-oatmeal-halved-apple-with-spoons-tray-table_23-2148195224.jpg?w=1380&t=st=1692709287~exp=1692709887~hmac=0c20e3d9483b223ab6f489373509781003281439550b14f4a1c5e78fc0848f48",
  ];

  const randomImageUrls = [];
  for (let i = 0; i < imageUrls.length; i++) {
    const randomImageUrl = getRandomElement(imageUrls);
    randomImageUrls.push(randomImageUrl);
  }

  return {
    _id: faker.string.uuid(),
    images: randomImageUrls,
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
    lift: faker.datatype.boolean(),
    parking: faker.datatype.boolean(),
    generator: faker.datatype.boolean(),
    security: faker.datatype.boolean(),
    cctv: faker.datatype.boolean(),
    wifi: faker.datatype.boolean(),
    gasBill: getRandomNumber({ min: 500, max: 2000 }),
    gasFacility: getRandomElement(["Line", "Cylinder"]),
    water: faker.datatype.boolean(),
    electricity: getRandomElement(["Line", "Prepaid", "Postpaid"]),
    electricityBill: getRandomElement(["Included", "Excluded"]),
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
