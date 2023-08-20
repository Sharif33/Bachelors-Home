import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// @mui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { EmailInboxIcon } from "../../assets/icons";
import FormProvider from "../../components/hook-form/form-provider";
import RHFCode from "../../components/hook-form/rhf-code";
import RHFTextField from "../../components/hook-form/rhf-text-field";
import routesConfig from "../../routes/routes.config";

// ----------------------------------------------------------------------

type FormValuesProps = {
  code: string;
  email: string;
};

export default function VerifyView() {
  const VerifySchema = Yup.object().shape({
    code: Yup.string()
      .min(6, "Code must be at least 6 characters")
      .required("Code is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const defaultValues = {
    code: "",
    email: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(VerifySchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.info("DATA", data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const renderForm = (
    <Stack
      spacing={3}
      alignItems="center"
      width={{ md: 1 / 2, xs: 1 }}
      mx="auto"
    >
      <RHFTextField
        name="email"
        label="Email"
        placeholder="example@gmail.com"
        InputLabelProps={{ shrink: true }}
      />

      <RHFCode name="code" />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Verify
      </LoadingButton>

      <Typography variant="body2">
        {`Don’t have a code? `}
        <Box
          component={Link}
          to={routesConfig.LOGIN}
          sx={{
            typography: "body2",
            textDecoration: "underline",
            fontWeight: 600,
            color: "primary.main",
          }}
        >
          Resend code
        </Box>
      </Typography>

      <Box
        component={Link}
        to={routesConfig.LOGIN}
        sx={{
          typography: "body2",
          textDecoration: "underline",
          fontWeight: 600,
          color: "black",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <ArrowBackIosIcon width={16} />
        Return to sign in
      </Box>
    </Stack>
  );

  const renderHead = (
    <Box
      width={{ md: 1 / 2, xs: 1 }}
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <EmailInboxIcon sx={{ height: 96 }} />

      <Stack spacing={1} sx={{ my: 5 }}>
        <Typography variant="h3">Please check your email!</Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          We have emailed a 6-digit confirmation code to acb@domain,
          <br />
          please enter the code in below box to verify your email.
        </Typography>
      </Stack>
    </Box>
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}
