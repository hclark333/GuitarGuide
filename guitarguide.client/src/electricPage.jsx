import Catalog from "./components/catalog";
import Header from "./components/header";
import { electricGuitars } from "./data/guitarData";

function ElectricPage() {
    return (
        <div>
            <Header />
            <Catalog guitars={electricGuitars} />
        </div>
    );
}

export default ElectricPage;