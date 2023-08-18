import { Box, Container, Typography } from "@mui/material";
import FaqsForm from "../../features/faqs/faqs-form";
import FaqsHero from "../../features/faqs/faqs-hero";
import FaqsList from "../../features/faqs/faqs-list";

const FAQsPage = () => {
  return (
    <>
      <FaqsHero />

      <Container
        sx={{
          py: 10,
          position: "relative",
        }}
      >
        {/* <FaqsCategory /> */}

        <Typography
          fontSize={{ xs: "24px", md: "32px" }}
          fontWeight="bold"
          sx={{ mb: 5 }}
        >
          Frequently asked questions
        </Typography>

        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <FaqsList />
          <FaqsForm />
        </Box>
      </Container>
    </>
  );
};

export default FAQsPage;
