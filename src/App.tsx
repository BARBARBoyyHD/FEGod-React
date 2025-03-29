import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import DashboardPages from "./pages/DashboardPages";
import DashboardTest from "./pages/DashboardTest";
import AlertPages from "./pages/AlertPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/dashboard" element={<DashboardPages />} />
        <Route path="/dashboard/test" element={<DashboardTest />} />
        <Route path="/alert" element={<AlertPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
