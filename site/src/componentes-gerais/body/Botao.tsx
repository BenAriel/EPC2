import React from 'react';
import Button from '@mui/material/Button';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface BotaoProps {
  label: string;
  icon?: React.ComponentType<SvgIconProps>;
  variant: 'text' | 'outlined' | 'contained';
  onClick: () => void;
}

export const Botao: React.FC<BotaoProps> = ({ label, icon: Icon, variant, onClick }) => {
  return (
    <Button variant={variant} startIcon={Icon ? <Icon /> : null} onClick={onClick}>
      {label}
    </Button>
  );
};
