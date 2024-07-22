import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "../../components/Typography";
import { homePage } from "../../constants";

// Define the custom styles for the 404 component
const Styled404 = styled("div")(({ theme }) => ({
  width: "100%",
  // height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
}));

// Define the custom styles for the 404 title
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.h1.fontSize,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

// Define the custom styles for the 404 subtitle
const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
}));

// Define the custom styles for the 404 button
const StyledButton = styled(Button)(() => ({
  variant: "contained",
  color: "primary",
  size: "large",
}));

const ErrorPage = () => {
  return (
    // Use the styled 404 component for the 404 page
    <Styled404>
      {/* Use the styled title component to display the 404 title */}
      <StyledTitle variant="h1" component="h1">
        404
      </StyledTitle>
      {/* Use the styled subtitle component to display the 404 subtitle */}
      <StyledSubtitle variant="h4" component="h2">
        Page not found
      </StyledSubtitle>
      {/* Use the styled button component to display the 404 button */}
      <StyledButton href={homePage}>Go Home</StyledButton>
    </Styled404>
  );
};

export default ErrorPage;
