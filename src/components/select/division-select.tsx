import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function DivisionSelect({
  data,
  handleClick,
}: {
  data: {
    id: string;
    name: string;
    bn_name: string;
    lat: string;
    lon: string;
    url?: string;
  }[];
  handleClick: (id: string) => void;
}) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Select
        value={value}
        onChange={handleChange}
        sx={{ width: 250 }}
        size="small"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        MenuProps={MenuProps}
      >
        <MenuItem value="" disabled>
          None
        </MenuItem>
        {data.map((item) => (
          <MenuItem
            onClick={() => handleClick(item.id)}
            key={item.name}
            value={item.name}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
