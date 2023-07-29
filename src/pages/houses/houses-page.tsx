import { useScroll } from "framer-motion";
import ScrollProgress from "../../components/scroll-progress/scroll-progress";
import HousesComponent from "../../features/houses/houses.component";

const HousesPage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <HousesComponent />
    </>
  );
};

export default HousesPage;
