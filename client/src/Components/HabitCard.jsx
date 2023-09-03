import { useState } from "react";
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

  const currentProgress = `${completedDays.length}`;

  // Function to handle checkbox click
  const handleCheckboxClick = (day) => {
    if (completedDays.includes(day)) {
      // If the day is already in the completedDays array, remove it
      setCompletedDays(completedDays.filter((d) => d !== day));
    } else if (completedDays.length < frequency) {
      // If the user hasn't reached the frequency count, add the day
      setCompletedDays([...completedDays, day]);
    }

    const progressValue = completedDays.length;
    handleClick(habit.habitId, progressValue);
  };

  // Generate checkboxes for each day of the week
  const checkboxes = [...Array(Number(habit.frequency)).keys()].map((day) => {
    const isChecked = completedDays.includes(day);
    return (
      <FormControlLabel
        key={day}
        control={
          <Checkbox
            checked={isChecked}
            onChange={() => {
              if (isChecked) {
                handleCheckboxClick(day);
              }
            }}
            onClick={handleClick}
            color="secondary" // Use 'primary' or 'secondary' color depending on your design
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
            <p>Progress: {currentProgress}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HabitCard;
