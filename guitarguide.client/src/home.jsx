import Header from "./components/header";
import { Routes, Route} from "react-router-dom";
import ElectricPage from "./electricPage";

function Home() {
    return (
        <div>
            <Header />
            <h1>Find the perfect guitar for you.</h1>

            <Routes>
                <Route path="/electric-guitars" element={<ElectricPage />} />
            </Routes>
        </div>
    );
}

export default Home;