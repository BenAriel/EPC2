import * as React from 'react';
import Button from '@mui/material/Button';

interface BotaoProps {
    variant: 'contained' | 'outlined' | 'text';
    label: string;
    onClick: () => void;
}

export const Botao: React.FC<BotaoProps> = (props)=> {
  return (
      <Button variant={props.variant} onClick={props.onClick}>
        {props.label}
      </Button>
  );
}