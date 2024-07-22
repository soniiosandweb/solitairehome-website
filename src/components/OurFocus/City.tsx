import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, keyframes } from "@mui/material";
import { CityComponentProps } from "./types";
import { List } from "./List";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PropertyCard } from "../PropertyCard";

const shake = keyframes`
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

// Define the custom styles for the card component
export const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "25%",
  height: 300,
  margin: theme.spacing(1),
  "&:hover": {
    "& .MuiCardContent-root": {
      top: 0, // Change the top position to 0 on hover
    },
  },
}));

// Define the custom styles for the card content component
export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  top: "75%", // Change the top position to 50% by default
  width: "92%",
  height: "100%",
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  opacity: 0.7,
  transition: "top 0.3s", // Change the transition property to top
  zIndex: 3,
}));

// Define a custom City component
export const City = (props: CityComponentProps) => {
  const { name, properties, zIndex, id, viewAllLink } = props;
  return (
    <Box
      sx={{
        position: "sticky",
        top: "21%",
        zIndex: zIndex ? zIndex : "",
        bgcolor: "white",
        borderRadius: 4,
        p: 2,
        mt: 2,
        mb: 2,
      }}
      id={id}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            padding: "20px 30px 10px 30px !important",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {name}
          </Typography>
          <Button
            variant="text"
            href={viewAllLink}
            sx={{
              textWrap: "nowrap",
              color: "#725b3f",
              border: "solid 2px transperent",
              transition: "border-width 0.6s linear",
              animation: `${shake} 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite`,
            }}
            size="medium"
          >
            View All
            <ReadMoreIcon />
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ py: 0 }}>
          <List list={properties || []} renderItem={PropertyCard} limit={3} />
        </Grid>
      </Grid>
    </Box>
  );
};
