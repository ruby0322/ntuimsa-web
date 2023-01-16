import { Stack, Box, Paper, FormGroup, FormControlLabel, FormControl, Checkbox, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ProfessorCard from "./ProfessorCard";
import Filter from "./Filter";
import axios from "../api/professor";

const ProfessorList = (props) => {
  const [professors, setProfessors] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [openSorter, setOpenSorter] = useState(false);
  useEffect(() => {
    (async () => {
      const { data: res } = await axios.get();
      setProfessors(res.professors);
    })();
  }, []);

  const handleClickFilter = () => {
    if (openFilter) {
      setOpenFilter(false);
    } else {
      setOpenFilter(true);
      setOpenSorter(false);
    }
  };

  const handleClickSorter = () => {
    if (openSorter) {
      setOpenSorter(false);
    } else {
      setOpenSorter(true);
      setOpenFilter(false);
    }
  };

  return (
    <Paper
      style={{ height: "92vh", width: "100vw", overflow: "auto" }}
      sx={{
        padding: "0",
      }}
      elevation={0}
    >
      <Box sx={{
        padding: "10px",
        display: "flex",
        justifyContent: "end",
        backgroundColor: "#f0f0fc",
      }}>
        <Button variant={ openFilter ? "contained" : "outlined" } onClick={handleClickFilter} >Filter</Button>
        <Button variant={ openSorter ? "contained" : "outlined" } onClick={handleClickSorter} >Sorter</Button>
      </Box>
      {openFilter ? <Filter /> : <></>}
      {openSorter ? <Filter /> : <></>}
      {/* Implement Filter Here */}
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{ width: "100%", paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {professors.map((post, idx) => (
          <ProfessorCard key={`post-${idx}`} {...post} />
        ))}
      </Stack>
    </Paper>
  );
};

export default ProfessorList;
