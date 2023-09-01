import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@material-ui/core";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkbox from "@mui/material/Checkbox";

const HabitCard = ({ habit, onDelete }) => {
  return (
    <div>
      <Card
        elevation={5}
        style={{
          background: "#fffafa",
        }}
        variant="outlined"
      >
        <CardHeader
          action={
            <IconButton onClick={onDelete}>
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={habit.name}
          subheader={habit.buildOrQuit}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={200}
            fontSize={20}
          >
            {habit.reason}
          </Typography>
          <Checkbox />
        </CardContent>
      </Card>
    </div>
  );
};

export default HabitCard;
