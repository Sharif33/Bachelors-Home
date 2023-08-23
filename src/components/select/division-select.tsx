import { Autocomplete, TextField } from "@mui/material";
import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { Division } from "../../features/filters/filter-elements";

export default function DivisionSelect({
  data,
  setDivId,
}: {
  data: Division[];
  setDivId: Dispatch<SetStateAction<string>>;
}) {
  const defaultValue = data.length > 0 ? data[0]?.name : null;

  const [value, setValue] = React.useState<string | null>(defaultValue);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    if (!value) return setDivId(data[0].id);
    if (value) {
      const divs = data.filter((item) => item.name === value);
      setDivId(divs[0]?.id);
    }
  }, [value]);

  return (
    <div>
      <Autocomplete
        size="small"
        value={value}
        aria-label="division-select"
        aria-required="true"
        disablePortal
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={data.map((item) => item.name)}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
}
