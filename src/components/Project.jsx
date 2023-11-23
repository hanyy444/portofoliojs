import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Button,
  Chip,
  Icon,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

export default function Project({ project }) {
  const theme = useTheme();
  const renderedTools = project.tools.map((tool) => (
    <Chip
      key={tool}
      variant="outlined"
      icon={
        <Icon
          component={tool.icon}
          style={{
            width: "2rem",
            height: "2rem",
            fill: theme.palette.secondary.main,
          }}
        />
      }
      label={
        <Typography
          variant="body2"
          fontSize="1.5rem"
          color={theme.palette.primary.main}
        >
          {tool.name}
        </Typography>
      }
      sx={{
        padding: ".5rem",
        border: `1px solid ${theme.palette.secondary.main}`,
      }}
    />
  ));

  return (
    <Card
      sx={{
        width: "80%",
        maxWidth: 600,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: theme.palette.background.default,
        padding: ".5rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link
        href={project.demo}
        target="_blank"
        rel="noopener"
      >
        <CardMedia
          component="img"
          alt={project.name}
          image={project.image}
          sx={{
            // maxHeight: "50rem",
            // height: "35rem",
            objectFit: "cover",
            // '&:hover': {
            //     transform: 'scale(1.1)',
            //     transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
            // }
          }}
        />
      </Link>
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          // component="div"
        >
          {project.name}
        </Typography>
        <Typography variant="body2">
          {project.description}
        </Typography>
      </CardContent>
      <Box
        width="100%"
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(12rem, 1fr))"
        padding="1rem"
        gap="1rem"
        marginBottom="3rem"
      >
        {renderedTools}
      </Box>
      <CardActions
        sx={{
          // gap: 1,
          alignSelf: "flex-end",
          // m: 1,
        }}
      >
        <Button
          size="medium"
          variant="outlined"
          href={project.github}
          rel="noopener"
          target="_blank"
          sx={{ fontSize: "1.5rem" }}
        >
          Github
        </Button>
        <Button
          size="medium"
          variant="contained"
          href={project.demo}
          rel="noopener"
          target="_blank"
          sx={{ fontSize: "1.5rem" }}
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}
