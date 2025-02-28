import { Routes, Route } from "react-router-dom";
import ElectricPage from "./electricPage";
import Home from "./home";
import GuitarInfoPage from "./guitarInfoPage";
import AcousticPage from "./acousticPage";
import BassPage from "./bassPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/acoustic-guitars" element={<AcousticPage />} />
                <Route path="/electric-guitars" element={<ElectricPage />} />
                <Route path="/bass-guitars" element={<BassPage />} />
                <Route path="/guitar-info/:id" element={<GuitarInfoPage />} />
            </Routes>
        </div>
    );
}

export default App;