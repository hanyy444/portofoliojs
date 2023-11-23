import { Box, useTheme } from "@mui/material";

const Spinner = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "100%",
        "&::before": {
          animation: "1.5s linear infinite spinner",
          animationPlayState: "inherit",
          border: "solid 5px #cfd0d1",
          borderBottomColor: theme.palette.primary.main,
          borderRadius: "50%",
          content: '""',
          height: "40px",
          width: "40px",
          position: "absolute",
          transform: "translate3d(-50%, -50%, 0)",
          willChange: "transform",
        },
      }}
      data-testid="spinner"
    />
  );
};

export default Spinner;
