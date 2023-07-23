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
import RangeSlider from "../../components/slider/range-slider";

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
