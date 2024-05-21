import { FaInstagram } from "react-icons/fa";
import TrueLogo from "../../images/trueLogo.svg";


export const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white p-8 flex justify-around items-start">
            <div className="flex flex-col items-center">
            <img src={TrueLogo} alt="EPC Logo" className="h-24 mb-4" />
            </div>
            <div className="h-24 border-l border-gray-50 mx-4"></div>

            <div className="flex flex-col items-center">
                <h3 className="text-xl mb-2">Fale Conosco</h3>
                <div className="flex items-center space-x-2">
                    <FaInstagram className="text-2xl" />
                    <a href="https://www.instagram.com/epc_ufersa" className="text-blue-400 hover:text-blue-500 transition duration-300">@epc_ufersa</a>
                </div>
            </div>
            <div className="h-24 border-l border-gray-50 mx-4"></div>
            <div className="flex flex-col items-center">
                <h3 className="text-xl mb-2">Nos Encontre</h3>
                <p className="text-center">
                    Av. Francisco Mota, 572 - Bairro Costa e Silva, Mossoró RN <br />
                    CEP: 59.625-900, +55 84 3317-8200 <br />
                    CNPJ: 24.529.265/0001-40
                </p>
            </div>
        </footer>
    );
};
