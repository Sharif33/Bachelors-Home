import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  steps: { label: string; description: JSX.Element }[];
  mess: { name: string; phone: string; address: string; members: string[] };
}

export default function CreateMessStepper({ steps, mess }: Props) {
  const { name, phone, address, members } = mess;
  console.log(mess);

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      navigate("/dashboard/mess");
    } else setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const disabled = () => {
    if (activeStep === 0 && name.length === 0) {
      return true;
    }
    if (activeStep === 1 && phone.length === 0) {
      return true;
    }
    if (activeStep === 2 && address.length === 0) {
      return true;
    }
    if (activeStep === 3 && members.length === 0) {
      return true;
    }
    /*   if (activeStep === 4) {
      return false;
    } */
    return false;
  };

  React.useEffect(() => {
    if (activeStep === maxSteps) {
      setActiveStep(0);
    }
  }, [activeStep, maxSteps]);

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ width: "100%", p: 2 }}>{steps[activeStep].description}</Box>
      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={disabled()}>
            {activeStep === maxSteps - 1 ? "Create" : "Next"}
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
}
