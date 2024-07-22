import { ReactNode, useEffect, useState } from "react";
import { extractColors } from "extract-colors";
import { useParams } from "react-router-dom";
import { ProperitesProps } from "../../data/types";
import ErrorPage from "../../pages/ErrorPage";
import LogoImage from "../../assets/zirakpur/anantaaspire/logo.webp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Alert,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Link as LinkComp,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Snackbar,
  SxProps,
  Typography,
  responsiveFontSizes,
} from "@mui/material";
import { SolitaireAppBar } from "../SolitaireAppBar";
import Carousel from "react-material-ui-carousel";
import { generateRandom, shake, zoominout } from "../../utils";
import {
  StyledColumn,
  StyledDescription,
  StyledImage,
  StyledRow,
} from "../PropertySection";
import { Image } from "../Image";
import ContactUsModal from "../ContactUsModal";
import SpeedDialButton from "../SpeedDialNav";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import { setModal, setModalLogo, setToast, useGlobal } from "../../contexts";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import PlaceIcon from "@mui/icons-material/Place";
import { brandName, contactNumber } from "../../constants";
import Phone from "../../assets/phone.png";
import HomeIcon from "@mui/icons-material/Home";
import HouseIcon from "../../assets/HomeIcon.png";
import MivanIcon from "../../assets/mivanIcon.png";
import DualCoreProjectIcon from "../../assets/DualCoreProjectIcon.png";
import SportsArenaIcon from "../../assets/SportsArenaIcon.png";
import ParkIcon from "../../assets/ParkIcon.png";
import SwimmingPoolIcon from "../../assets/SwimmingPoolIcon.png";
import GymDumbellIcon from "../../assets/gymdumbell.png";
import ChargingStationIcon from "../../assets/ChargingStationIcon.png";
import VerifiedIcon from "../../assets/VerifiedIcon.png";
import ClubHouseIcon from "../../assets/ClubHouseIcon.png";
import MedicalFacilitiesIcon from "../../assets/MedicalFacilities.png";
import CafeteriaIcon from "../../assets/Cafeteria.png";
import CarParkingIcon from "../../assets/carparking.png";
import { Helmet } from "react-helmet";
import Viewer from "react-viewer";
import { AttentionSeeker } from "react-awesome-reveal";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { allProperties } from "../../data/allProperties";

