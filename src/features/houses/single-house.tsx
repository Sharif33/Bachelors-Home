import { Divider, Grid, Toolbar } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import CustomCarousel, {
  CarouselItem,
} from "../../components/carousel/custom-caousel";
import { boldText, randomColor } from "../../hooks/bold-text";
import formatDate from "../../hooks/formate-date";
import getLocalNumber from "../../hooks/use-number-format";
import { HOUSES } from "../faker/fake-post";
import ContactOwner from "./contact-owner";

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
      <Grid
        container
        spacing={{ md: 5, xs: 1.5 }}
        px={{ md: 15, xl: 25, xs: 2 }}
      >
        <Grid item xs={12} md={9}>
          <Stack
            direction="column"
            justifyContent="start"
            alignItems="start"
            spacing={2}
            width={1}
            my={5}
          >
            <CustomCarousel items={carouselItems} loop />
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
            <Stack direction="row" spacing={2} flexWrap="wrap">
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
            <Stack direction="row" spacing={2} flexWrap="wrap">
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
            </Stack>
            <Stack direction="row" spacing={2} flexWrap="wrap">
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
            <Stack direction="row" spacing={2} flexWrap="wrap">
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
            <Stack direction="row" spacing={2} flexWrap="wrap">
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
        </Grid>
        <Grid item xs={12} md={3} width={1}>
          <Stack
            direction="column"
            justifyContent="start"
            alignItems="start"
            sx={{ position: "sticky", top: 0, right: 0 }}
          >
            <Toolbar />
            <ContactOwner
              contactName={contactName}
              contactNo={contactNo}
              contactEmail={contactEmail}
              contactAddress={contactAddress}
              houseType={houseType}
            />
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SingleHouse;
