import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEvent } from "react";
import BasicDatePicker from "../../../components/date-picker/basic-date-picker";
import RHFTextField from "../../../components/hook-form/rhf-text-field";
import HouseLocationAutoComplete from "../../../components/select/house-location-autocomplete";
import HouseSelect from "../../../components/select/house-select";
import HouseTab from "../../../components/tab/house-tab";
import { boldText, randomColor } from "../../../hooks/bold-text";
import { DISTRICTS, DIVISIONS } from "../../filters/filter-elements";
import { UPAZILLAS } from "../../filters/upazillas";

interface IProps {
  register: any;
  isSubmitting: boolean;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RenderHouseForm = ({
  register,
  isSubmitting,
  checked,
  handleChange,
}: IProps) => {
  return (
    <Stack spacing={2.5}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={[
                "Room",
                "Flat",
                "Sublet",
                "Super Hostel",
                "Hostel",
                "Mess",
                "Shared Room",
              ]}
              name="houseType"
              label="House Type*"
              type="string"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <RHFTextField
              name="houseSize"
              label="House Size(sqft)"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              name="bedRoom"
              label="Bedroom*"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={[1, 2, 3, 4, 5]}
              name="bathRoom"
              label="Bathroom*"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={[0, 1, 2, 3, 4, 5]}
              name="balcony"
              label="Balcony"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={[1, 2, 3]}
              name="kitchen"
              label="Kitchen"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <RHFTextField
              name="diningSpace"
              label="Dining Space(sqft)"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25,
              ]}
              name="floor"
              label="Floor No*"
              type="number"
            />
          </Grid>
        </Grid>
      </Box>

      <Typography
        component="div"
        fontSize={{ md: 22, xs: 16 }}
        width="fit-content"
      >
        {boldText("Facilities")}
        <Divider sx={{ width: 1 / 3, border: 1, borderColor: randomColor }} />
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <HouseTab name="lift" label="Lift Facilities" />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseTab name="generator" label="Generator Facilities" />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseTab name="security" label="Security Guard" />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseTab name="parking" label="Parking Facilities" />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseTab name="cctv" label="CCTV" />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseTab name="wifi" label="WiFi Facilities" />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseTab name="water" label="Water Facilities" />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseTab name="attachedWashroom" label="Attached Washroom" />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={["Tiles", "Marble", "Wooden", "Cement"]}
              name="floorType"
              label="Floor Type"
              type="string"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={["Line", "Cylinder"]}
              name="gasFacility"
              label="Gas Facility"
              type="string"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={["Prepaid", "Postpaid"]}
              name="electricity"
              label="Electricity"
              type="string"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={["Included", "Excluded"]}
              name="electricityBill"
              label="Electricity Bill"
              type="string"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <RHFTextField name="houseRent" label="House Rent*" type="number" />
          </Grid>
          <Grid item xs={6} md={4}>
            <RHFTextField
              name="serviceCharge"
              label="Service Charge"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <RHFTextField name="gasBill" label="Gas Bill" type="number" />
          </Grid>
          <Grid item xs={6} md={4}>
            <HouseTab name="rentNegotiable" label="Rent Negotiable" />
          </Grid>
          <Grid item xs={6} md={4}>
            <BasicDatePicker name="availableFrom" label="Available From" />
          </Grid>
          <Grid item xs={6} md={4} sx={{ mt: 3.5 }}>
            <HouseSelect
              data={["Boys", "Girls"]}
              name="preferredGender"
              label="Preferred Gender"
              type="string"
            />
          </Grid>
        </Grid>
      </Box>

      <RHFTextField
        name="description"
        label="Description"
        multiline
        rows={10}
      />
      <RHFTextField name="images" label="Images Link" multiline rows={5} />

      <Typography
        component="div"
        fontSize={{ md: 22, xs: 16 }}
        width="fit-content"
      >
        {boldText("House Location")}
        <Divider sx={{ width: 1 / 3, border: 1, borderColor: randomColor }} />
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <HouseLocationAutoComplete
              data={DIVISIONS}
              name="location.division"
              label="division"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <HouseLocationAutoComplete
              data={DISTRICTS}
              name="location.district"
              label="district"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <HouseLocationAutoComplete
              data={UPAZILLAS}
              name="location.upazilla"
              label="upazilla"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RHFTextField
              name="location.address"
              label="Full Address"
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RHFTextField
              name="location.googleMapLink"
              label="Google Map Link"
              multiline
              rows={2}
            />
          </Grid>
        </Grid>
      </Box>

      <Typography
        component="div"
        fontSize={{ md: 22, xs: 16 }}
        width="fit-content"
      >
        {boldText("Contact Info")}
        <Divider sx={{ width: 1 / 3, border: 1, borderColor: randomColor }} />
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <RHFTextField name="contactName" label="Full Name" />
          </Grid>
          <Grid item xs={6} md={4}>
            <RHFTextField name="contactNo" label="Phone No" />
          </Grid>
          <Grid item xs={6} md={4}>
            <RHFTextField
              name="contactEmail"
              type="email"
              label="Email address"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <RHFTextField
              name="contactAddress"
              label="Full Address"
              multiline
              rows={2}
            />
          </Grid>
        </Grid>
      </Box>
      <FormControlLabel
        sx={{ width: "fit-content" }}
        required
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="I'm doing the post on behalf of others"
      />
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Submit
      </LoadingButton>
    </Stack>
  );
};

export default RenderHouseForm;
