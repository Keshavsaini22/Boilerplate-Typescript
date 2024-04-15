import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';

import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { CardActions, CardContent, CardOverflow } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
interface props { score: number; }
function Score(props: props) {
    const navigate = useNavigate();
    return (
        <Card
            data-resizable
            sx={{
                textAlign: 'center', margin: 'auto',
                alignItems: 'center',
                width: 343,
                // to make the demo resizable
                overflow: 'auto',
                resize: 'horizontal',
                '--icon-size': '100px',
            }}
        >
            <CardOverflow variant="solid" color="warning">
                <AspectRatio
                    variant="outlined"
                    color="warning"
                    ratio="1"
                    sx={{
                        m: 'auto',
                        transform: 'translateY(50%)',
                        borderRadius: '50%',
                        width: 'var(--icon-size)',
                        boxShadow: 'sm',
                        bgcolor: 'background.surface',
                        position: 'relative',
                    }}
                >
                    <div>
                        <BakeryDiningIcon color="warning" sx={{ fontSize: '4rem' }} />
                    </div>
                </AspectRatio>
            </CardOverflow>
            <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                🎊 Congrats 🎊
            </Typography>
            <CardContent sx={{ maxWidth: '40ch' }}>
                Your Score is {props.score}
            </CardContent>
            <CardActions
                orientation="vertical"
                buttonFlex={1}
                sx={{
                    '--Button-radius': '40px',
                    width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                }}
            >
                <Button variant="solid" color="warning" onClick={() => {
                    navigate(-1);
                }}>
                    Play More
                </Button>

            </CardActions>
        </Card>
    )
}

export default Score
