import "./App.css";
import { Container, Typography } from "@mui/material";
// /api/students
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import StudentsTable from "./students-table";

const getStudents = async () => await axios.get("/api/students");

function App() {
  const {
    isPending,
    error,
    data: res,
  } = useQuery({
    queryKey: ["studentsData"],
    queryFn: getStudents,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(res.data.data);
  return (
    <>
      <Container sx={{py:3}}>
        <StudentsTable data={res.data.data} />
      </Container>
    </>
  );
}

export default App;
