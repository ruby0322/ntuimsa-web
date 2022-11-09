import { Paper, Box, Typography } from '@mui/material';
import useStyle from '../styles/useStyle';

const NotFoundBoxSX = {
	width: '100vw',
  minHeight: '92vh',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
};

const NotFound = (props) => {
    const { CenterContainer, Subtitle } = useStyle();
	return (
		<Box sx={{...CenterContainer, ...NotFoundBoxSX}}>
            <Box
                component='img'
                sx={{ width: '30rem', maxWidth: '80%', marginBottom: '3rem'}}
                src='https://media.discordapp.net/attachments/893439505988743178/1039534845036077156/undraw_Page_not_found_re_e9o6.png'
            />
            <Typography sx={Subtitle} variant='body' fontWeight='bold'>
                Not sure what you are looking for 😕
            </Typography>
		</Box>
  );
}

export default NotFound;
