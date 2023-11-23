import { useState, useCallback, useEffect } from "react";
import {
  Box,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Socials from "../components/socials";
import { CONTACT } from "../constants";

const sideStyles = {
  width: "1rem",
  zIndex: 2,
  position: "fixed",
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  alignItems: "center",
  "&::after": {
    width: ".3rem",
    content: '""',
    display: "block",
    height: "12rem",
    borderRadius: "2rem",
    backgroundColor: "#333",
  },
};

export default function Sides() {
  const theme = useTheme();

  const [tooltipTitle, setTooltipTitle] =
    useState("Click to copy");

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(CONTACT.email);
    setTooltipTitle("copied");
  }, []);

  const timout = setTimeout(
    () => setTooltipTitle("Click to copy"),
    1000
  );

  const onMouseOut = useCallback(() => timout, []);

  useEffect(() => {
    return () => clearTimeout(timout);
  }, []);

  return (
    <Box>
      <Box sx={{ left: "5rem", ...sideStyles }}>
        <Socials direction="column" />
      </Box>
      <Box
        sx={{ right: "5rem", gap: "13rem", ...sideStyles }}
      >
        <Tooltip
          title={
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              {tooltipTitle}
            </Typography>
          }
          arrow
          placement="left"
          followCursor
        >
          <Typography
            variant="body2"
            color="primary"
            onClick={handleCopy}
            onMouseOut={onMouseOut}
            sx={{
              transform: "rotate(90deg)",
              transition: "all .1s ease",
              letterSpacing: 1,
              ":hover": {
                color: "secondary.main",
                cursor: "pointer",
                transform: "rotate(90deg)",
              },
            }}
          >
            {CONTACT.email}
          </Typography>
        </Tooltip>
      </Box>
    </Box>
  );
}
