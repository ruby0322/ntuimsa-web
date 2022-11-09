import { Box } from '@mui/material';
import Hero from '../components/Hero';

const HomeBoxSX = {
	width: '100vw',
  minHeight: '92vh',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
};

const Home = (props) => {
	return (
		<Box sx={HomeBoxSX}>
			<Hero />
		</Box>
  );
}

export default Home;
