import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useContext } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// @mui
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import FormProvider from "../../components/hook-form/form-provider";
import RHFTextField from "../../components/hook-form/rhf-text-field";
import { useBoolean } from "../../hooks/use-boolean";
import routesConfig from "../../routes/routes.config";
// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  name: string;
  phoneNo: string;
};

export default function RegisterView() {
  const password = useBoolean();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    phoneNo: Yup.string().required("Phone no is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    name: "",
    phoneNo: "",
    email: "",
    password: "",
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(async (data: FormValuesProps | any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      createUser(data.email, data.password).then((result: any) => {
        const loggedUser = result.user;
        if (loggedUser) {
          updateUserProfile(data.name).then(() => {
            toast.success("Registration successful");
            reset();
            navigate(routesConfig.LOGIN);
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography fontSize={{ xs: 20, md: 32 }} fontWeight={700}>
        Get started absolutely free
      </Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2"> Already have an account? </Typography>
        <Box
          component={RouterLink}
          to={routesConfig.LOGIN}
          color="primary.main"
          sx={{
            typography: "body2",
            textDecoration: "underline",
            fontWeight: 600,
          }}
        >
          Sign in
        </Box>
      </Stack>
    </Stack>
  );

  const renderTerms = (
    <Typography
      component="div"
      sx={{
        color: "text.secondary",
        mt: 2.5,
        typography: "caption",
        textAlign: "center",
      }}
    >
      {"By signing up, I agree to "}
      <Link underline="always" color="text.primary">
        Terms of Service
      </Link>
      {" and "}
      <Link underline="always" color="text.primary">
        Privacy Policy
      </Link>
      .
    </Typography>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      <RHFTextField name="name" label="Full name" type="text" />
      <RHFTextField name="phoneNo" label="Phone No" type="text" />
      <RHFTextField name="email" label="Email address" type="email" />

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

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Create account
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {renderHead}

      {renderForm}

      {renderTerms}
    </FormProvider>
  );
}
