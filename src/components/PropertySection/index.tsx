import { keyframes, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-material-ui-carousel";
import Typography from "../Typography";
import { ProperitesProps } from "../../data/types";
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  colors,
  contactNumber,
  contactUsEmail,
  lightColors,
  sectionRadius,
} from "../../constants";
import Viewer from "react-viewer";
import React from "react";
import Phone from "../../assets/phone.png";
import Mail from "../../assets/mail.png";
import { shake } from "../SolitaireAppBar";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { attentionSeekerEffects, generateRandom } from "../../utils";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

// Define the custom styles for the row component
export const StyledRow = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  margin: theme.spacing(2),
}));

// Define the custom styles for the column component
export const StyledColumn = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

// Define the custom styles for the description component
export const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

// Define the custom styles for the image component
export const StyledImage = styled(Card)(() => ({
  width: "100%",
  // height: 300,
}));

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
const shakeFeatureIcon = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

export const PropertySection = (props: ProperitesProps) => {
  const {
    name,
    description,
    area,
    type,
    images = [],
    address,
    reraNo,
    bedrooms,
    bathrooms,
    descriptionTitle,
    specifications,
  } = props;
  const propertyhighlights = [
    { title: "Category", value: "Residential" },
    { title: "Area", value: area },
    { title: "Type", value: type.join(", "), md: 2 },
    { title: "Bedrooms", value: bedrooms },
    { title: "Bathrooms", value: bathrooms },
    // {
    //   title: "RERA No",
    //   value: reraNo?.split(" ").slice(0, 2).join(" "),
    //   md: 2,
    //   fullValue: reraNo,
    // },
  ];
  const [visible, setVisible] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const carouselAnimation: Array<"fade" | "slide"> = ["slide", "fade"];
  return (
    <>
      <Box>
        <Viewer
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          images={images.map((image, i) => ({ src: image, alt: `image${i}` }))}
          activeIndex={activeIndex}
          zIndex={1200}
        />
        <Carousel
          animation={carouselAnimation[generateRandom(0, 2)]}
          interval={generateRandom(3000, 7000)}
          sx={{
            width: "100%",
            borderRadius: 5,
            height: { md: "450px", xs: "240px" },
          }}
          swipe={true}
          indicatorContainerProps={{
            style: {
              zIndex: 1,
              marginTop: "-20px",
              position: "relative",
              color: "white",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              color: "white",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#96754c",
            },
          }}
        >
          {images.map((image, index) => (
            <StyledImage
              key={image}
              sx={{
                height: "inherit",
                animation: `${zoominout} 20s infinite alternate`,
                position: "absolute",
                bottom: 0,
                transform: "translateX(-30%)",
              }}
              onClick={() => {
                setActiveIndex(index);
                setVisible(true);
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
      <Paper
        elevation={3}
        sx={{ padding: 2, my: 2, borderRadius: sectionRadius }}
      >
        <Grid container spacing={2} sx={{ textAlign: "center" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              borderColor: "white",
              borderRadius: 5,
              borderRight: { xs: "none", sm: "2px solid #d4cec2" },
              borderBottom: { xs: "2px solid #d4cec2", md: "none" },
              textAlign: "left",
            }}
          >
            <Typography variant="h6">{name}</Typography>
            <Box sx={{ display: "inline-flex" }}>
              <PlaceIcon />
              <Typography variant="body2">{address}</Typography>
            </Box>
          </Grid>
          {propertyhighlights.map(
            ({ title, value, md = 1, fullValue = value }: any, i: number) => (
              <Grid item xs={12} sm={6} md={md} key={i}>
                <Box display="flex" flexDirection="column">
                  <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                    {title}:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold" }}
                    title={fullValue}
                  >
                    {value}
                  </Typography>
                </Box>
              </Grid>
            )
          )}
          <Grid item xs={12} sm={6} md={1}>
            <Box display="flex" flexDirection="column">
              <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                Contact us:
              </Typography>
              <Box sx={{ display: "inline-flex", justifyContent: "center" }}>
                <Link
                  sx={{
                    display: "inline-flex",
                    whiteSpace: "nowrap",
                    alignSelf: "center",
                    textDecoration: "none",
                    color: "inherit",
                    px: 2,
                  }}
                  href={`mailto:${contactUsEmail}?subject=${`Need more info about ${name}`}&body=%0D%0A%0D%0A${name}%0D%0A${address}%0D%0A${
                    window.location
                  }`}
                >
                  <img
                    src={Mail}
                    alt="phone"
                    style={{ height: "fit-content", paddingRight: 5 }}
                    width={30}
                    loading="lazy"
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      alignSelf: "center",
                      display: "none",
                    }}
                  >
                    {contactUsEmail}
                  </Typography>
                </Link>
                <Link
                  sx={{
                    display: "inline-flex",
                    whiteSpace: "nowrap",
                    alignSelf: "center",
                    textDecoration: "none",
                    color: "inherit",
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
                    }}
                    width={30}
                    loading="lazy"
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      alignSelf: "center",
                      display: "none",
                    }}
                  >
                    {contactNumber}
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{ alignSelf: "center" }}></Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        sx={{ padding: 4, my: 2, borderRadius: sectionRadius }}
      >
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="body1" sx={{ alignSelf: "center" }}>
            Description
          </Typography>
        </Box>
        {descriptionTitle && (
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {descriptionTitle}
          </Typography>
        )}
        <Fade delay={1e3} cascade damping={1e-1} triggerOnce>
          <Typography variant="body1">{description}</Typography>
        </Fade>
        <Fade cascade damping={0.1} triggerOnce>
          <Typography variant="caption" sx={{ fontWeight: "bold" }}>
            RERA No:
          </Typography>
          <Typography
            variant="subtitle1"
            title={reraNo}
            sx={{ fontWeight: "bold" }}
          >
            {reraNo}
          </Typography>
        </Fade>
      </Paper>
      <Paper
        elevation={3}
        sx={{ padding: 4, my: 2, borderRadius: sectionRadius }}
      >
        <Typography variant="body1">Features</Typography>
        {props.features && (
          <StyledRow>
            <StyledColumn>
              <StyledDescription variant="body1" component="p">
                <List style={{ display: "flex", flexWrap: "wrap" }}>
                  {props.features.map((name, index) => (
                    <ListItem key={index} style={{ flex: "1 0 33%" }}>
                      <ListItemIcon>
                        <ArrowCircleRightRoundedIcon
                          sx={{
                            animation: `${shakeFeatureIcon} ${parseFloat(
                              (Math.random() * 10).toString()
                            ).toFixed(0)}s infinite`,
                            color: colors[index % colors.length],
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Fade cascade damping={0.1}>
                            {name}
                          </Fade>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </StyledDescription>
            </StyledColumn>
          </StyledRow>
        )}
      </Paper>
      {specifications && (
        <Paper
          elevation={3}
          sx={{ padding: 4, my: 2, borderRadius: sectionRadius }}
        >
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Specifications
          </Typography>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {specifications.map((item, index) => (
                <AttentionSeeker
                  effect={
                    attentionSeekerEffects[
                      index % attentionSeekerEffects.length
                    ]
                  }
                  fraction={0.5}
                  key={index}
                  triggerOnce
                >
                  <Grid item xs={12} md={6} lg={4} m={1}>
                    <Paper
                      elevation={3}
                      sx={{
                        ":hover": {
                          boxShadow: 20, // theme.shadows[20]
                        },
                      }}
                    >
                      <Box
                        p={"10pt"}
                        sx={{
                          backgroundColor:
                            lightColors[index % lightColors.length],
                        }}
                      >
                        <Typography variant="h6">{item.title}</Typography>
                      </Box>
                      <Box p={"1rem"} pt={0}>
                        <Typography variant="body1">
                          {item.value.map((val) => (
                            <Box pt={1}>{val}</Box>
                          ))}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </AttentionSeeker>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Paper>
      )}
    </>
  );
};
