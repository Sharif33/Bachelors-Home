import { useScroll } from "framer-motion";
import ScrollProgress from "../../components/scroll-progress/scroll-progress";
import MessBanner from "../../features/banners/mess-banner";
import useTitles from "../../hooks/use-titles.hook";

const Home = () => {
  useTitles();
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <MessBanner />
    </>
  );
};

export default Home;
