import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import HeroHomes from "../../assets/partners/heroHomes.png";
import Joyville from "../../assets/partners/Joyville.png";
import MarbellaGrand from "../../assets/partners/marbellaGrand.png";
import Motia from "../../assets/partners/motia.jpg";
import Sushma from "../../assets/partners/sushma.png";
import WaveEstate from "../../assets/partners/wave-estate.png";
import { HeadingUnderLine } from "../../utils";

// Define your partner logos (replace with actual image URLs)
const partnerLogos = [
  HeroHomes,
  Joyville,
  MarbellaGrand,
  Motia,
  Sushma,
  WaveEstate,
  // Add more logos here
];

const CarouselContainer = styled("div")({
  overflow: "hidden",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  padding: "16px",
  animation: "scrollLeft 20s linear infinite", // Adjust animation
  placeContent: "center",
});

const LogoImage = styled("img")({
  height: "50px", // Adjust logo height as needed
  margin: "0 16px", // Add spacing between logos
  // animation: 'scrollLeft 20s linear infinite', // Adjust animation duration as desired
});

const OurPartners: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "white", borderRadius: 4, p: 2, mt: 2, mb: 2 }}>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="heading1">
          Our Partners
          <HeadingUnderLine />
        </Typography>
      </Box>
      <CarouselContainer>
        {partnerLogos.map((logo, index) => (
          <LogoImage
            key={index}
            src={logo}
            alt={`Partner Logo ${index}`}
            sx={{
              height: 150,
              aspectRatio: "3/2",
              objectFit: "contain",
              mixBlendMode: "darken",
            }}
          />
        ))}
      </CarouselContainer>
    </Box>
  );
};

export default OurPartners;
