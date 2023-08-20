import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// @mui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { SentIcon } from "../../assets/icons";
import FormProvider from "../../components/hook-form/form-provider";
import RHFCode from "../../components/hook-form/rhf-code";
import RHFTextField from "../../components/hook-form/rhf-text-field";
import { useBoolean } from "../../hooks/use-boolean";
import routesConfig from "../../routes/routes.config";

// ----------------------------------------------------------------------

type FormValuesProps = {
  code: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function ResetPasswordView() {
  const password = useBoolean();

  const NewPasswordSchema = Yup.object().shape({
    code: Yup.string()
      .min(6, "Code must be at least 6 characters")
      .required("Code is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const defaultValues = {
    code: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(NewPasswordSchema),
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

      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        alignItems="center"
        justifyContent="space-between"
        gap={3}
        width={1}
      >
        <RHFTextField
          name="password"
          label="Password"
          type={password.value ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  {password.value ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label="Confirm New Password"
          type={password.value ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  {password.value ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Update Password
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
      <SentIcon sx={{ height: 80 }} />

      <Stack spacing={1} sx={{ my: 5 }}>
        <Typography fontSize={{ xs: 24, md: 32 }} fontWeight={700}>
          Request sent successfully!
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          We&apos;ve sent a 6-digit confirmation email to your email.
          <br />
          Please enter the code in below box to verify your email.
        </Typography>
      </Stack>
    </Box>
  );

  return (
    <>
      <Toolbar />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {renderHead}

        {renderForm}
      </FormProvider>
    </>
  );
}
