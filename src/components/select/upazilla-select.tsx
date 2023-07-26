import { Autocomplete, TextField } from "@mui/material";
import * as React from "react";
import { IUpazilla } from "../../features/filters/upazillas";

export default function UpazillaSelect({
  data,
  distId,
}: {
  data: IUpazilla[];
  distId: string;
}) {
  const [value, setValue] = React.useState<string | null>(data[0]?.name);
  const [inputValue, setInputValue] = React.useState("");

  //set default value for upazilla by district id
  React.useEffect(() => {
    if (distId) {
      const upazillas = data.filter((item) => item.district_id === distId);
      setValue(upazillas[0]?.name);
    }
  }, [distId]);

  return (
    <div>
      <Autocomplete
        size="small"
        value={value}
        options={data.map((item) => item.name)}
        isOptionEqualToValue={(option, value) => option === value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
}
