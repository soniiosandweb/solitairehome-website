import * as React from "react";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { Box, keyframes, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { sectionRadius } from "../../constants";

const HeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
}));

const Background = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
  borderRadius: 4,
});

interface HeroLayoutProps {
  sxBackground: SxProps<Theme>;
  banners: string[];
  sx?: SxProps;
  crouselSx?: SxProps & {
    height?: string | { lg?: string; md?: string; sm?: string; xs?: string };
  };
  containerSx?: SxProps;
  ImageSx?: SxProps;
}

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  transition: "transform 0.4s ease-in-out", // Smooth zoom transition
  "&:hover": {
    transform: "scale(1.3)", // Zoom-in effect on hover
  },
});

const zoominout = keyframes`
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

export default function HeroLayout(
  props: React.HTMLAttributes<HTMLDivElement> & HeroLayoutProps
) {
  const {
    sxBackground,
    children,
    banners,
    sx = {},
    crouselSx = {},
    containerSx = {},
    ImageSx = {},
  } = props;
  const { height = "" } = crouselSx;

  return (
    <HeroLayoutRoot sx={{ ...sx, mb: 2 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          ...containerSx,
        }}
      >
        {children}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.5,
            zIndex: -1,
            borderRadius: sectionRadius,
            height,
          }}
        />
        <Carousel
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -2,
            borderRadius: sectionRadius,
            ...crouselSx,
          }}
          duration={4000}
        >
          {banners.map((item, i) => {
            return (
              <Background
                key={i}
                sx={{
                  ...sxBackground,
                  animation: `${zoominout} 20s infinite alternate`,
                }}
              >
                {(item.split(".").pop() || "").toLowerCase().substring(0, 3) !==
                "mp4" ? (
                  <StyledImage
                    src={item}
                    alt={`item${i}`}
                    sx={{
                      ...{
                        width: "100%", // Adjust as needed
                        height: "auto", // Maintain aspect ratio
                        transformOrigin: "bottom",
                      },
                      ...ImageSx,
                    }}
                  />
                ) : (
                  <video
                    autoPlay={true}
                    loop={true}
                    style={{
                      width: "100%", // Adjust as needed
                      height: "auto", // Maintain aspect ratio
                    }}
                  >
                    <source src={item} type="video/mp4" />
                  </video>
                )}
              </Background>
            );
          })}
        </Carousel>
      </Container>
    </HeroLayoutRoot>
  );
}
