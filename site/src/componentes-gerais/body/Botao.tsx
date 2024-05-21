import React from 'react';
import Button from '@mui/material/Button';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface BotaoProps {
  label: string;
  icon?: React.ComponentType<SvgIconProps>;
  variant: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  onClick: () => void;
}

export const Botao: React.FC<BotaoProps> = ({ label, icon: Icon, variant, disabled = false, onClick }) => {
  return (
    <Button variant={variant} startIcon={Icon ? <Icon /> : null} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};
