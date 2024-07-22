// Import React and MUI components
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Facebook, YouTube, Instagram } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import {
  brandName,
  contactNumber,
  contactUsEmail,
  homePage,
} from "../../constants";
import { CityProps } from "../../data/types";
import data from "../../data";
import ContactUsModal from "../ContactUsModal";
import { setModal, setToast, useGlobal } from "../../contexts";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import SpeedDialButton from "../SpeedDialNav";
import { Image } from "../Image";

// Define the footer component
export const Footer = () => {
  const address = `Sco-1, 1st floor near National Bakers highground road Zirakpur, 140603`;

  // Define the social media icon buttons
  const socialMedia = [
    {
      icon: <Facebook fontSize="large" />,
      link: "https://www.facebook.com/SolitaireHomeConsultant/",
    },
    {
      icon: <YouTube fontSize="large" />,
      link: "https://www.youtube.com/@solitairehomeconsultant8328",
    },
    {
      icon: <Instagram fontSize="large" />,
      link: "https://www.instagram.com/solitairehomeconsultant1008",
    },
  ];

  const filteredCities = data.filter(
    (item: CityProps) => (item.properties || []).length > 0
  );
  // Define the important pages of the website
  const importantPages = filteredCities.map((location: CityProps) => ({
    name: `Properties in ${location.name}`,
    link: `${homePage}properties-in-${location.name
      .toLowerCase()
      .replace(" ", "-")}`,
  }));
  [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "Contact Us", link: "/contact" },
  ];

  // Define the copy right and disclaimer links
  const copyRight = `© ${new Date().getFullYear()} ${brandName}. All rights reserved.`;
  // const disclaimer = "Terms of Use | Privacy Policy | Cookie Policy";
  const disclaimerLinks = [
    {
      text: "Terms of Use",
      link: "/terms-and-conditions",
    },
    {
      text: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      text: "Cookie Policy",
      link: "",
    },
  ];
  const { state, dispatch } = useGlobal();

  const handleToastClose = () => dispatch(setToast(false));

  // Return the JSX element for the footer
  return (
    <Box sx={{ bgcolor: "background.paper", py: 6, borderRadius: 5 }}>
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
                alt={brandName}
                width="150"
                height="100"
                loading="lazy"
                sx={{ filter: "drop-shadow(10px 7px 10px #cead00)" }}
              />
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
              textAlign={"center"}
            >
              <Typography variant="h4" component="h1" sx={{ ml: 2 }}>
                {brandName}
              </Typography>
            </Box>
            <Typography variant="h6" component="h2" gutterBottom>
              Meet us near you
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, textWrap: "wrap" }}
            >
              {address}
            </Typography>
          </Grid>
          {/* Second column for social media icon buttons */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2" gutterBottom>
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                color: "#070706",
              }}
            >
              {socialMedia.map((item, index) => (
                <IconButton
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
            <Box sx={{ py: 5 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Call us: </b>
                <Link
                  href={`tel:${contactNumber}`}
                  color="secondary"
                >{`${contactNumber}`}</Link>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Email us: </b>
                <Link
                  href={`mailto:${contactUsEmail}?subject=${`Need more info`}&body=%0D%0A%0D%0A${
                    window.location
                  }`}
                  color="secondary"
                >{`${contactUsEmail}`}</Link>
              </Typography>
            </Box>
          </Grid>
          {/* Third column for important pages of the website */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {importantPages.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
            <Button
              onClick={() =>
                dispatch(setModal(true, "", "", "From BottomNavigation"))
              }
              color={"secondary"}
            >
              <PhoneCallbackRoundedIcon sx={{ mr: 1 }} />
              Get a free quote
            </Button>
          </Grid>
        </Grid>
        {/* Full width strip below the footer to show copy right and disclaimer links */}
        <Box sx={{ mt: 4, borderTop: 1, borderColor: "divider" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ py: 2 }}
          >
            {copyRight}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ pb: 2 }}
          >
            {/* {disclaimer} */}
            {disclaimerLinks.map((item, index) => (
              (item.link !== '' ? 
                <span key={index}><Link href={item.link} color="text.secondary">{item.text}</Link> | </span>
                :
                <span key={index}>{item.text}</span>
              )
            ))}
          </Typography>
        </Box>
      </Container>
      <ContactUsModal
        open={state.isModalOpen || false}
        onClose={() => dispatch(setModal(false, "", "", ""))}
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
      <SpeedDialButton />
    </Box>
  );
};
