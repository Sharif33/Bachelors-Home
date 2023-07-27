import { Outlet } from "react-router-dom";
// import NavBar from "../../components/header/navbar-component";
import FilterNavbar from "../../features/header/filter-navbar";
import useTitles from "../../hooks/use-titles.hook";

const Home = () => {
  useTitles();
  return (
    <>
      {/* <NavBar /> */}
      <FilterNavbar />

      <Outlet />
    </>
  );
};

export default Home;
