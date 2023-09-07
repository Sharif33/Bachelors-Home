import { FormHelperText, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const HouseTab = ({ name, label }: { name: string; label: string }) => {
  const [value, setValue] = React.useState(false);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: boolean
  ) => {
    setValue(newValue);
  };

  const { control } = useFormContext();

  return (
    <Stack direction="column" spacing={0.5}>
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <ToggleButtonGroup
              {...field}
              id={`house-${name}`}
              color="primary"
              value={value}
              exclusive
              onChange={(
                event: React.MouseEvent<HTMLElement>,
                newValue: boolean
              ) => {
                field.onChange(newValue);
                setValue(newValue);
              }}
              aria-label="house slection tab"
              sx={{ width: 1 }}
            >
              <ToggleButton value={true} sx={{ width: 1 }}>
                Yes
              </ToggleButton>
              <ToggleButton value={false} sx={{ width: 1 }}>
                No
              </ToggleButton>
            </ToggleButtonGroup>

            {error ? (
              <FormHelperText sx={{ color: "error.main" }}>
                {error?.message}
              </FormHelperText>
            ) : null}
          </>
        )}
      />
    </Stack>
  );
};

export default HouseTab;
