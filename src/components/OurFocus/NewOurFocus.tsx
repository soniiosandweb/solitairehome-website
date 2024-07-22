import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-material-ui-carousel";
// import useMediaQuery from "@mui/material/useMediaQuery";
import OurFocusImage from "../../assets/ourFocus.webp";
import data from "../../data";
import { CityProps, ProperitesProps } from "../../data/types";
import { Link } from "@mui/material";
import { PropertyCard } from "../PropertyCard";
import { CityComponentProps } from "./types";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { homePage, sectionRadius } from "../../constants";
import { HeadingUnderLine, shake, zoominout } from "../../utils";

// Define some custom styles using the theme
const MainSection = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 88,
  height: "55vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 20,
  [theme.breakpoints.down("sm")]: {
    height: "90vh",
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  color: theme.palette.common.white,
  zIndex: 3,
  mt: {md:theme.spacing(2), sm:"unset"},
}));

const CategoryRow = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(4),
  width: "80%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CategoryCard = styled(Card)(({ theme }) => ({
  width: "23%",
  height: "30vh",
  margin: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 3,
  "&:hover": {
    filter: "drop-shadow(10px 7px 10px #cead00)",
  },
  [theme.breakpoints.down("md")]: {
    width: "45%",
    height: "20vh",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: "16vh",
  },
}));

const CategoryCover = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

// const rotate = keyframes`
// to {
//   --angle: 360deg;
// }`;

export const SubSection = styled(Card)(({ theme }) => ({
  height: "75vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "sticky",
  top: "25vh",
  overflow: "hidden",
  backgroundColor: "white",
  marginTop: 2,
  borderRadius: sectionRadius,
  // border: "1px solid",
  // borderImage:
  //   "linear-gradient(var(--angle), red, yellow, lime, aqua, blue, magenta) 1",
  // animation: `20s ${rotate} linear infinite`,
  [theme.breakpoints.down("sm")]: {
    top: "18vh",
    height: "85vh",
  },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
}));

export const ViewAllButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(6),
  borderColor: theme.palette.primary.main,
  textWrap: "nowrap",
  color: "#725b3f",
  border: "solid 2px transperent",
  transition: "border-width 0.6s linear",
  animation: `${shake} 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite`,
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
}));

export const ItemList = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "35vh",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  columnGap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    height: "55vh",
  },
}));

// const ItemCard = styled(Card)(({ theme }) => ({
//   width: "30%",
//   height: "40%",
//   margin: theme.spacing(1),
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "flex-start",
//   alignItems: "center",
//   [theme.breakpoints.down("md")]: {
//     width: "45%",
//     height: "45%",
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: "90%",
//     height: "40%",
//   },
// }));

// const ItemImage = styled(CardMedia)(({ theme }) => ({
//   width: "100%",
//   height: "70%",
// }));

// const ItemContent = styled(CardContent)(({ theme }) => ({
//   width: "100%",
//   height: "30%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
// }));

// const ItemTitle = styled(Typography)(({ theme }) => ({
//   fontWeight: "bold",
//   fontSize: "1.2rem",
//   [theme.breakpoints.down("md")]: {
//     fontSize: "1rem",
//   },
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "0.8rem",
//   },
// }));

// const ItemPrice = styled(Typography)(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   fontSize: "1rem",
//   [theme.breakpoints.down("md")]: {
//     fontSize: "0.8rem",
//   },
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "0.6rem",
//   },
// }));

