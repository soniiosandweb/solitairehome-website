import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

// Define the interface for the circle data
interface Circle {
  name: string;
  color: string;
  size: number;
  x: string;
  y: string;
  description: string;
}

// Define the custom styles for the section component
const StyledSection = styled("section")(({ theme }) => ({
  width: "100%",
  height: 500,
  backgroundColor: theme.palette.background.default,
  position: "relative",
}));

// Define the custom styles for the circle component
const StyledCircle = styled("div")<{
  color: string;
  size: number;
  x: string;
  y: string;
}>(({ theme, color, size, x, y }) => ({
  width: size,
  height: size,
  borderRadius: "50%",
  backgroundColor: color,
  position: "absolute",
  left: x,
  top: y,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.common.white,
  cursor: "pointer",
}));

// Define the custom styles for the line component
const StyledLine = styled("div")<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}>(({ theme, x1, y1, x2, y2 }) => {
  // Calculate the angle, length, and position of the line
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const x = (x1 + x2) / 2;
  const y = (y1 + y2) / 2;

  return {
    width: length,
    height: 2,
    backgroundColor: theme.palette.grey[400],
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
    transformOrigin: "center center",
  };
});

// Define the sample data for the circles
const circles: Circle[] = [
  {
    name: "React",
    color: "#61dafb",
    size: 200,
    x: "50%",
    y: "50%",
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Material-UI",
    color: "#0081cb",
    size: 100,
    x: "10%",
    y: "10%",
    description: "A popular React UI framework",
  },
  {
    name: "Next.js",
    color: "#000",
    size: 80,
    x: "90%",
    y: "10%",
    description: "The React framework for production",
  },
  {
    name: "Gatsby",
    color: "#663399",
    size: 90,
    x: "10%",
    y: "90%",
    description:
      "A React-based open source framework for creating websites and apps",
  },
  {
    name: "Redux",
    color: "#764abc",
    size: 70,
    x: "90%",
    y: "90%",
    description: "A predictable state container for JavaScript apps",
  },
  {
    name: "GraphQL",
    color: "#e535ab",
    size: 60,
    x: "50%",
    y: "10%",
    description: "A query language for your API",
  },
  {
    name: "TypeScript",
    color: "#3178c6",
    size: 50,
    x: "50%",
    y: "90%",
    description: "A superset of JavaScript that adds types",
  },
  {
    name: "Firebase",
    color: "#ffca28",
    size: 40,
    x: "10%",
    y: "50%",
    description:
      "A platform developed by Google for creating mobile and web applications",
  },
  {
    name: "MongoDB",
    color: "#47a248",
    size: 30,
    x: "90%",
    y: "50%",
    description: "A cross-platform document-oriented database program",
  },
];

export const OurUsp = () => {
  // Define the state for the popover
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [popoverText, setPopoverText] = React.useState<string>("");

  // Define the handler for opening the popover
  const handleOpenPopover = (
    event: React.MouseEvent<HTMLElement>,
    text: string
  ) => {
    setAnchorEl(event.currentTarget);
    setPopoverText(text);
  };

  // Define the handler for closing the popover
  const handleClosePopover = () => {
    setAnchorEl(null);
    setPopoverText("");
  };

  // Define the boolean for the popover open status
  const open = Boolean(anchorEl);

  // Define the function to calculate the coordinates of the outer circles
  const calculateCoordinates = (index: number) => {
    // Get the width and height of the section
    const sectionWidth = 1000;
    const sectionHeight = 500;

    // Get the radius and angle of the outer circle
    const radius =
      Math.min(sectionWidth, sectionHeight) / 2 - circles[index].size / 2;
    const angle = (index - 1) * (Math.PI / 4);

    // Calculate the x and y coordinates of the outer circle
    const x =
      radius * Math.cos(angle) + sectionWidth / 2 - circles[index].size / 2;
    const y =
      radius * Math.sin(angle) + sectionHeight / 2 - circles[index].size / 2;

    // Return the coordinates as percentages
    return {
      x: `${(x / sectionWidth) * 100}%`,
      y: `${(y / sectionHeight) * 100}%`,
    };
  };

  return (
    // Use the styled section component for the circle section
    <StyledSection>
      {circles.map((circle, index) => {
        // Skip the first circle as it is the center circle
        if (index === 0) return null;
        // Get the coordinates of the center circle and the current circle
        const x1 = Number(circles[0].x.slice(0, -1));
        const y1 = Number(circles[0].y.slice(0, -1));
        const { x: x2, y: y2 } = calculateCoordinates(index); // Use the function to calculate the coordinates
        // Use the styled line component to draw a line between the two circles
        return (
          <StyledLine
            key={circle.name}
            x1={x1}
            y1={y1}
            x2={Number(x2.slice(0, -1))}
            y2={Number(y2.slice(0, -1))}
          />
        );
      })}
      {circles.map((circle, index) => {
        // Use the function to calculate the coordinates for the outer circles
        const { x, y } = index === 0 ? circle : calculateCoordinates(index);
        // Use the styled circle component for each circle
        return (
          <StyledCircle
            key={circle.name}
            color={circle.color}
            size={circle.size}
            x={x}
            y={y}
            // Add an event listener for opening the popover
            onClick={(event) => handleOpenPopover(event, circle.description)}
          >
            {circle.name}
          </StyledCircle>
        );
      })}
      {/* Use the popover component to display the description on hover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography>{popoverText}</Typography>
        </Box>
      </Popover>
    </StyledSection>
  );
};
