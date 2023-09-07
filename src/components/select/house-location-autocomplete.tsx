import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { District, Division } from "../../features/filters/filter-elements";
import { IUpazilla } from "../../features/filters/upazillas";

export default function HouseLocationAutoComplete({
  data,
  label,
  name,
}: {
  data: Division[] | District[] | IUpazilla[];
  label?: string;
  name: string;
}) {
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Autocomplete
              {...field}
              value={value}
              aria-label="house-location-autocomplete"
              aria-required="true"
              disablePortal
              onChange={(_event: any, newValue: string | null) => {
                field.onChange(newValue);
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(_event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id={`house-${name}`}
              options={data.map((item) => item.name)}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`Choose ${label}`}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />

            {error ? (
              <FormHelperText sx={{ color: "error.main" }}>
                {error?.message}
              </FormHelperText>
            ) : null}
          </>
        )}
      />
    </div>
  );
}
