import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ReactElement } from 'react';

interface MostrarProps {
    children: ReactElement<any, any>;
    label: string;
}

export const Mostrar: React.FC<MostrarProps> = ({ children, label }) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ height: 180 }}>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label={label}
            />
            <Box sx={{ display: 'flex' }}>
                <Fade in={checked}>{children}</Fade>
            </Box>
        </Box>
    );
}