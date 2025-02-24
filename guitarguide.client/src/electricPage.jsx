import Catalog from "./components/catalog";
import images from "./images/imageImports";

function ElectricPage() {
    const electricGuitars =
    [
        { name: "Fender Stratocaster", image: images.strat, price: "$599.99" },
            { name: "Fender Telecaster", image: images.tele, price: "599.99" },
            { name: "Fender Jaguar", image: images.jaguar, price: "459.99" },
            { name: "Fender Jazzmaster", image: images.jazzmaster, price: "1,849.99" },
            { name: "Fender Mustang", image: images.mustang, price: "679.99" },
            { name: "Gibson Les Paul", image: images.lesPaul, price: "2,999.99" },
            { name: "Gibson SG", image: images.sg, price: "1,999.99" },
            { name: "Ibanez RG", image: images.ibanez, price: "429.99" },
            { name: "Jackson King V", image: images.jackson, price: "799.99" },
    ];

    return (
        <div>
            <h1>Electric Guitars</h1>
            <Catalog guitars={electricGuitars} />
        </div>
    );
}

export default ElectricPage;