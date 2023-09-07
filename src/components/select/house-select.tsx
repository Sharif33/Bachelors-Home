import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";

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

export default function HouseSelect({
  data,
  name,
  register,
  label,
  type = "",
}: {
  data: (string | number)[];
  name: string;
  register?: any;
  label: string;
  type: string;
}) {
  const [value, setValue] = React.useState<string | number>("");

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setValue(event.target.value);
  };

  const { control } = useFormContext();
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id={`house-label-${name}`}>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Select
                {...field}
                labelId={`house-label-${name}`}
                id={`house-${name}`}
                value={value}
                onChange={(event: any) => {
                  if (type === "number") {
                    field.onChange(Number(event.target.value));
                    setValue(Number(event.target.value));
                  } else {
                    field.onChange(event.target.value);
                    setValue(event.target.value);
                  }
                }}
                label={label}
                MenuProps={MenuProps}
                error={!!error}
              >
                {data.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              {error ? (
                <FormHelperText sx={{ color: "error.main" }}>
                  {error?.message}
                </FormHelperText>
              ) : null}
            </>
          )}
        />
      </FormControl>
    </div>
  );
}
