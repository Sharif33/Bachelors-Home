import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputBase, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { m } from "framer-motion";
import { debounce } from "lodash";
import * as React from "react";
import { useState } from "react";
import { varHover } from "../../components/animate/variants copy";
import SearchModal from "../../components/modal/search-modal";
import { HOUSES, IHouses } from "../faker/fake-post";

export default function HouseSearch() {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filteredHouses, setFilteredHouses] = useState<IHouses[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEscaped = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  const searchHouses = async () => {
    setLoading(true);
    if (search.length === 0) {
      setLoading(false);
      setFilteredHouses([]);
      // return;
    }

    try {
      const filteredHouses = await new Promise<IHouses[]>((resolve) =>
        setTimeout(
          () =>
            resolve(
              HOUSES.filter(
                (house) =>
                  house.location.district
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  house.location.upazilla
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  house.location.division
                    .toLowerCase()
                    .includes(search.toLowerCase())
              )
            ),
          150
        )
      );

      setFilteredHouses(filteredHouses);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error occurred while filtering houses:", error);
    }
  };

  const debouncedSearchHouses = debounce(searchHouses, 50);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setInputValue(e.target.value);

    if (e.target.value.length === 0) {
      setLoading(false);
      setFilteredHouses([]);
      return;
    }
    debouncedSearchHouses();
  };

  const handleClear = () => {
    setSearch("");
    setInputValue("");
    setFilteredHouses([]);
  };

  const handleClickSearch = () => {
    if (search.length === 0) return;
    searchHouses();
    setInputValue(search);
    setSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickSearch();
    }
  };

  const renderSearchInput = () => (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 1,
        boxShadow: "none",
      }}
    >
      <IconButton
        onClick={handleClickSearch}
        color="primary"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by city name..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        value={search}
        endAdornment={
          <IconButton
            aria-label="search-clear"
            onClick={handleClear}
            size="small"
            sx={{ mx: 0.5 }}
          >
            {search.length > 0 && <CloseIcon />}
          </IconButton>
        }
      />
      <Button
        size="small"
        onClick={handleClose}
        onKeyUp={handleEscaped}
        color="error"
        sx={{
          textTransform: "none",
          bgcolor: "rgba(0, 167, 111, 0.04)",
          borderRadius: 2,
        }}
      >
        esc
      </Button>
    </Paper>
  );

  return (
    <Box>
      <Button
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.015)}
        onClick={handleOpen}
        sx={{
          width: { xs: "100%", md: "50ch" },
          p: 1.25,
          bgcolor: "rgba(0, 167, 111, 0.04)",
          borderRadius: 2,
          textTransform: "none",
          color: "grey.700",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <Typography fontSize="0.825rem" fontStyle="italic">
            Enter city name...
          </Typography>
          <SearchIcon sx={{ color: "primary.main" }} />
        </Box>
      </Button>
      <SearchModal
        open={open}
        handleClose={handleClose}
        renderSearchInput={renderSearchInput}
        data={filteredHouses}
        inputValue={inputValue}
        loading={loading}
      />
    </Box>
  );
}
