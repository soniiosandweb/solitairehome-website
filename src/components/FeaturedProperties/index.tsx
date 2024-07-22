import { Box, CardMedia } from "@mui/material";
import { allProperties } from "../../data/allProperties";
import { AllPropertiesProps, ProperitesProps } from "../../data/types";
import { PropertyCard } from "../PropertyCard";
import { ItemList, SubSection, SubTitle } from "../OurFocus/NewOurFocus";
import { HeadingUnderLine, zoominout } from "../../utils";
import { homePage, sectionRadius } from "../../constants";
import Carousel from "react-material-ui-carousel";
import FeaturedPropertyImage from "../../assets/panchkula/pic2.jpg";

// Define a custom FeaturedProperties component
export const FeaturedProperties = () => {
  let featuredProperties = allProperties.filter(
    (property: ProperitesProps) => property.isFeatured
  );
  featuredProperties = featuredProperties.map(
    (property: AllPropertiesProps) => ({
      ...property,
      name: `${property.name} ${property.city}`,
      link: `${homePage}properties-in-${property.city
        ?.toLowerCase()
        .replace(new RegExp(" ", "g"), "-")}/${property.name
        .toLowerCase()
        .replace(new RegExp(" ", "g"), "-")}`,
      linkName: "Explore",
    })
  );
  return (
    <SubSection
      sx={{
        position: "relative",
        top: { md: "unset", xs: "unset" },
        mt: 2,
      }}
      elevation={10}
    >
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
        {[FeaturedPropertyImage].map((img, i) => (
          <CardMedia
            component="img"
            image={img}
            alt={"img"}
            key={i}
            sx={{
              animation: `${zoominout} 20s infinite alternate`,
              height: { xs: "90vh" },
              width: { md: "100%", xs: "unset" },
              borderRadius: sectionRadius,
            }}
            loading="lazy"
          />
        ))}
      </Carousel>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 2,
          color: "white",
        }}
      >
        <SubTitle variant="heading1">
          Featured Properties
          <HeadingUnderLine />
        </SubTitle>
      </Box>
      <ItemList sx={{ zIndex: 2 }}>
        {featuredProperties.slice(0, 3).map((property) => (
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
