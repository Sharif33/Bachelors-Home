import { Autocomplete, TextField } from "@mui/material";
import * as React from "react";
import { District } from "../../features/filters/filter-elements";

export default function DistrictSelect({
  data,
  setDistId,
  divId,
}: {
  data: District[];
  divId: string;
  setDistId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [value, setValue] = React.useState<string | null>(data[0]?.name);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    if (divId) {
      const dists = data.filter((item) => item.division_id === divId);
      setValue(dists[0]?.name);
    }
  }, [divId]);

  React.useEffect(() => {
    if (!value) return setDistId(data[0]?.id);
    if (value) {
      const dists = data.filter((item) => item.name === value);
      setDistId(dists[0]?.id);
    }
  }, [value]);

  return (
    <div>
      <Autocomplete
        size="small"
        value={value}
        aria-label="district-select"
        aria-required="true"
        disablePortal
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
