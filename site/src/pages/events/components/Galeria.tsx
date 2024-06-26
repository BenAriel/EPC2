import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

interface Imagem {
  imagem: string;
  titulo: string;
  descricao: string;
}

interface GaleriaProps {
  imagens: Imagem[];
}

export const Galeria: React.FC<GaleriaProps> = ({ imagens }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-4/5 h-96 overflow-y-auto">
        <ImageList
          cols={3}
          gap={20}
          className="flex flex-wrap justify-center"
        >
          {imagens.map((image) => (
            <ImageListItem key={image.imagem} className="relative">
              <img
                srcSet={`${image.imagem}?w=248&h=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.imagem}?w=248&h=248&fit=crop&auto=format`}
                alt={image.titulo}
                loading="lazy"
                className="object-cover w-full h-full"
                style={{ aspectRatio: '1 / 1' }}
              />
              <ImageListItemBar
                title={image.titulo}
                subtitle={<span>{image.descricao}</span>}
                position="below"
                className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 text-zinc-900 p-2"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};
