import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { HOUSES, IHouses } from "../faker/fake-post";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "dashed 1px #e0e0e0",
  "&:hover": {
    border: "dashed 1px #00A76F",
  },
  backgroundColor: "#F9FAFB",
  color: "black",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  borderLeft: "dashed 1px #e0e0e0",
  "&:hover": {
    borderLeft: "dashed 1px #00A76F",
  },
  height: "100%",
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
    [theme.breakpoints.down("md")]: {
      width: "15ch",
    },
  },
}));

export default function HouseSearch() {
  const [search, setSearch] = useState("");
  const [filteredHouses, setFilteredHouses] = useState<IHouses[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (search.length === 0) return;
      searchHouses();
    }
  };

  const handleClickSearch = () => {
    if (search.length === 0) return;
    searchHouses();
  };

  const searchHouses = () => {
    setFilteredHouses(
      HOUSES.filter((house) =>
        house.location.district.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <Box>
      <Search>
        <StyledInputBase
          placeholder="Enter city name..."
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearch}
          onKeyDown={handleEnter}
        />
        <SearchIconWrapper onClick={handleClickSearch}>
          <SearchIcon
            sx={{
              color:
                search.length === 0
                  ? (theme) => theme.palette.text.secondary
                  : "primary.main",
            }}
          />
        </SearchIconWrapper>
      </Search>
    </Box>
  );
}
