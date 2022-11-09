import { Card, Typography, CardActions, CardContent, Button, CardMedia } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import useStyle from '../styles/useStyle';

const Post = ({ title, prof, semester, markdown }) => {
  const { BlueButtonContained } = useStyle();
  return (
    <Card sx={{ width: '15rem', height: '18 rem' }}>
      <CardMedia
        component='img'
        height='140'
        image='https://management.ntu.edu.tw/cm/teacher/10/60920153d0d54.jpg'
        alt='Paella dish'
      />
      <CardContent>
        <Typography sx={{fontWeight: 'bold'}} variant='h6' component='div'>
          台大資管 {prof} 教授
        </Typography>
        <Typography sx={{ mb: 1 }} color='text.secondary'>
          採訪學期 {semester}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          size='small'
          startIcon={<SearchRoundedIcon />}
          fullWidth
          sx={BlueButtonContained}
        >
          認識教授
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;