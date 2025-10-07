import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/homeScreen";
import MenuScreen from "./pages/menuScreen";
import ContactScreen from "./pages/contactScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeScreen />} />
        <Route path="/Menu" element={<MenuScreen />} />
        <Route path="/Contacto" element={<ContactScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
