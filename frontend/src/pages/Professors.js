import ProfessorList from "../components/ProfessorList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../api/interview';
import Interview from "../components/Interview";

const Professors = (props) => {
  const [interviews, setInterviews] = useState([]);
  useEffect(() => {
      (async () => {
          const { data: res } = await axios.get();
          setInterviews(res.interviews);
      })()
  }, [setInterviews]);
	return (
    <Routes>
      <Route path='' element={<ProfessorList />} />
      {
        interviews.map((interview, idx) => (<Route path={`${interview._id}`} element={<Interview>{interview.markdown}</Interview>} />))
      }
    </Routes>
  );
}

export default Professors;
