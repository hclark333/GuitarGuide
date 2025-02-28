import Catalog from "./components/catalog";
import Header from "./components/header";
import { acousticGuitars } from "./data/guitarData";

function AcousticPage() {
    return (
        <div>
            <Header />
            <Catalog guitars={acousticGuitars} />
        </div>
    );
}

export default AcousticPage;