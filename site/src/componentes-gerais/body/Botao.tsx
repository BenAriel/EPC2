import * as React from 'react';
import Button from '@mui/material/Button';
import { SvgIconComponent } from '@mui/icons-material';

interface BotaoProps {
  label?: string;
  icon?: SvgIconComponent;
  variant: 'text' | 'outlined' | 'contained';
  onClick?: () => void;

}

export const Botao: React.FC<BotaoProps> = (props)=> {
  return (
      <Button variant={props.variant} onClick={props.onClick}>
        {props.label}
      </Button>
  );
}