import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Botao } from '../../../componentes-gerais/body/Botao';

interface MediaCardProps {
    title: string;
    description: string;
    onClick: () => void;
    image: string;
}

export const MediaCard: React.FC<MediaCardProps> = (props) => {
    return (
        <Card sx={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', minHeight: 600 }}>
            <CardMedia
                component="img"
                sx={{ height: 400, objectFit: 'contain' }} // Ajuste de altura e proporção
                image={props.image}
                title={props.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Botao label={props.title} variant="contained" onClick={props.onClick} />
            </CardActions>
        </Card>
    );
};
