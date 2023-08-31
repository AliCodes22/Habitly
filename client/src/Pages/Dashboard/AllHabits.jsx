import HabitCard from "../../Components/HabitCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const AllHabits = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [habits, setHabits] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchHabits = async () => {
      const res = await fetch(`/api/habits/${userId}`);
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setHabits(data);
      }

      fetchHabits();
    };
  }, [habits]);

  return (
    <div>
      <Grid container>
        <Grid item>
          <Paper>1</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllHabits;
