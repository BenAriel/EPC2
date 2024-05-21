import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';

interface MostrarProps {
    children: React.ReactElement<any, any>;
    label: string;
}

export const Mostrar: React.FC<MostrarProps> = ({ children, label }) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box>
            <FormControlLabel className="justify-center"
                control={<Switch checked={checked} onChange={handleChange} />}
                label={label}
            />
            {checked && (
                <Fade in={checked}>
                    <Box sx={{ display: 'flex', mt: 2 }}>
                        {children}
                    </Box>
                </Fade>
            )}
        </Box>
    );
}
