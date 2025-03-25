import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarTailwind from "../components/NavbarTailwind";
import NavbarTraining from "../components/NavbarTraining";
function HomePages() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarTraining/>
      <div className="h-[100vh] flex items-center justify-center bg-sky-500 text-white">
        <h1 className="text-3xl font-bold underline">Section 1</h1>
        <Link to={"/dashboard"}>Go to dashboard</Link>
      </div>
      <div className="h-[100vh] flex items-center justify-center bg-gray-800 text-white">
        <h1 className="text-3xl font-bold underline">Section 2</h1>
      </div>
    </div>
  );
}

export default HomePages;