const MainSectionComponent = () => {
  // Use a media query hook to determine the screen size
  // const matches = useMediaQuery("(max-width:600px)");

  const filteredCities = data.filter(
    (item: CityProps) => (item.properties || []).length > 0
  );
  const allCities = filteredCities.map((item: CityProps) => ({
    ...item,
    pageLink: `${homePage}properties-in-${item.name
      .toLowerCase()
      .replace(" ", "-")}`,
  }));

  return (
    <MainSection>
      <MainTitle variant="heading1">
        Our Focused Location
        <HeadingUnderLine />
      </MainTitle>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "common.black",
          opacity: 0.7,
          zIndex: 2,
          borderRadius: sectionRadius,
        }}
      />
      <Carousel
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundRepeat: "no-repeat",
          borderRadius: sectionRadius,
        }}
        indicators={false}
        navButtonsAlwaysInvisible
      >
        {[OurFocusImage].map((img, i) => (
          <CardMedia
            component="img"
            image={img}
            alt={"img"}
            key={i}
            sx={{
              animation: `${zoominout} 10s infinite alternate`,
              height: { xs: "90vh" },
              width: { md: "100%", xs: "unset" },
              borderRadius: sectionRadius,
            }}
            loading="lazy"
          />
        ))}
      </Carousel>
      <CategoryRow>
        {allCities.map((city, i) => (
          <CategoryCard key={i}>
            <Carousel
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundRepeat: "no-repeat",
              }}
              indicators={false}
              navButtonsAlwaysInvisible
            >
              {[(city.thumbnailImages || city.images)[0]].map((item, i) => (
                <CardMedia
                  key={i}
                  component="img"
                  image={item}
                  alt={`item${i}`}
                  sx={{
                    height: "100%",
                    //animation: `${zoominout} 10s infinite alternate`,
                  }}
                  loading="lazy"
                />
              ))}
            </Carousel>
            <Link href={city.pageLink} sx={{ zIndex: 1 }}>
              <CategoryCover>
                <CategoryTitle variant="heading2">{city.name}</CategoryTitle>
              </CategoryCover>
            </Link>
          </CategoryCard>
        ))}
      </CategoryRow>
    </MainSection>
  );
};

const SubSectionComponent = (props: CityComponentProps) => {
  // Use a media query hook to determine the screen size
  // const matches = useMediaQuery("(max-width:600px)");
  return (
    <SubSection elevation={10}>
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
          height: { xs: "90vh" },
          width: { md: "100%", xs: "unset" },
          zIndex: -2,
          borderRadius: sectionRadius,
        }}
        loading="lazy"
      />
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SubTitle variant="heading1">
          {props.name}
          <HeadingUnderLine />
        </SubTitle>
        <ViewAllButton size="medium" href={props.viewAllLink}>
          View All
          <ReadMoreIcon />
        </ViewAllButton>
      </Box>
      <ItemList>
        {(props.properties || []).slice(0, 3).map((property) => (
          // <ItemCard key={property.name}>
          //   <ItemImage image={property.images[0]} />
          //   <ItemContent>
          //     <ItemTitle>{property.name}</ItemTitle>
          //     <ItemPrice>{property.type}</ItemPrice>
          //   </ItemContent>
          // </ItemCard>
          <PropertyCard {...property} />
        ))}
      </ItemList>
    </SubSection>
  );
};

// Define the main component that renders the main and sub sections
export const NewOurFocus = () => {
  return (
    <Box>
      <MainSectionComponent />
      {/* {categories.map((category) => (
        <SubSectionComponent key={category.id} category={category} />
      ))} */}
      {data.map((city: CityProps) => {
        const properties = (city?.properties || []).map(
          (property: ProperitesProps) => ({
            ...property,
            link: `${homePage}properties-in-${city.name
              .toLowerCase()
              .replace(new RegExp(" ", "g"), "-")}/${property.name
              .toLowerCase()
              .replace(new RegExp(" ", "g"), "-")}`,
            linkName: "Explore",
          })
        );
        if (!(properties.length > 0)) return;
        const pageLink = `${homePage}properties-in-${city.name
          .toLowerCase()
          .replace(" ", "-")}`;
        return (
          <SubSectionComponent
            key={`${city.name.toLowerCase().replace(" ", "")}Card`}
            {...city}
            properties={properties}
            viewAllLink={pageLink}
          />
        );
      })}
    </Box>
  );
};
