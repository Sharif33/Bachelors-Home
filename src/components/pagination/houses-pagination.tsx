import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { IHouses } from "../../features/faker/fake-post";
import RenderHouses from "../../features/houses/render-houses";
import { usePagination } from "../../hooks/use-pagination";

export default function HousesPagination({ data }: { data: IHouses[] }) {
  const { page, totalPages, handleChange, paginatedData, loading } =
    usePagination<IHouses>(data);

  return (
    <Stack spacing={3}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <>
          {paginatedData.map((house) => (
            <RenderHouses key={house?.house_id} house={house} />
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Box>
        </>
      )}
    </Stack>
  );
}
