import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// @mui
import Container from "@mui/material/Container/Container";
import React from "react";
import { useNavigate } from "react-router-dom";
import FormProvider from "../../../components/hook-form/form-provider";
import { useSubmitHousesMutation } from "../../../redux/store/base-api";
import routesConfig from "../../../routes/routes.config";
import RenderHouseForm from "./render-house-form";
// ----------------------------------------------------------------------

export default function SubmitHouseView() {
  const SubmitHouseSchema = Yup.object().shape({
    // house_id: Yup.string(),
    images: Yup.array()
      .of(Yup.string().url("Invalid image URL"))
      .required("Images are required"),
    houseType: Yup.string().required("House Type is required"),
    availableFrom: Yup.string().required("From date is required"),
    houseSize: Yup.number(),
    houseRent: Yup.number()
      .required("House rent is required")
      .positive("House rent must be a positive number"),
    rentNegotiable: Yup.boolean(),
    serviceCharge: Yup.number().positive(
      "Service charge must be a positive number"
    ),
    bedRoom: Yup.number().positive(
      "Number of bedrooms must be a positive number"
    ),
    bathRoom: Yup.number().positive(
      "Number of bathrooms must be a positive number"
    ),
    kitchen: Yup.number().positive(
      "Number of kitchens must be a positive number"
    ),
    balcony: Yup.number().positive(
      "Number of balconies must be a positive number"
    ),
    floor: Yup.number().positive("Floor must be a positive number"),
    floorType: Yup.string(),
    diningSpace: Yup.number().positive(
      "Dining space must be a positive number"
    ),
    attachedWashroom: Yup.boolean(),
    lift: Yup.boolean(),
    parking: Yup.boolean(),
    generator: Yup.boolean(),
    security: Yup.boolean(),
    cctv: Yup.boolean(),
    wifi: Yup.boolean(),
    gasBill: Yup.number().positive("Gas bill must be a positive number"),
    gasFacility: Yup.string(),
    water: Yup.boolean(),
    electricity: Yup.string(),
    electricityBill: Yup.string(),
    description: Yup.string().required("Description is required"),
    contactNo: Yup.string().required("Contact number is required"),
    contactEmail: Yup.string()
      .email("Invalid email format")
      .required("Contact email is required"),
    contactAddress: Yup.string().required("Your address is required"),
    contactName: Yup.string().required("Your name is required"),
    preferredGender: Yup.string().required("Preferred Gender is required"),
    location: Yup.object().shape({
      division: Yup.string().required("Division is required"),
      district: Yup.string().required("District is required"),
      upazilla: Yup.string().required("Upazilla is required"),
      address: Yup.string().required("House address is required"),
      googleMapLink: Yup.string().url("Invalid Google Map link"),
    }),
  });

  type FormData = Yup.InferType<typeof SubmitHouseSchema>;

  const defaultValues = {
    // house_id: "bh-1",
    images: [],
    houseType: "",
    availableFrom: "",
    houseSize: 0,
    houseRent: 0,
    rentNegotiable: false,
    serviceCharge: 0,
    bedRoom: 0,
    bathRoom: 0,
    kitchen: 0,
    balcony: 0,
    floor: 0,
    floorType: "",
    diningSpace: 0,
    attachedWashroom: false,
    lift: false,
    parking: false,
    generator: false,
    security: false,
    cctv: false,
    wifi: false,
    gasBill: 0,
    gasFacility: "",
    water: false,
    electricity: "",
    electricityBill: "",
    description: "",
    contactNo: "",
    contactEmail: "",
    contactAddress: "",
    contactName: "",
    preferredGender: "",
    location: {
      division: "",
      district: "",
      upazilla: "",
      address: "",
      googleMapLink: "",
    },
  };

  const methods = useForm<FormData | any>({
    resolver: yupResolver(SubmitHouseSchema),
    defaultValues,
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [submitHouses, { isSuccess }] = useSubmitHousesMutation();
  const navigate = useNavigate();
  const [acceptTerm, setAcceptTerm] = React.useState(false);

  const handleTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerm(event.target.checked);
  };

  React.useEffect(() => {
    if (isSuccess) {
      navigate(routesConfig.HOUSES);
    }
  }, [isSuccess]);

  const onSubmit = async (data: FormData | any) => {
    try {
      if (acceptTerm) {
        await submitHouses(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="lg">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RenderHouseForm
          register={register}
          isSubmitting={isSubmitting}
          checked={acceptTerm}
          handleChange={handleTerm}
        />
      </FormProvider>
    </Container>
  );
}
