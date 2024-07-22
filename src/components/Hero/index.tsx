import Typography from "../Typography";
import HeroLayout from "./HeroLayout";
import BannerImage from "../../assets/banner1.webp";
import BannerImage1 from "../../assets/banner2.webp";
import BannerImage2 from "../../assets/banner3.webp";
import BannerImage3 from "../../assets/banner4.jpg";
import BannerImage4 from "../../assets/banner5.jpg";
import BannerImage5 from "../../assets/banner6.jpg";
import BannerImage6 from "../../assets/banner7.jpg";
// import BannerVideo from "../../assets/bannerVideo.mp4";

const bannersImage = [
  BannerImage,
  BannerImage1,
  BannerImage2,
  BannerImage3,
  BannerImage4,
  BannerImage5,
  BannerImage6,
];
// const banners = [BannerVideo];

export default function ProductHero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
      banners={bannersImage}
      sx={{
        height: { lg: "80vh", md: "40vh", xs: "25vh" },
        alignItems: "center",
      }}
      crouselSx={{ height: { lg: "80vh", md: "40vh", xs: "25vh" } }}
    >
      <img
        style={{ display: "none" }}
        src={BannerImage}
        alt="increase priority"
        loading="lazy"
      />
      <Typography color="inherit" variant="bannerHeading" marked="center">
        Reshaping the Future for Your Dream Home
      </Typography>
      {/* <Typography
        color="inherit"
        // align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography> */}
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button> */}
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </HeroLayout>
  );
}
