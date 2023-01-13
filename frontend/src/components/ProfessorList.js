import { Stack, Box, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import ProfessorCard from '../components/ProfessorCard';
// import axios from '../api/professor';
import axios from 'axios';

const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "https://ntuimsa-production.up.railway.app/api"
    : "http://localhost:4000/api";

const instance = axios.create({
  baseURL: API_ROOT,
});

const ProfessorList = (props) => {
    const [professors, setProfessors] = useState([]);
    useEffect(() => {
        (async () => {
          const { data: res } = await instance.get('/professor');
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
      </Stack>
    </Paper>
  );
}

export default ProfessorList;
