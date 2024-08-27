import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import img1 from "../images/img1.png"
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 250, justifyContent: "center", borderRadius:"35px", marginLeft:"auto"}}>

            
               

               <img src={img1} width="100%" />
                <Typography variant="body2" fontSize="13px" fontWeight="bold" color="black" p={2} alignContent="center" justifyContent="center" display="flex">
                Lap of Luxury in India Explore by Luxury brand, themes & top picks
                </Typography>
               
                <Typography variant="body2" fontSize="10px" color="text.secondary" px={2} pb={2} alignContent="center" justifyContent="center" display="flex">
                Lap of Luxury in India Explore by Luxury brand, themes & top picks
                </Typography>
                
           
        </Card>
    );
}


