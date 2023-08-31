import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import * as React from "react";

function valuetext(value: number) {
  return `${value}`;
}

export default function RangeSlider({
  initialValue,
}: {
  initialValue: number[];
}) {
  const [value, setValue] = React.useState<number[]>(initialValue);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const minimumValue = value[0];
  const maximumValue = value[1];

  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(event.target.value);

      if (isNaN(newValue)) return;

      let updatedValue: number[];
      if (index === 0) {
        updatedValue = [Math.min(newValue, value[1]), value[1]];
      } else {
        updatedValue = [value[0], Math.max(newValue, value[0])];
      }

      setValue(updatedValue);
    };

  return (
    <Box sx={{ width: 1 }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: 1, pb: 2 }}
      >
        <TextField
          value={minimumValue}
          onChange={handleInputChange(0)}
          inputProps={{ min: 1000, max: maximumValue }}
          sx={{ "& input": { py: 0.5, textAlign: "center" } }}
        />
        <TextField
          value={maximumValue}
          onChange={handleInputChange(1)}
          inputProps={{ min: minimumValue, max: 30000 }}
          sx={{ "& input": { py: 0.5, textAlign: "center" } }}
        />
      </Box>
      <Slider
        value={value}
        onChange={handleChange}
        step={100}
        min={initialValue[0]}
        max={initialValue[1]}
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
