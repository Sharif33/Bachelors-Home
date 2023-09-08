import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormProvider from "../../../components/hook-form/form-provider";
import { useCreateHouseRequestsMutation } from "../../../redux/store/base-api";
import routesConfig from "../../../routes/routes.config";
import RenderRequestHouseForm from "./render-request-houses-form";
// @mui

const CreateHouseRequestView = () => {
  const HouseRequestSchema = Yup.object().shape({
    avatar: Yup.string(),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    profession: Yup.string().required("Profession is required"),
    phone: Yup.string().required("Phone is required"),
    houseType: Yup.string().required("House Type is required"),
    prferrableRent: Yup.number()
      .typeError("Rent must be a number")
      .required("Rent is required")
      .positive("Rent must be a positive number"),
    division: Yup.string().required("Division is required"),
    district: Yup.string().required("District is required"),
    upazilla: Yup.string().required("Upazilla is required"),
    description: Yup.string().required("Description is required"),
    fromDate: Yup.string().required("From date is required"),
  });
  type FormData = Yup.InferType<typeof HouseRequestSchema>;
  const defaultValues: FormData = {
    avatar: "",
    email: "",
    name: "",
    gender: "",
    profession: "",
    phone: "",
    houseType: "",
    prferrableRent: 0,
    division: "",
    district: "",
    upazilla: "",
    description: "",
    fromDate: "",
  };

  const methods = useForm<FormData | any>({
    resolver: yupResolver(HouseRequestSchema),
    defaultValues,
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [createHouseRequests, { isSuccess }] = useCreateHouseRequestsMutation();
  const navigate = useNavigate();
  const [acceptTerm, setAcceptTerm] = React.useState(false);

  React.useEffect(() => {
    if (isSuccess) {
      navigate(routesConfig.HOUSE_REQUESTS);
    }
  }, [isSuccess]);
  const handleTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerm(event.target.checked);
  };

  const onSubmit = async (data: FormData | any) => {
    try {
      if (acceptTerm) {
        await createHouseRequests(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="lg">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RenderRequestHouseForm
          register={register}
          isSubmitting={isSubmitting}
          checked={acceptTerm}
          handleChange={handleTerm}
        />
      </FormProvider>
    </Container>
  );
};

export default CreateHouseRequestView;
