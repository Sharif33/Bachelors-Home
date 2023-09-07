import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import { ChangeEvent } from "react";
import BasicDatePicker from "../../../components/date-picker/basic-date-picker";
import RHFTextField from "../../../components/hook-form/rhf-text-field";
import HouseLocationAutoComplete from "../../../components/select/house-location-autocomplete";
import HouseSelect from "../../../components/select/house-select";
import { DISTRICTS, DIVISIONS } from "../../filters/filter-elements";
import { UPAZILLAS } from "../../filters/upazillas";

interface IProps {
  register: any;
  isSubmitting: boolean;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RenderRequestHouseForm = ({
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
              name="prferrableRent"
              label="Prferrable Rent"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <RHFTextField name="profession" label="Your Profession" />
          </Grid>
          <Grid item xs={6} md={3}>
            <HouseSelect
              data={["Boy", "Girl"]}
              name="gender"
              label="Gender"
              type="string"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <HouseLocationAutoComplete
              data={DIVISIONS}
              name="division"
              label="division"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <HouseLocationAutoComplete
              data={DISTRICTS}
              name="district"
              label="district"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <HouseLocationAutoComplete
              data={UPAZILLAS}
              name="upazilla"
              label="upazilla"
            />
          </Grid>{" "}
          <Grid item xs={6} md={4}>
            <BasicDatePicker name="fromDate" label="From Date" />
          </Grid>
          <Grid item xs={12} md={12}>
            <RHFTextField
              name="description"
              label="Description"
              multiline
              rows={10}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <RHFTextField name="name" label="Full Name" />
          </Grid>
          <Grid item xs={6} md={4}>
            <RHFTextField name="phone" label="Phone No" />
          </Grid>
          <Grid item xs={6} md={4}>
            <RHFTextField name="email" type="email" label="Email address" />
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

export default RenderRequestHouseForm;
