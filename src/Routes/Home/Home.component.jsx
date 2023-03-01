import { Outlet } from "react-router-dom";
import Directory from "../../Components/directory/Directory.component";

const Home = () => {
  
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
