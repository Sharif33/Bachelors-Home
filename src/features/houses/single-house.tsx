import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import CustomCarousel, {
  CarouselItem,
} from "../../components/carousel/custom-caousel";
import formatDate from "../../hooks/formate-date";
import getLocalNumber from "../../hooks/use-number-format";
import { HOUSES } from "../faker/fake-post";

const colors = ["#F59C28", "#8E33FF", "#00B8D9", "#22C55E", "#FFAB00", "black"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

export const boldText = (text: string) => (
  <span style={{ fontWeight: 700, color: randomColor }}>{text}</span>
);

const SingleHouse = () => {
  let { _id } = useParams();

  const house = HOUSES?.find((house) => house._id === _id);
  if (!house || !house.images) {
    return <div>No house found.</div>;
  }
  const carouselItems: CarouselItem[] = house.images.map((image) => ({
    image,
  }));

  const {
    attachedWashroom,
    availableFrom,
    balcony,
    bathRoom,
    bedRoom,
    cctv,
    contactAddress,
    contactEmail,
    contactName,
    contactNo,
    description,
    diningSpace,
    electricity,
    electricityBill,
    floor,
    floorType,
    gasBill,
    gasFacility,
    generator,
    houseRent,
    houseSize,
    houseType,
    kitchen,
    lift,
    location: { address, district, division, googleMapLink, upazilla },
    parking,
    preferredGender,
    rentNegotiable,
    security,
    serviceCharge,
    water,
    wifi,
  } = house;

  return (
    <React.Fragment>
      <Container>
        <CustomCarousel items={carouselItems} loop />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          my={5}
        >
          <Stack
            direction="column"
            justifyContent="start"
            alignItems="start"
            spacing={2}
          >
            <Typography fontSize={{ md: 20, xs: 16 }} sx={{ color: "gray" }}>
              {boldText(houseType)} available from{" "}
              {boldText(formatDate(availableFrom))} at {boldText(upazilla)},{" "}
              {boldText(district)} for {boldText(preferredGender)}
            </Typography>
            <Typography component="div" fontSize={{ md: 22, xs: 16 }}>
              {boldText("Additional Information")}
              <Divider
                sx={{ width: 1 / 3, border: 1, borderColor: randomColor }}
              />
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>House Type: </span>
                {houseType}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Bedroom: </span>
                {bedRoom}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Washroom: </span>
                {bathRoom}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Floor: </span>
                {floor}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Floor Type: </span>
                {floorType}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>House Size: </span>
                {getLocalNumber(Number(houseSize))} sqft
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Rent: </span>
                {getLocalNumber(Number(houseRent))} BDT
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Service Charge: </span>
                {getLocalNumber(Number(serviceCharge))} BDT
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Rent Negotiable: </span>
                {rentNegotiable ? "Yes" : "No"}
              </Typography>

              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Security: </span>
                {security ? "Yes" : "Guard"}
              </Typography>
            </Stack>{" "}
            <Stack direction="row" spacing={2}>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Gas: </span>
                {getLocalNumber(Number(gasBill))} BDT
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Gas Facility: </span>
                {gasFacility}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Water: </span>
                {water ? "Yes, 24/7" : "Occasionally n/a"}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Electricity: </span>
                {electricity}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Electricity Bill: </span>
                {electricityBill}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Balcony: </span>
                {balcony}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Dining Space: </span>
                {diningSpace}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Kitchen: </span>
                {kitchen}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Attached Washroom: </span>
                {attachedWashroom ? "Yes" : "No"}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Lift: </span>
                {lift ? "Yes" : "No"}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Parking: </span>
                {parking ? "Yes" : "No"}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Generator: </span>
                {generator ? "Yes" : "No"}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>CCTV: </span>
                {cctv ? "Yes" : "No"}
              </Typography>
              <Typography fontSize={{ md: 18, xs: 16 }}>
                <span style={{ fontWeight: 600 }}>Wifi: </span>
                {wifi ? "Yes" : "No"}
              </Typography>
            </Stack>
            <Typography component="div" fontSize={{ md: 22, xs: 16 }}>
              {boldText("Description")}
              <Divider
                sx={{ width: 1 / 3, border: 1, borderColor: randomColor }}
              />
            </Typography>
            <Typography fontSize={{ md: 18, xs: 16 }}>{description}</Typography>
            <Typography component="div" fontSize={{ md: 22, xs: 16 }}>
              {boldText("Location")}
              <Divider
                sx={{ width: 1 / 3, border: 1, borderColor: randomColor }}
              />
            </Typography>
            <Typography fontSize={{ md: 18, xs: 16 }}>
              {address}, {upazilla}, {district}, {division}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default SingleHouse;
