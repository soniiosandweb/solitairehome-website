import { CityProps } from "../../data/types";
import Typography from "../Typography";
import HeroLayout from "../Hero/HeroLayout";

export const LocationTitle = (props: CityProps) => {
  const { name, description, images = [] } = props;
  return (
    <>
      <HeroLayout
        sxBackground={{
          backgroundColor: "#7fc7d9", // Average color of the background image.
          backgroundPosition: "center",
        }}
        banners={images}
        sx={{
          textAlign: "center",
          height: { md: "40vh", sm: "15vh" },
          alignItems: "center",
          p: 1,
        }}
        crouselSx={{ height: { md: "40vh", sm: "15vh" } }}
        ImageSx={{
          transform: "translateY(-40%)",
        }}
      >
        <Typography
          color="inherit"
          variant="h4"
          marked="center"
          sx={{ textTransform: "uppercase" }}
        >
          {name}
        </Typography>
        <Typography
          color="inherit"
          variant="locationDescription"
          sx={{ m: { md: 4, sm: 2 } }}
        >
          {description}
        </Typography>
      </HeroLayout>
    </>
  );
};
