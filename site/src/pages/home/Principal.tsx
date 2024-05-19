import { ColumnsGrid } from "../../componentes-gerais/body/Grid";
import { Header } from "../../componentes-gerais/header/Header";
import { InfoCard } from "./components/Infocard";
import { Footer } from "../../componentes-gerais/footer/Footer";

export const Principal = () => {

        
    return (
        <div className="bg-gray-100 min-h-screen pt-16">
            <Header />
            <div className="p-4 mt-20">
                <InfoCard />
            </div>
            <div className="mr-16 ml-16 mt-36">
            <ColumnsGrid />
            </div>
            <div className="mt-52">
            <Footer />
            </div>
        </div>
    );
};
