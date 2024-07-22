import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
  keyframes,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  YouTube as YoutubeIcon,
} from "@mui/icons-material";
import NewWideLogo from "../../assets/NewWideLogo.png";
import NewlogoSmall from "../../assets/logoSmall.png";
import { contactNumber, contactUsEmail, homePage } from "../../constants";
import InstagramIcon from "@mui/icons-material/Instagram";
import Phone from "../../assets/phone.png";
import Mail from "../../assets/mail.png";
import { Image } from "../Image";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import { setModal, useGlobal } from "../../contexts";
import { AppBarProps, NavTypes } from "./types";
import MenuIcon from "@mui/icons-material/Menu";

export const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(5px); }
  50% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

export const SolitaireAppBar = (props: AppBarProps) => {
  const { dispatch } = useGlobal();
  const defaultNav: NavTypes[] = [
    {
      icon: <PhoneCallbackRoundedIcon sx={{ mr: 1 }} />,
      text: "Get a free quote",
      onClick: () => dispatch(setModal(true, "", "", "From topNavigation")),
    },
    {
      icon: (
        <img
          src={Mail}
          alt="phone"
          style={{ height: "fit-content", paddingRight: 5 }}
          width={30}
          loading="lazy"
        />
      ),
      text: contactUsEmail,
      href: `mailto:${contactUsEmail}?subject=${`Need more info`}&body=%0D%0A%0D%0A${
        window.location
      }`,
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
          }}
          width={30}
          loading="lazy"
        />
      ),
      text: contactNumber,
      href: `tel:${contactNumber}`,
    },
    {
      component: (
        <IconButton
          color="inherit"
          size="large"
          edge="end"
          href="https://www.facebook.com/SolitaireHomeConsultant/"
          target="_blank"
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
          }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      ),
    },
    {
      component: (
        <IconButton
          color="inherit"
          size="large"
          edge="end"
          href="https://www.youtube.com/@solitairehomeconsultant8328"
          target="_blank"
          sx={{ px: { md: 2, xs: 1 } }}
        >
          <YoutubeIcon fontSize="large" />
        </IconButton>
      ),
    },
    {
      component: (
        <IconButton
          color="inherit"
          size="large"
          edge="end"
          href="https://www.instagram.com/solitairehomeconsultant1008"
          target="_blank"
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
          }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      ),
    },
  ];
  const {
    backgroundColor = "primary",
    color = "#070706",
    logo = NewWideLogo,
    logoSmall = NewlogoSmall,
    NavLinks = defaultNav,
    enableSmallScreenDrawer = false,
  } = props;

  const container = document.body;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor }} component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button color="inherit" href={homePage}>
            <Image
              src={logo}
              alt="Solitaire Home"
              height={75}
              sx={{
                display: { sm: "block", xs: "none" },
                borderRadius: "unset",
              }}
            />
            <Image
              src={logoSmall}
              alt="Solitaire Home"
              height={75}
              sx={{ display: { sm: "none" }, borderRadius: "unset" }}
            />
          </Button>

          <Box
            sx={{
              display: {
                xs: enableSmallScreenDrawer ? "none" : "flex",
                sm: "flex",
              },
            }}
            color={color}
          >
            {NavLinks.map((navLink, i) => {
              const { component, text, icon, ...linkOptions } = navLink;
              return (
                <React.Fragment key={i}>
                  {component ? (
                    component
                  ) : (
                    <IconButton
                      {...linkOptions}
                      color="inherit"
                      sx={{
                        display: "inline-flex",
                        whiteSpace: "nowrap",
                        alignSelf: "center",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {icon && icon}
                      {text && (
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            alignSelf: "center",
                            display: { md: "block", sm: "none", xs: "none" },
                            fontSize: "1.1rem",
                            inlineSize: "max-content",
                          }}
                        >
                          {text}
                        </Typography>
                      )}
                    </IconButton>
                  )}
                </React.Fragment>
              );
            })}
          </Box>
          {enableSmallScreenDrawer && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                mr: 1,
                display: { sm: "none" },
                backgroundColor: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {enableSmallScreenDrawer && (
        <nav>
          <SwipeableDrawer
            container={container}
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onOpen={() => null}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "80%",
                background:
                  "linear-gradient(135deg,#0000 18.75%,#ffffff 0 31.25%,#0000 0), repeating-linear-gradient(45deg,#ffffff -6.25% 6.25%,#fff6f1 0 18.75%)",
                backgroundSize: "34px 34px",
              },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              <Image
                src={logo}
                alt="Solitaire Home"
                height={75}
                sx={{
                  borderRadius: "unset",
                }}
              />
              <Divider />
              <List>
                {NavLinks.map((navLink, i) => {
                  const { component, text, icon, ...linkOptions } = navLink;
                  return (
                    <ListItem
                      key={i}
                      disablePadding
                      sx={{ borderBottom: "1pt solid grey" }}
                    >
                      {component ? (
                        component
                      ) : (
                        <ListItemButton {...linkOptions}>
                          {icon && <ListItemIcon>{icon}</ListItemIcon>}
                          {text && <ListItemText primary={text} />}
                        </ListItemButton>
                      )}
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </SwipeableDrawer>
        </nav>
      )}
    </>
  );
};
