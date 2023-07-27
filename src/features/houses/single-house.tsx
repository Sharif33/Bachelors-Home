import React from "react";
import { useParams } from "react-router-dom";
import CustomCarousel, {
  CarouselItem,
} from "../../components/carousel/custom-caousel";
import { HOUSES } from "../faker/fake-post";

const SingleHouse = () => {
  let { _id } = useParams();

  const house = HOUSES?.find((house) => house._id === _id);
  if (!house || !house.images) {
    return <div>No house found.</div>; // or render a loading state, error message, etc.
  }
  const carouselItems: CarouselItem[] = house.images.map((image) => ({
    image,
  }));
  return (
    <React.Fragment>
      <CustomCarousel items={carouselItems} loop />
    </React.Fragment>
  );
};

export default SingleHouse;
