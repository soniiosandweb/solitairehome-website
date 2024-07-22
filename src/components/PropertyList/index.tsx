import { Box, CardMedia, Grid, Paper } from "@mui/material";
import { CityProps } from "../../data/types";
import Typography from "../Typography";
import { PropertyCard } from "../PropertyCard";
import { homePage, propertyCardButton, sectionRadius } from "../../constants";
import { AttentionSeeker } from "react-awesome-reveal";

export const PropertyList = (props: CityProps) => {
  const { name, properties = [] } = props;
  return (
    <Paper
      elevation={3}
      sx={{
        pt: "20px !important",
        p: { md: 10, sm: 2 },
        my: 2,
        borderRadius: sectionRadius,
        backgroundColor: "unset",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "common.white",
          opacity: 0.9,
          zIndex: -1,
          borderRadius: sectionRadius,
        }}
      />
      <CardMedia
        component="img"
        image={props.images[0]}
        alt={"img"}
        sx={{
          // animation: `${zoominout} 10s infinite alternate`,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          zIndex: -2,
          borderRadius: sectionRadius,
        }}
        loading="lazy"
      />
      <Typography
        color="inherit"
        variant="h4"
        component={"h5"}
        marked="center"
        sx={{ textAlign: "center" }}
      >
        Our Listing
      </Typography>
      <Grid container spacing={2}>
        {properties.map((item, i) => {
          const propLink = `${homePage}properties-in-${name
            .toLowerCase()
            .replace(" ", "-")}/${item.name
            .toLowerCase()
            .replace(new RegExp(" ", "g"), "-")}`;
          item.link = propLink;
          item.linkName = propertyCardButton;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <AttentionSeeker
                fraction={i < 3 ? 0.2 : 0.5}
                effect="pulse"
                duration={2000}
                triggerOnce
              >
                <PropertyCard {...item} sx={{ width: "unset" }} />
              </AttentionSeeker>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};
