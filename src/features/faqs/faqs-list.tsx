// @mui
import "@fontsource/roboto/700.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

const _faqs = [
  {
    id: 1,
    heading: "What is Bachelors Home?",
    detail:
      "Bachelors-Home is a platform for Bangladeshi bachelors to find their ideal home away from home. And for mess owners to find their ideal tenants.",
  },
  {
    id: 2,
    heading: "What kind of ads can be given at Bachelors Home?",
    detail:
      "Any kind of house rent advertisement such as flat, sublet, room, shared room, Mess, Hostel, Super hostel etc.",
  },
  {
    id: 3,
    heading: "How to advertise rentals at Bachelors Home?",
    detail:
      "Visit Bachelors Home and click Submit Houses and open the free account and fill out the form with detailed information about your house and click submit. Then find appropriate tenants.",
  },
  {
    id: 4,
    heading: "How to request for a house at Bachelors Home?",
    detail:
      "Visit Bachelors Home and click Create House Request and open the free account and fill out the form with detailed information about your house and click submit. Then find your desired house.",
  },
  {
    id: 5,
    heading: "How to booking a house at Bachelors Home?",
    detail:
      "Visit Bachelors Home and click Available Houses and click a house post and it redirected you the house details page. Fill out the form with detailed information and click Send Message or just call the owner.",
  },
  {
    id: 6,
    heading: "How to find the desire house in my area?",
    detail:
      "To find the desire house in your area easily, visit Bachelors Home and click on the search button and easily find your favourite residence place.",
  },
  {
    id: 7,
    heading: "How many photos can be uploaded to a submit house?",
    detail:
      "Many images can be uploaded to an advertisement. However, while uploading the images, it should be kept in mind that the pictures are clear and accurate.",
  },
  {
    id: 8,
    heading: "Why use Bachelors Home?",
    detail:
      "We are here to help you find the perfect place for the bachelor to live all over Bangladesh and give you the best experience.",
  },
];

export default function FaqsList() {
  return (
    <div>
      {_faqs.map((accordion) => (
        <Accordion
          key={accordion.id}
          sx={{
            borderBottom: 1,
            borderColor: "common.white",
            "&:last-child": {
              borderBottom: "none",
            },
            boxShadow: "none",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight={500}>
              {accordion.heading}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
