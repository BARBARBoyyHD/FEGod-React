import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import DashboardPages from "./pages/DashboardPages";
import DashboardTest from "./pages/DashboardTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/dashboard" element={<DashboardPages />} />
        <Route path="/dashboard/test" element={<DashboardTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
