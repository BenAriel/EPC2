import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MediaCard } from '../../pages/home/components/CardSobreNos';
import Eventos from '../../images/Eventos.jpeg'; // Caminho corrigido
import Equipe from '../../images/equipe.jpeg'; // Caminho corrigido
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

export const ColumnsGrid = () => {
    const navegar = useNavigate();
    const handleEventos = () => {
        navegar('/eventos');
    };
    const handleAlunos = () => {
        navegar('/alunos');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Item>
                        <MediaCard 
                            title="Eventos" 
                            onClick={handleEventos} 
                            description="Acompanhe os eventos do EPC e reveja todos os que já realizamos" 
                            image={Eventos}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item>
                        <MediaCard 
                            title="Participantes" 
                            onClick={handleAlunos} 
                            description="Conheça mais sobre cada participantes desse belo projeto!" 
                            image={Equipe}
                        />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};
