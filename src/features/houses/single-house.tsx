import { useParams } from "react-router-dom";
import { HOUSES } from "../faker/fake-post";

const SingleHouse = () => {
  let { _id } = useParams();

  const house = HOUSES?.find((house) => house._id === _id);

  return (
    <div>
      <p>This is Single House {house?.houseType}</p>
    </div>
  );
};

export default SingleHouse;
