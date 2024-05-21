import React from 'react';
import { Typography } from "@mui/material";
import { Botao } from "../../../componentes-gerais/body/Botao";

interface InfoCardProps {
    image: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
    title: string;
    description1: string;
    description2?: string;
    description3?: string;
    data?: string;
    terBotao?: boolean;
    titleBotao?: string;
    onClick?: () => void | null;
}

export const InfoCard: React.FC<InfoCardProps> = (props) => {
    let diferencaDias = 0;
    let mensagemData = '';
    if(props.data && props.data !== "") {
        const dataAtual = new Date();
        const dataEspecifica = new Date(props.data);
        const diferenca = dataEspecifica.getTime() - dataAtual.getTime();
        diferencaDias = Math.ceil(diferenca / (1000 * 3600 * 24));
        mensagemData = diferencaDias > 0 ? `${diferencaDias} dias até o evento` : `O evento já aconteceu`;
    }

    const ImageComponent = props.image as React.ComponentType<React.SVGProps<SVGSVGElement>>;

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 h-auto mx-auto mt-8">
            {typeof props.image === 'string' ? <img src={props.image} alt={props.title} className="h-32 w-32 mx-auto mb-4" /> : <ImageComponent className="h-32 w-32 mx-auto mb-4" />}
            <h2 className="text-4xl font-bold text-center mb-4">{props.title}</h2>
            {props.data && (
                <div>
                    <Typography variant="h6" align="center" gutterBottom sx={{ color: diferencaDias > 0 ? 'green' : 'red' }}>
                        Data: {props.data} ({mensagemData})
                    </Typography>
                </div>
            )}
            <p className="text-center text-gray-700 text-lg">
                {props.description1}
            </p>
            {props.description2 && (
                <p className="text-center text-gray-700 text-lg mt-4">
                    {props.description2}
                </p>
            )}
            {props.description3 && (
                <p className="text-center text-gray-700 text-lg mt-4">
                    {props.description3}
                </p>
            )}
            {props.terBotao && (
                 <p className="text-center text-lg mt-4">
                <Botao
                    label={props.titleBotao || "Botão"}
                    variant="contained"
                    onClick={props.onClick || (() => {})}
                    disabled={diferencaDias < 0}
                />
                </p>
            )}
        </div>
    );
};
