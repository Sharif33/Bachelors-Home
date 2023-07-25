import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import CustomCheckbox from "../../components/checkbox/checkbox";
import CustomSelect from "../../components/select/custom-select";
import DistrictSelect from "../../components/select/district-select";
import DivisionSelect from "../../components/select/division-select";
import UpazillaSelect from "../../components/select/upazilla-select";
import RangeSlider from "../../components/slider/range-slider";
import { DISTRICTS, DIVISIONS } from "../../features/filters/filter-elements";
import { UPAZILLAS } from "../../features/filters/upazillas";

const SidebarComponent = () => {
  const initialRangeValues = [1000, 30000];
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleCheckboxChange = (label: string, checked: boolean) => {
    if (checked) {
      setSelectedItems((prevSelected) => [...prevSelected, label]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => item !== label)
      );
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentMonthName = months[currentMonth];

  const [divId, setDivId] = React.useState<string>(DIVISIONS[0].id);
  const districts = DISTRICTS.filter((item) => item.division_id === divId);
  const [distId, setDistId] = React.useState<string>("");
  const upazillas = UPAZILLAS.filter((item) => item.district_id === distId);

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography variant="h6">Filters</Typography>
        <Button variant="text" sx={{ textTransform: "capitalize" }}>
          Reset
        </Button>
      </Box>
      <Box sx={{ overflow: "auto", px: 3 }}>
        <List>
          <ListItemText primary="Type" />
          <ListItem disablePadding>
            <CustomCheckbox
              label="Bachelor (Boys)"
              onCheckboxChange={handleCheckboxChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Bachelor (Girls)"
              onCheckboxChange={handleCheckboxChange}
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
              onCheckboxChange={handleCheckboxChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Shared Room"
              onCheckboxChange={handleCheckboxChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Flat"
              onCheckboxChange={handleCheckboxChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Sublet"
              onCheckboxChange={handleCheckboxChange}
            />
          </ListItem>
          <ListItem disablePadding>
            <CustomCheckbox
              label="Super Hostel"
              onCheckboxChange={handleCheckboxChange}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemText primary="Available From" />
          <ListItem disablePadding>
            <CustomSelect data={months} label={currentMonthName} />
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
        {/*   <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>q</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Box>
    </div>
  );
};

export default SidebarComponent;
