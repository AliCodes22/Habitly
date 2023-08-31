import HabitCard from "../../Components/HabitCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

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
    <Container>
      <Grid container spacing={3}>
        {habits.map((habit) => (
          <Grid item key={habit.id} xs={12} md={6} lg={4}>
            <HabitCard habit={habit} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllHabits;
