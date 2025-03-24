import Navbar from "./components/Navbar";
import NavbarTailwind from "./components/NavbarTailwind";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarTailwind/>
      <div className="h-[200vh] flex items-center justify-center bg-gray-800 text-white">
        <h1 className="text-3xl font-bold underline">Scroll Down</h1>
      </div>
    </div>
  );
}

export default App;
