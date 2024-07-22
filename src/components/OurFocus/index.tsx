import { Box, Link } from "@mui/material";
import HeroLayout from "../Hero/HeroLayout";
import OurFocusImage from "../../assets/ourFocus.webp";
import Typography from "../Typography";
import { List } from "./List";
import { City } from "./City";
import data from "../../data";
import { CityProps, ProperitesProps } from "../../data/types";
import { theme } from "../../theme";
import { homePage } from "../../constants";

export const OurFocus = () => {
  const filteredCities = data.filter(
    (item: CityProps) => (item.properties || []).length > 0
  );
  const allCities = filteredCities.map((item: CityProps) => ({
    ...item,
    pageLink: `${homePage}properties-in-${item.name
      .toLowerCase()
      .replace(" ", "-")}`,
  }));
  const citiesCount = filteredCities.length;
  return (
    <Box
      sx={{
        mt: 2,
        mb: 2,
        height: {
          lg: `${citiesCount * 510 + 500 * Math.ceil(citiesCount / 4)}px`,
        },
        [theme.breakpoints.up("md")]: {
          //width: "80%", // Adjust width for medium screens and above
        },
      }}
    >
      <HeroLayout
        sxBackground={{
          backgroundColor: "#7fc7d9", // Average color of the background image.
          backgroundPosition: "center",
        }}
        banners={[OurFocusImage]}
        sx={{
          position: "sticky",
          top: 0,
          color: "white",
          p: 2,
          pt: 5,
          height: { lg: "73vh", md: "25vh", xs: "20vh" },
        }}
        crouselSx={{ height: { lg: "80vh", md: "25vh", xs: "25vh" } }}
        containerSx={{ p: 1 }}
      >
        <img
          style={{ display: "none" }}
          src={OurFocusImage}
          alt="increase priority"
          loading="lazy"
        />
        <Typography color="inherit" variant="h4" marked="left" pb={2}>
          Our Focused Location
        </Typography>
        {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          Discover the experience
        </Typography> */}
        <List
          list={allCities}
          renderItem={(card) => (
            <HeroLayout
              sxBackground={{
                backgroundColor: "#d8d2c6",
                backgroundPosition: "center",
              }}
              banners={card?.images || []}
              sx={{
                position: "sticky",
                top: 0,
                color: "white",
                p: 2,
                height: { lg: "25%", md: "25%", xs: "50%" },
                width: "25%",
                m: 1,
                alignItems: "center",
              }}
              crouselSx={{
                height: { lg: "40vh", md: "13vh" },
                width: "100%",
              }}
              containerSx={{ alignItems: "center" }}
            >
              <Link
                sx={{ textDecoration: "none", color: "inherit" }}
                href={card.pageLink}
              >
                <Typography color="inherit" variant="h5">
                  {card.name}
                </Typography>
              </Link>
            </HeroLayout>
            // <StyledCard key={card.name}>
            //   {card.isFeatured && (
            //     <StyledBadge
            //       badgeContent={<StarIcon />}
            //       anchorOrigin={{ vertical: "top", horizontal: "left" }}
            //     />
            //   )}
            //   {card.offer && <StyledStripe>{card.offer}</StyledStripe>}
            //   <Carousel
            //     sx={{
            //       position: "absolute",
            //       left: 0,
            //       right: 0,
            //       top: 0,
            //       bottom: 0,
            //       // backgroundSize: "cover",
            //       backgroundRepeat: "no-repeat",
            //       // zIndex: -2,
            //     }}
            //     indicators={false}
            //     navButtonsAlwaysInvisible
            //   >
            //     {(card?.images || []).map((item, i) => {
            //       return (
            //         <CardMedia
            //           component="img"
            //           image={item}
            //           alt={card.name}
            //           key={i}
            //           sx={{ width: "inherit" }}
            //         />
            //       );
            //     })}
            //   </Carousel>

            //   <StyledCardContent>
            //     <Typography variant="h5" component="div">
            //       {card.name}
            //     </Typography>
            //     <Typography variant="body2">{card.description}</Typography>
            //     {card?.link && card?.linkName && (
            //       <Button
            //         href={card?.link}
            //         variant="outlined"
            //         color="warning"
            //         sx={{ mt: 2 }}
            //       >
            //         {card?.linkName}
            //       </Button>
            //     )}
            //   </StyledCardContent>
            // </StyledCard>
          )}
        />
      </HeroLayout>
      {data.map((city: CityProps, index: number) => {
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
        return (
          <City
            name={city.name}
            images={city.images}
            properties={properties}
            zIndex={index}
            id={`${city.name.toLowerCase().replace(" ", "")}Card`}
            viewAllLink={
              city.pageLink ||
              `${homePage}properties-in-${city.name
                .toLowerCase()
                .replace(" ", "-")}`
            }
            key={index}
          />
        );
      })}
    </Box>
  );
};
