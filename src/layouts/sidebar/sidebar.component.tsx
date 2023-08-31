import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CustomCheckbox from "../../components/checkbox/checkbox";
import CustomSelect from "../../components/select/custom-select";
import DistrictSelect from "../../components/select/district-select";
import DivisionSelect from "../../components/select/division-select";
import UpazillaSelect from "../../components/select/upazilla-select";
import RangeSlider from "../../components/slider/range-slider";
import { DIVISIONS } from "../../features/filters/filter-elements";
import { UseFilters } from "../../features/filters/use-filters";

const SidebarComponent = () => {
  const {
    handleHouseTypeChange,
    handleGenderChange,
    selectedItems,
    initialRangeValues,
    currentMonthName,
    month,
    setMonth,
    divId,
    setDivId,
    districts,
    distId,
    setDistId,
    upazillas,
    months,
    currentDate,
    currentMonth,
  } = UseFilters();
  return (
    <Box
      sx={{
        blur: 20,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backgroundImage:
          "url(https://minimals.cc/assets/cyan-blur.png), url(https://minimals.cc/assets/red-blur.png)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "right top, left bottom",
        backgroundSize: "50%, 50%",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", px: 3, pt: 1 }}
      >
        <Typography variant="h6">Filters</Typography>
        <Button variant="text" sx={{ textTransform: "capitalize" }}>
          Reset
        </Button>
      </Box>
      <Box sx={{ overflow: "auto", px: 3 }}>
        <List>
          {/* <ListItemText primary="Type" /> */}
          <ListItem disablePadding>
            <CustomCheckbox
              label="Boys"
              onCheckboxChange={handleGenderChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Girls"
              onCheckboxChange={handleGenderChange}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemText primary="Rent" />
          <ListItem disablePadding>
            <RangeSlider initialValue={initialRangeValues} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemText primary="House Type" />
          <ListItem disablePadding>
            <CustomCheckbox
              label="Room"
              onCheckboxChange={handleHouseTypeChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Shared Room"
              onCheckboxChange={handleHouseTypeChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Flat"
              onCheckboxChange={handleHouseTypeChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Sublet"
              onCheckboxChange={handleHouseTypeChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Super Hostel"
              onCheckboxChange={handleHouseTypeChange}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemText primary="Available From" />
          <ListItem disablePadding>
            <CustomSelect data={months} value={month} setValue={setMonth} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemText primary="Select Division" />
          <ListItem disablePadding>
            <DivisionSelect data={DIVISIONS} setDivId={setDivId} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemText primary="Select District" />
          <ListItem disablePadding>
            <DistrictSelect
              data={districts}
              divId={divId}
              setDistId={setDistId}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemText primary="Select Upazilla" />
          <ListItem disablePadding>
            <UpazillaSelect data={upazillas} distId={distId} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SidebarComponent;
