import { FormHelperText, Stack, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function BasicDatePicker({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const { control } = useFormContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="column" spacing={0.5}>
        <Typography>{label}</Typography>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <DatePicker
                {...field}
                value={value}
                onChange={(newValue) => {
                  field.onChange(newValue);
                  setValue(newValue);
                }}
              />

              {error ? (
                <FormHelperText sx={{ color: "error.main" }}>
                  {error?.message}
                </FormHelperText>
              ) : null}
            </>
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
