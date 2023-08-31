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
      try {
        const res = await fetch(`/api/habits/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setHabits(data.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchHabits();
  }, [userId, token]);

  return (
    <div>
      <Grid container>
        {habits.map((habit) => (
          <Grid item key={habit.id}>
            <Paper>{habit.name}</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllHabits;
