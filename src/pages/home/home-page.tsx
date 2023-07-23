import { Outlet } from "react-router-dom";
import NavBar from "../../components/header/navbar-component";
import useTitles from "../../hooks/use-titles.hook";

const Home = () => {
  useTitles();
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
};

export default Home;
