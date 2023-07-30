import { useScroll } from "framer-motion";
import ScrollProgress from "../../components/scroll-progress/scroll-progress";
import HousesView from "../../features/houses/houses-view";

const HousesPage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <HousesView />
    </>
  );
};

export default HousesPage;
