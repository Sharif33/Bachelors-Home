import MessBanner from "../../features/banners/mess-banner";
import useTitles from "../../hooks/use-titles.hook";

const Home = () => {
  useTitles();
  return (
    <>
      <MessBanner />
    </>
  );
};

export default Home;
