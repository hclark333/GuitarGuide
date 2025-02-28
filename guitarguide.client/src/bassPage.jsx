import Catalog from "./components/catalog";
import Header from "./components/header";
import { bassGuitars } from "./data/guitarData";

function BassPage() {
    return (
        <div>
            <Header />
            <Catalog guitars={bassGuitars} />
        </div>
    );
}

export default BassPage;