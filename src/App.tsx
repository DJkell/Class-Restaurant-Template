import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/homeScreen";
import MenuScreen from "./pages/menuScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeScreen />} />
        <Route path="/Menu" element={<MenuScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
