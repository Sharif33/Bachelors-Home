import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import { IHouses } from "../../features/faker/fake-post";
import RenderHouses from "../../features/houses/render-houses";

interface Props {
  open: boolean;
  handleClose: () => void;
  renderSearchInput: () => JSX.Element;
  data: IHouses[];
  inputValue: string;
  loading?: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
  overflow: "auto",
  maxHeight: { xs: "90vh", md: "80vh" },
  minWidth: { xs: "90vw", md: "50vw" },
};

export default function SearchModal({
  open,
  handleClose,
  data,
  renderSearchInput,
  inputValue,
  loading,
}: Props) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          ".MuiModal-backdrop": {
            backgroundColor: "rgba(107, 122, 144, 0.2)",
            backdropFilter: "blur(4px)",
            transition: "all 0.3s ease",
            transitionDelay: "0.1s",
            transitionProperty: "background-color, backdrop-filter",
          },
        }}
      >
        <Box sx={style}>
          <Box p={{ xs: 1, md: 3 }}>{renderSearchInput()}</Box>
          <Divider />
          <Box
            sx={{
              maxHeight: { xs: "80vh", md: "60vh" },
              overflowY: "auto",
              minHeight: "60vh",
              mt: 2,
              mb: 3,
              px: 3,
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={2}>
              {data.length > 0 && `Search results for "${inputValue}"`}
            </Typography>
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <CircularProgress color="primary" />
              </Box>
            ) : data.length <= 0 ? (
              <Box sx={{ mt: 2, textAlign: "center" }}>No results found</Box>
            ) : (
              data.map((house) => (
                <RenderHouses key={house.house_id} house={house} />
              ))
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
