import { Stack, Box, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import ProfessorCard from '../components/ProfessorCard';
import axios from '../api/professor';

const ProfessorList = (props) => {
    const [professors, setProfessors] = useState([]);
    useEffect(() => {
        (async () => {
            const { data: res } = await axios.get();
            setProfessors(res.professors);
        })()
    }, []);
	return (
    <Paper
      style={{ height: '92vh', width: '100vw', overflow: 'auto' }}
      sx={{
        padding: '0',
      }}
      elevation={0}
    >
      <Stack
        direction='column'
        spacing={2}
        alignItems='center'
        sx={{ width: '100%', paddingTop: '2rem', paddingBottom: '2rem' }}
      >
        {
          professors.map(
            (post, idx) => (
              <ProfessorCard key={`post-${idx}`} {...post} />
            )
          )
        }
        {
          professors.map(
            (post, idx) => (
              <ProfessorCard key={`post-${idx}`} {...post} />
            )
          )
        }
        {
          professors.map(
            (post, idx) => (
              <ProfessorCard key={`post-${idx}`} {...post} />
            )
          )
        }
      </Stack>
    </Paper>
  );
}

export default ProfessorList;
