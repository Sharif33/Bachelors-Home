import { useScroll } from "framer-motion";
import ScrollProgress from "../../components/scroll-progress/scroll-progress";
import HomeTopBanner from "../../features/banners/home-top-banner";
import MessBanner from "../../features/banners/mess-banner";
import useTitles from "../../hooks/use-titles.hook";

const Home = () => {
  useTitles();
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <HomeTopBanner />
      <MessBanner />
    </>
  );
};

export default Home;
