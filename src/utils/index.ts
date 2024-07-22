import { Badge, Box } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import { theme } from "../App";
import { sectionRadius } from "../constants";

export type AttentionSeekerEffect =
  | "bounce"
  | "flash"
  | "headShake"
  | "heartBeat"
  | "jello"
  | "pulse"
  | "rubberBand"
  | "shake"
  | "shakeX"
  | "shakeY"
  | "swing"
  | "tada"
  | "wobble";

// Define the custom styles for the badge component
export const StyledBadge = styled(Badge)(({ theme }) => ({
  position: "absolute",
  top: 10,
  left: 10, // Change the left position to 0
  transform: "translate(-50%, -50%)", // Position the badge at the top left corner of the card
  zIndex: 4,
  "& .MuiBadge-badge": {
    color: theme.palette.common.white,
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
  },
}));

// Define the custom styles for the stripe component
export const StyledStripe = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 0, // Change the right position to 0
  height: theme.spacing(2),
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.common.white,
  opacity: 0.9,
  zIndex: 2,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  padding: 5,
}));

export const generateRandom = (min = 0, max = 100) => {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
};

export const attentionSeekerEffects: AttentionSeekerEffect[] = [
  "bounce",
  "flash",
  "headShake",
  "heartBeat",
  "jello",
  "pulse",
  "rubberBand",
  "shake",
  "shakeX",
  "shakeY",
  "swing",
  "tada",
  "wobble",
];

export const HeadingUnderLine = styled(Box)(() => ({
  height: 5,
  width: 55,
  display: "block",
  margin: `0 auto 0`,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: sectionRadius,
}));

export const zoominout = keyframes`
  0% {
    transform: scale(1,1);
  }
  50% {
    transform: scale(1.2,1.2);
  }
  100% {
    transform: scale(1,1);
  }
`;

export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;
