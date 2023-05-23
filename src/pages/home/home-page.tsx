import { Outlet } from "react-router-dom";
import NavBar from "../../components/header/navbar-component";
import useTitles from "../../hooks/use-titles.hook";

const Home = () => {
  useTitles();
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Home;
