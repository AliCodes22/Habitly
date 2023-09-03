import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const HabitCard = ({ habit, onDelete, handleClick }) => {
  const { name, buildOrQuit, description, frequency, progress } = habit;
  const [completedDays, setCompletedDays] = useState([]);

  const handleCheckboxClick = (day) => {
    // Update the checkbox states in local storage
    const updatedCompletedDays = completedDays.includes(day)
      ? completedDays.filter((d) => d !== day)
      : [...completedDays, day];
    localStorage.setItem(
      `habit_${habit.habitId}_checkboxes`,
      JSON.stringify(updatedCompletedDays)
    );

    // Update the state
    setCompletedDays(updatedCompletedDays);

    // Calculate progress based on the number of checked checkboxes
    const progressValue = updatedCompletedDays.length;
    // Pass both the id and progressValue to the parent component's handleProgress function
    handleClick(habit.habitId, progressValue);
  };

  useEffect(() => {
    const storedCheckboxStates = JSON.parse(
      localStorage.getItem(`habit_${habit.habitId}_checkboxes`)
    );
    if (storedCheckboxStates) {
      setCompletedDays(storedCheckboxStates);
    }
  }, [habit.habitId]);

  // Generate checkboxes for each day of the week
  const checkboxes = [...Array(Number(habit.frequency)).keys()].map((num) => {
    const isChecked = completedDays.includes(num);
    return (
      <FormControlLabel
        key={num}
        control={
          <Checkbox
            checked={isChecked}
            onChange={() => {
              handleCheckboxClick(num);
            }}
            onClick={handleClick}
            color="secondary" // Use 'primary' or 'secondary' color depending on your design
            disabled={isChecked}
          />
        }
      />
    );
  });

  return (
    <div>
      <Card
        elevation={0}
        style={{
          background: "#fffafa",
          borderRadius: "0.25rem",
          border: "2px solid black",
        }}
        variant="outlined"
      >
        <CardHeader
          action={
            <IconButton onClick={onDelete}>
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={name}
          subheader={buildOrQuit}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={200}
            fontSize={20}
          >
            {description}
          </Typography>
          <div className="checkboxes">{checkboxes}</div>
          <div className="progress">
            <p>Progress: {habit.progress}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HabitCard;
