import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// @mui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PasswordIcon from "../../assets/icons/password-icon";
import FormProvider from "../../components/hook-form/form-provider";
import RHFTextField from "../../components/hook-form/rhf-text-field";
import routesConfig from "../../routes/routes.config";

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
};

export default function ForgotPasswordView() {
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
    },
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
    <Stack spacing={3} alignItems="center">
      <RHFTextField name="email" label="Email address" />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Send Request
      </LoadingButton>

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
    <>
      <PasswordIcon sx={{ height: 96 }} />

      <Stack spacing={1} sx={{ my: 5 }}>
        <Typography variant="h3">Forgot your password?</Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Please enter the email address associated with your account and We
          will email you a link to reset your password.
        </Typography>
      </Stack>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}
