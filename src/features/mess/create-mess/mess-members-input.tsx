import { Box, Button, Chip, Stack, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  members: string[];
  setMembers: Dispatch<SetStateAction<string[]>>;
}

function MessMembersInput({ members, setMembers }: Props) {
  const [newTag, setNewTag] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const handleTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
    if (event.target.value.length === 11) {
      setErrorMessage(false);
    } else if (event.target.value.length > 11) {
      setErrorMessage(true);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() !== "" && !members.includes(newTag)) {
      setMembers((prevTags) => [...prevTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setMembers((prevTags) => prevTags.filter((prevTag) => prevTag !== tag));
  };

  return (
    <Stack direction="column" spacing={2} width={1}>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {members.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            variant="outlined"
            onDelete={() => handleRemoveTag(tag)}
            title="Click cross icon to remove"
            sx={{
              borderRadius: "50px",
              color: "primary.main",
              fontSize: 12,
            }}
          />
        ))}
      </Stack>

      <Box display="flex" alignItems="center" gap={1}>
        <TextField
          hiddenLabel
          size="small"
          value={newTag}
          type="number"
          onChange={handleTags}
          fullWidth
          autoComplete="off"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={handleAddTag}
            color="primary"
            disabled={newTag.length !== 11}
          >
            Add
          </Button>
        </Box>
      </Box>

      {errorMessage && (
        <Box sx={{ color: "error.main", fontSize: 12 }}>
          Number must be exactly 11 characters long.
        </Box>
      )}
    </Stack>
  );
}

export default MessMembersInput;
