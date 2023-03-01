import { Outlet } from "react-router-dom";
import Directory from "../../Components/Directory/Directory.component";

const Home = () => {
  
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
