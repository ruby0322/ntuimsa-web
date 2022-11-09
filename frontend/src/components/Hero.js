import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Paper, Typography, Box, Button, Divider } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import useTheme from '../themes/useTheme';
import useStyle from '../styles/useStyle';

const TitleSX = {
	fontFamily: 'Space Mono, monospace',
	fontWeight: 'bold',
	textAlign: 'center'
};

const SloganSX = {
	fontFamily: 'Space Mono, monospace',
	color: '#5C5D60',
	textAlign: 'center',
};

const HeroSX = {
	height: '92vh',
	width: '100vw',
  gap: '2.5rem',
  flexWrap: 'wrap',
};

const ButtonGroupSX = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '1.5rem'
};

const Hero = (props) => {
  const { primary, secondary } = useTheme();
  const { CenterContainer, RowFlex, ColumnFlex, FatSidePadding, FatEndPadding, BlueButtonContained, BlackButtonOutlined } = useStyle();
  return (
    <Box sx={{ ...CenterContainer, ...RowFlex, ...HeroSX}}>
      <Box sx={{ gap: '1rem', ...CenterContainer, ...ColumnFlex}}>
        <Typography variant="h3" sx={TitleSX}>
          台大資管系學會
        </Typography>
        <Typography variant="h7" sx={SloganSX}>
          就。很。Information。Management。
        </Typography>
        <Box sx={{ marginTop: '1rem', ...ButtonGroupSX }}>
          <Button
            sx={{ ...FatSidePadding, ...FatEndPadding, ...BlueButtonContained }}
            size='large'
            variant='contained'
            href='https://www.facebook.com/NTUIMSA/'
            target='_blank'       
            startIcon={<LogoutRoundedIcon />}
          >
            臉書粉絲專頁
          </Button>
          <Button
            sx={{ ...FatSidePadding, ...FatEndPadding, ...BlackButtonOutlined }}
            size='large'
            variant='outlined'
          >
            瞭解更多
          </Button>
        </Box>
      </Box>
      {/* <Box
        sx={{ width: '30rem' }}
        component='img'
        src='https://media.discordapp.net/attachments/893439505988743178/1039396326271619183/undraw_Engineering_team_a7n2.png'
      /> */}
    </Box>
    
  );
};

export default Hero;