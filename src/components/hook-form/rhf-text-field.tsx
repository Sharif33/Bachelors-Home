import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = TextFieldProps & {
  name: string;
  register?: any;
  multiline?: boolean;
  rows?: number;
};

export default function RHFTextField({
  register,
  name,
  multiline = false,
  rows = 0,
  helperText,
  type,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          multiline={multiline && multiline}
          rows={rows && rows}
          value={
            type === "number" && field.value === 0
              ? ""
              : name === "images"
              ? field.value.join("\n")
              : field.value
          }
          onChange={(event: any) => {
            if (type === "number") {
              field.onChange(Number(event.target.value));
            } else {
              field.onChange(event.target.value);
            }
            if (name === "images") {
              const value = event.target.value;
              const valueArray = value.split("\n");
              field.onChange(valueArray);
            }
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}
