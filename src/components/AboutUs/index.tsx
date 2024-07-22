import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AboutUsImage from "../../assets/AboutUs.webp";
import AboutUsImage1 from "../../assets/AboutUs1.webp";
import { Image } from "../Image";
import { Box } from "@mui/material";

// Define a custom About component
export const AboutUs = () => {
  return (
    <Box sx={{ bgcolor: "white", borderRadius: 4, p: 2, mt: 2, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ padding: "30px !important" }}>
          <Typography variant="heading1">About us</Typography>
          <Typography variant="aboutUsBody" component="p" sx={{ mt: 2 }}>
            We're a real estate company, we're helping clients meet the rising
            demand for housing in Chandigarh and its neighboring areas,
            including Zirakpur, Panchkula, and Mohali. Chandigarh, known for its
            excellent weather, cleanliness, and standard of living, has
            experienced a surge in demand for housing. As the city expands to
            its periphery regions like New Chandigarh, Panchkula, Zirakpur,
            Mohali, and Kharar, the real estate market in these areas has also
            seen significant growth.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageList cols={2}>
            <ImageListItem>
              <Image src={AboutUsImage} alt="AboutUsImage" width={"100%"} />
            </ImageListItem>
            <ImageListItem>
              <Image src={AboutUsImage1} alt="AboutUsImage" width={"100%"} />
            </ImageListItem>
          </ImageList>
        </Grid>
      </Grid>
    </Box>
  );
};
