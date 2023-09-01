import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loading;