const AmenitiesIcon = [
  {
    name: "Fully Automated Homes",
    icon: <Image src={HouseIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "MIVAN Construction",
    icon: <Image src={MivanIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Dual Core Project",
    icon: (
      <Image src={DualCoreProjectIcon} width={60} sx={{ borderRadius: 0 }} />
    ),
  },
  {
    name: "Sports Arena",
    icon: <Image src={SportsArenaIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Central Park",
    icon: <Image src={ParkIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Roof Top Pool",
    icon: <Image src={SwimmingPoolIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "EV Charging Point",
    icon: (
      <Image src={ChargingStationIcon} width={60} sx={{ borderRadius: 0 }} />
    ),
  },
  {
    name: "3 Tier Security",
    icon: <Image src={VerifiedIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "4 Tier Security",
    icon: <Image src={VerifiedIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "7 Tier Security",
    icon: <Image src={VerifiedIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Club House",
    icon: <Image src={ClubHouseIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "EARTHQUAKE RESISTANT STRUCTURE",
    icon: (
      <Image src={DualCoreProjectIcon} width={60} sx={{ borderRadius: 0 }} />
    ),
  },
  {
    name: "Jogging Track",
    icon: <Image src={SportsArenaIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Swimming Pool",
    icon: <Image src={SwimmingPoolIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Gymnasium",
    icon: <Image src={GymDumbellIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Golf Course",
    icon: <Image src={ClubHouseIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Medical Facilities",
    icon: <Image src={MedicalFacilitiesIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "24x7 Security",
    icon: <Image src={VerifiedIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Cafeteria",
    icon: <Image src={CafeteriaIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Food Court",
    icon: <Image src={CafeteriaIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
  {
    name: "Car Parking",
    icon: <Image src={CarParkingIcon} width={60} sx={{ borderRadius: 0 }} />,
  },
];

export const NewProperty = ({
  staticPropertyName,
}: {
  staticPropertyName?: string;
}) => {
  const { property = staticPropertyName } = useParams();
  const propertyName = property?.replace(new RegExp("-", "g"), " ");
  const propertyData = (allProperties || []).filter(
    (item: ProperitesProps) => item.name.toLowerCase() === propertyName
  );
  if (propertyData.length === 0) {
    return <ErrorPage />;
  }
  const [currentProperty] = propertyData;
  const [primaryColor, setPrimaryColor] = useState(currentProperty.primaryColor || "#d8d2c6");
  const { state, dispatch } = useGlobal();
  useEffect(() => {
    if (!currentProperty.primaryColor) {
      extractColors(currentProperty.logo || LogoImage)
        .then((response) => {
          const color = response.reduce(
            (prev, curr) => {
              if (prev.max < curr.area) {
                return { max: curr.area, color: curr.hex };
              }
              return prev;
            },
            { max: 0, color: "" }
          ).color;
          setPrimaryColor(color);
        })
        .catch(console.error);
    }
    dispatch(setModalLogo(currentProperty.logo));
  }, []);
  document.getElementsByTagName("body")[0].style.margin = "0px";
  const {
    displayName: name = currentProperty.name,
    nameDescription,
    logo,
    type: types,
    aboutUsImage,
    images = [],
    heroBannerImages = [],
    gallery = [],
    amenities = [],
    aboutUs,
    reraNo,
    floorPlanImages = [],
    locationImage = "",
    locationText = [],
    address,
    secondaryColor = `${primaryColor}77`,
    metaTitle,
    metaDescription,
    displayNameMobileFontSize,
  } = currentProperty;

  const allImages = [
    aboutUsImage,
    ...floorPlanImages,
    locationImage,
    ...gallery,
    ...images,
    ...heroBannerImages,
  ];
  let propertyTheme = createTheme({
    palette: {
      primary: { main: primaryColor },
      secondary: { main: secondaryColor },
    },
    typography: {
      body1: { color: "#3D3D3D" },
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    },
  });
  propertyTheme = responsiveFontSizes(propertyTheme);

  const carouselAnimation: Array<"fade" | "slide"> = ["slide", "fade"];

  const handleToastClose = () => dispatch(setToast(false));
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to: any, element: any) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to: any, element: any) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ThemeProvider theme={propertyTheme}>
      <Helmet>
        <title>{`${name} | ${address}`}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        images={allImages.map((image = LogoImage, i) => ({
          src: image,
          alt: `image${i}`,
        }))}
        activeIndex={activeIndex}
        zIndex={1200}
        drag={false}
        onMaskClick={() => console.log("hello")}
      />
      <SolitaireAppBar
        backgroundColor="white"
        color={propertyTheme.palette.primary.main}
        logo={logo}
        logoSmall={logo}
        NavLinks={[
          { text: "Home", onClick: () => scrollToTop() },
          {
            text: "About Us",
            onClick: () =>
              scroller.scrollTo("aboutUsSection", {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -100, // Scrolls to element + 50 pixels down the page
                // ... other options
              }),
          },
          {
            text: "Amenities",
            onClick: () =>
              scroller.scrollTo("amenitiesSection", {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -100, // Scrolls to element + 50 pixels down the page
                // ... other options
              }),
          },
          {
            text: "Floor Plans",
            onClick: () =>
              scroller.scrollTo("floorPlansSection", {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -100, // Scrolls to element + 50 pixels down the page
                // ... other options
              }),
          },
          {
            text: "Gallery",
            onClick: () =>
              scroller.scrollTo("gallerySection", {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -100, // Scrolls to element + 50 pixels down the page
                // ... other options
              }),
          },
          {
            icon: (
              <img
                src={Phone}
                alt="phone"
                style={{
                  height: "fit-content",
                  paddingRight: 5,
                  animation: `${shake} 0.5s infinite`,
                  width: "1.5rem",
                }}
                loading="lazy"
              />
            ),
            text: `${contactNumber}`,
            href: `tel:${contactNumber}`,
          },
        ]}
        enableSmallScreenDrawer={true}
      />
      <Box
        sx={{
          mt: 11,
          position: "relative",
          height: { md: "600px", xs: "240px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            px: 3,
            color: "white",
          }}
          justifyContent={"center"}
        >
          <Typography
            color="inherit"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              fontSize: { sm: "72px", xs: displayNameMobileFontSize || "38px" },
              textWrap: "nowrap",
            }}
          >
            {name}
          </Typography>
          <Typography
            color="inherit"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              fontSize: { sm: "22px", xs: "14px" },
            }}
          >
            {nameDescription}
          </Typography>
          <Box
            sx={{
              width: "313px",
              borderTop: "1px white solid",
              alignSelf: "center",
              margin: "10px",
            }}
          ></Box>
          <Box
            color="inherit"
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {types.map((type: string, i: number) => (
              <Typography
                key={i}
                sx={{
                  marginRight: { sm: "30px", xs: "unset" },
                  display: "inline-flex",
                  color: "white",
                  alignItems: "center",
                  fontSize: 14,
                }}
              >
                <HomeIcon
                  sx={{
                    fontSize: { sm: "18px", xs: 28 },
                    marginRight: { sm: "10px", xs: "2px" },
                  }}
                />
                {`${type} Apartments`}
              </Typography>
            ))}
          </Box>
          <Typography
            color="inherit"
            sx={{
              textAlign: "center",
              marginTop: "10px",
              fontSize: { sm: 18, xs: 14 },
            }}
          >
            {`RERA Approved Projects : ${reraNo}`}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.5,
            zIndex: 2,
            height: { md: "600px", xs: "240px" },
          }}
        />
        <Carousel
          animation={carouselAnimation[generateRandom(0, 2)]}
          interval={5000}
          sx={{
            width: "100%",
            height: { md: "600px", xs: "240px" },
          }}
          swipe={true}
          indicators={false}
        >
          {heroBannerImages.map((image: string, index: number) => (
            <StyledImage
              key={index}
              sx={{
                height: "inherit",
                animation: `${zoominout} 40s infinite alternate`,
                position: "absolute",
                bottom: 0,
                transform: "translateX(-30%)",
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={image}
                alt={name}
                sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
                loading="lazy"
              />
            </StyledImage>
          ))}
        </Carousel>
      </Box>
      {aboutUs && aboutUs.length > 0 && aboutUsImage && (
        <Element name="aboutUsSection">
          <Section title="About us" primaryColor={primaryColor}>
            <Grid container spacing={2} sx={{ p: 4 }}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  padding: { sm: "30px !important", xs: "10px !important" },
                }}
              >
                <ImageList cols={1} sx={{ mt: 1 }}>
                  <ImageListItem>
                    <Image
                      src={aboutUsImage}
                      alt="AboutUsImage"
                      sx={{
                        height: { sm: 450, xs: 200 },
                        border: `4px solid ${primaryColor}`,
                        contain: "size",
                      }}
                      onClick={() => {
                        setActiveIndex(0);
                        setVisible(true);
                      }}
                    />
                  </ImageListItem>
                </ImageList>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  padding: { sm: "32px !important", xs: "10px !important" },
                }}
              >
                {aboutUs?.map((text: string, i: number) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      mt: 2,
                      fontWeight: 300,
                      fontSize: { sm: 22, xs: 18 },
                      display: {
                        sm: "block",
                        xs:
                          aboutUs.length > 1 && aboutUs.length - 1 === i
                            ? "none"
                            : "block",
                      },
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Section>
        </Element>
      )}
      {amenities.length > 0 && (
        <Element name="amenitiesSection">
          <Section
            title="Amenities"
            primaryColor={primaryColor}
            background={`${secondaryColor}`}
          >
            <StyledRow sx={{ margin: "unset" }}>
              <StyledColumn>
                <StyledDescription
                  variant="body1"
                  component="p"
                  sx={{ width: "100%" }}
                >
                  <List
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      px: { sm: 5, xs: 0 },
                    }}
                  >
                    {amenities.slice(0, 9).map((name: string, index: number) => {
                      let AmenityIcon = AmenitiesIcon.filter(
                        (icon) => icon.name.toLowerCase() === name.toLowerCase()
                      );
                      if (AmenityIcon.length === 0)
                        AmenityIcon = [
                          {
                            name: "",
                            icon: <HomeIcon sx={{ fontSize: "38px" }} />,
                          },
                        ];
                      return (
                        <ListItem
                          key={index}
                          sx={{
                            flex: "1 0 28%",
                            flexDirection: "column",
                            background: "white",
                            borderRadius: 5,
                            margin: "34px",
                            p: 4,
                            width: 379,
                            height: 205,
                            maxWidth: "fill-available",
                          }}
                        >
                          <AttentionSeeker
                            fraction={0.5}
                            effect="pulse"
                            duration={2000}
                            triggerOnce
                          >
                            <ListItemIcon>{AmenityIcon[0].icon}</ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontSize: { sm: 25, xs: 20 },
                                    textAlign: "center",
                                  }}
                                >
                                  {name}
                                </Typography>
                              }
                            />
                          </AttentionSeeker>
                        </ListItem>
                      );
                    })}
                  </List>
                </StyledDescription>
              </StyledColumn>
            </StyledRow>
          </Section>
        </Element>
      )}
      {floorPlanImages.length > 0 && (
        <Element name="floorPlansSection">
          <Section title="Floor Plans" primaryColor={primaryColor}>
            <StyledRow sx={{ ml: "unset" }}>
              <StyledColumn>
                <StyledDescription
                  variant="body1"
                  component="p"
                  sx={{ width: "100%" }}
                >
                  <List
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      pl: { md: 5, xs: 0 },
                      pr: 5,
                    }}
                  >
                    {floorPlanImages.slice(0, 3).map((image: string, index: number) => (
                      <ListItem
                        key={index}
                        sx={{
                          flex: "1 0 25%",
                          flexDirection: "column",
                          background: "white",
                          borderRadius: 5,
                          margin: 2,
                          p: 1,
                        }}
                      >
                        <Image
                          src={image}
                          sx={{
                            height: { md: 309, xs: 220 },
                            width: { sm: "100%", xs: "unset" },
                            border: `4px solid ${primaryColor}`,
                          }}
                          onClick={() => {
                            setActiveIndex(index + 1);
                            setVisible(true);
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </StyledDescription>
              </StyledColumn>
            </StyledRow>
          </Section>
        </Element>
      )}
      {locationText.length > 0 && locationImage && (
        <Section
          title="Location"
          background={`${secondaryColor}`}
          primaryColor={primaryColor}
        >
          <Grid container spacing={2} sx={{ p: 4 }}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ padding: { sm: "30px !important", xs: "10px !important" } }}
            >
              <ImageList cols={1} sx={{ mt: 1, overflow: "visible" }}>
                <ImageListItem sx={{ alignItems: "center" }}>
                  <Image
                    src={locationImage}
                    alt="Location Image"
                    sx={{
                      height: { sm: 528, xs: "auto" },
                      width: "100%",
                      border: `4px solid ${primaryColor}`,
                    }}
                    onClick={() => {
                      setActiveIndex(floorPlanImages.length + 1);
                      setVisible(true);
                    }}
                  />
                </ImageListItem>
              </ImageList>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ padding: { sm: "32px !important", xs: "10px !important" } }}
            >
              {locationText?.map((text: string, i: number) => (
                <Typography
                  key={i}
                  variant="body1"
                  component="p"
                  sx={{
                    mt: 2,
                    fontWeight: 300,
                    fontSize: { sm: 22, xs: 18 },
                    display: {
                      sm: "block",
                      xs:
                        locationText.length > 1 && locationText.length - 1 === i
                          ? "none"
                          : "block",
                    },
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Section>
      )}
      {gallery.length > 0 && (
        <Element name="gallerySection">
          <Section
            title="Gallery"
            primaryColor={primaryColor}
            sx={{ px: "unset", pb: "unset" }}
          >
            <StyledRow sx={{ mx: "unset" }}>
              <StyledColumn>
                <List sx={{ display: "flex", flexWrap: "wrap", pb: "unset" }}>
                  {gallery.slice(0, 6).map((image: string, index: number) => (
                    <Image
                      key={index}
                      src={image}
                      sx={{
                        flex: "1 0 31%",
                        flexDirection: "column",
                        height: 309,
                        width: "100%",
                        minWidth: 400,
                        maxWidth: 700,
                        borderRadius: "unset",
                        transitionDuration: "1s",
                        "&:hover": {
                          transform: "scale(1.1)",
                          filter: "none",
                        },
                      }}
                      onClick={() => {
                        setActiveIndex(floorPlanImages.length + 1 + index + 1);
                        setVisible(true);
                      }}
                    />
                  ))}
                </List>
              </StyledColumn>
            </StyledRow>
          </Section>
        </Element>
      )}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
          background: secondaryColor,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* First column for brand logo, address and contact details */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
                justifyContent={"center"}
              >
                <Image
                  src={logo}
                  alt={name}
                  // width="150"
                  height="100"
                  loading="lazy"
                  sx={{
                    filter: `drop-shadow(10px 7px 10px ${primaryColor})`,
                    borderRadius: "unset",
                  }}
                />
              </Box>
            </Grid>
            {/* Second column for social media icon buttons */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" component="h2" gutterBottom>
                Quick Links
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
              >
                <LinkComp onClick={scrollToTop} color="text.secondary">
                  <Typography>Home</Typography>
                </LinkComp>
                <Link
                  to="aboutUsSection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <Typography>About Us</Typography>
                </Link>
                <Link
                  to="amenitiesSection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <Typography>Amenities</Typography>
                </Link>
              </Box>
              <Button
                onClick={() =>
                  dispatch(
                    setModal(true, "", "", "From Download Brochure", logo)
                  )
                }
                color={"primary"}
                variant="contained"
              >
                <CloudDownloadIcon sx={{ mr: 1 }} />
                Download Brochure
              </Button>
            </Grid>
            {/* Third column for important pages of the website */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" component="h2" gutterBottom>
                Contact Us
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
              >
                <Typography
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon />
                  {address}
                </Typography>
                <LinkComp
                  sx={{
                    display: "inline-flex",
                  }}
                  href={`tel:${contactNumber}`}
                >
                  <img
                    src={Phone}
                    alt="phone"
                    style={{
                      height: "fit-content",
                      paddingRight: 5,
                      animation: `${shake} 0.5s infinite`,
                      width: "1.5rem",
                    }}
                    loading="lazy"
                  />
                  <Typography>{contactNumber}</Typography>
                </LinkComp>
              </Box>
              <Button
                onClick={() =>
                  dispatch(
                    setModal(true, "", "", "From BottomNavigation", logo)
                  )
                }
                color={"primary"}
                variant="contained"
              >
                <PhoneCallbackRoundedIcon sx={{ mr: 1 }} />
                Get a free quote
              </Button>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, borderTop: 1, borderColor: "divider" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ py: 2, fontSize: 10 }}
            >
              {`© ${new Date().getFullYear()} ${brandName}. All rights reserved.`}
            </Typography>
            {/* <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ pb: 2 }}
            >
              {disclaimer}
            </Typography> */}
          </Box>
        </Container>
        <ContactUsModal
          open={state.isModalOpen || false}
          onClose={() => dispatch(setModal(false, "", "", "", logo))}
        />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={state.toastOpen}
          onClose={handleToastClose}
          autoHideDuration={4000}
        >
          <Alert
            onClose={handleToastClose}
            variant="filled"
            sx={{
              backgroundColor: "#d8d2c6",
              color: "black",
              fontWeight: "bold",
            }}
          >
            We have received your detail and someone will assist you soon
          </Alert>
        </Snackbar>
        <SpeedDialButton logo={logo} />
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { sm: "none", xs: "block" },
        }}
        elevation={3}
      >
        <BottomNavigation sx={{ background: primaryColor, height: 48 }}>
          <BottomNavigationAction
            label="CALL NOW"
            showLabel
            sx={{
              color: "white",
              display: "inline-block",
              textWrap: "nowrap",
              alignSelf: "center",
              "& .MuiBottomNavigationAction-label": { fontSize: 23 },
              "& .MuiSvgIcon-root": {
                marginRight: 1,
                fontSize: 21,
              },
            }}
            href={`tel:${contactNumber}`}
            icon={<PhoneCallbackRoundedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
};

const Section = ({
  title,
  background = "white",
  primaryColor,
  sx = {},
  children,
}: {
  title: string;
  background?: string;
  primaryColor: string;
  sx?: SxProps;
  children: ReactNode;
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "white",
        fontFamily: "Roboto",
        p: 3,
        background: background,
        ...sx,
      }}
    >
      <Box sx={{ textAlign: "-webkit-center" }}>
        <Typography sx={{ fontSize: "30px" }}>
          {title}
          <Box
            sx={{
              height: 3,
              width: 50,
              display: "block",
              marginTop: "4px",
              background: primaryColor,
            }}
          />
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
