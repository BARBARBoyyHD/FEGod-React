import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import DashboardPages from "./pages/DashboardPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/dashboard" element={<DashboardPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
