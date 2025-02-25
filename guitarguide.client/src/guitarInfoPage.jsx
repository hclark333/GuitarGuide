import { useParams } from "react-router-dom";
import GuitarInfo from "./components/guitarInfo";
import Header from "./components/header";
import { allGuitars } from "./data/guitarData";

function GuitarInfoPage() {
    const { id } = useParams();
    const guitar = allGuitars.find((g) => g.id === id);
    return (
        <div>
            <Header />
            <GuitarInfo guitar={guitar} />
        </div>
    );
}

export default GuitarInfoPage;