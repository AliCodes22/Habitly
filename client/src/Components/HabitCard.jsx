import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@material-ui/core";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const HabitCard = ({ habit }) => {
  return (
    <div>
      <Card elevation={5}>
        <CardHeader
          action={
            <IconButton
              onClick={() => {
                console.log("delete me");
              }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={habit.name}
          subheader={habit.buildOrQuit}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {habit.reason}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HabitCard;
