import { TextField } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: string;
}

const MessName = ({ value, setValue, type = "text" }: Props) => {
  return (
    <TextField
      value={value}
      type={type}
      fullWidth
      autoComplete="off"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let val = event.target.value;
        if (type === "number") {
          val = val.replace(/\D/g, "");
          val = val.slice(0, 11);
        }

        setValue(val);
      }}
    />
  );
};

export default MessName;
