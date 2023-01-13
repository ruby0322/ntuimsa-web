import { Card, Typography, Box, Stack, Avatar, Badge, Menu, MenuItem, Button } from '@mui/material';
import useStyle from '../styles/useStyle';
import IconButton from '@mui/material/IconButton';
import useTheme from '../themes/useTheme';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useState } from 'react';

const MiddleSX = {
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '.5rem'
};

const BadgeStyle = {
  padding: '2px 8px',
  color: 'white',
  borderRadius: '8px'
};

const ProfessorCard = ({ name, title, imgUrl, domains, interviews }) => {
  const { primary } = useTheme();
  const { NoShadow } = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Card
        flexItem
        sx={{
          width: '55rem',
          maxWidth: '80%',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          padding: '1.5rem',
          backgroundColor: '#EDF3F6',
          borderRadius: '10px',
        }}
        elevation={0}
      >
      <Avatar alt="Remy Sharp" src={imgUrl} sx={{width: 80, height: 80,}} />
      <Box sx={MiddleSX}> 
        <Typography sx={{fontWeight: 'bold', whiteSpace: 'nowrap'}} variant='h6' component='div'>
          {name} {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '.5rem',
          }}
        >
          { 
            domains.map((domain, idx) => (<div key={imgUrl+idx} style={{backgroundColor: primary, ...BadgeStyle}}>{domain}</div>))
          }
        </Box>
      </Box>
      <Badge color='error' badgeContent={interviews.length} invisible={interviews.length === 0}>
        <IconButton disabled={interviews.length === 0} onClick={handleClick} color='primary' sx={{ width: 64, height: 64 }}>
          <ArrowDropDownCircleIcon />
        </IconButton>
      </Badge>

    </Card>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      elevation={1}
    >
      {
        interviews.map(interview => (
          <MenuItem key={interview.id} onClick={handleClose}>
            <Button color='info' href={`professors/${interview.id}`}>
              {interview.year}
            </Button>
          </MenuItem>
        ))
      }
    </Menu>
  </>
  );
}

export default ProfessorCard;