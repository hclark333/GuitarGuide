import { Routes, Route } from "react-router-dom";
import ElectricPage from "./electricPage";
import Home from "./home";
import GuitarInfoPage from "./guitarInfoPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/electric-guitars" element={<ElectricPage />} />
                <Route path="/guitar-info/:id" element={<GuitarInfoPage />} />
            </Routes>
        </div>
    );
}

export default App;