import {
  Button,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography as MuiTypography,
  Box,
  SxProps,
  Link,
} from "@mui/material";
import { ProperitesProps } from "../../data/types";
import { StyledBadge, StyledStripe } from "../../utils";
import Carousel from "react-material-ui-carousel";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";
import { setModal, useGlobal } from "../../contexts";
import { homePage, lightColors } from "../../constants";
import { theme } from "../../App";

export const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "30%",
  height: 300,
  margin: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "45%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: 200,
  },
}));

// Define the custom styles for the card content component
export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  top: "69%",
  width: "93%",
  height: "100%",
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  opacity: 0.7,
  transition: "top 0.3s",
  zIndex: 3,
  paddingTop: 4,
  [theme.breakpoints.down("sm")]: {
    top: "65%",
  },
  [theme.breakpoints.down("xs")]: {
    top: "60%",
  },
  "&:hover": {
    top: 0, // Change the top position to 0 on hover
  },
}));

export const PropertyCard = ({
  sx = {},
  ...card
}: ProperitesProps & {
  sx?: SxProps;
}) => {
  const images = card.thumbnailImages || card.images || [];
  const { dispatch } = useGlobal();
  return (
    <StyledCard
      key={card.name}
      sx={{
        ":hover": {
          boxShadow: 20,
        },
        ...sx,
      }}
      onClick={() => (window.location.href = card?.link || homePage)}
    >
      {card.isFeatured && false && (
        <StyledBadge
          badgeContent={<StarIcon />}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          sx={{
            "& .MuiBadge-badge": {
              color: `${
                lightColors[Number((Math.random() * 10).toFixed(0))]
              } !important`,
            },
          }}
        />
      )}
      {card.offer && (
        <StyledStripe
          sx={{
            backgroundColor: "#281CB1",
          }}
        >
          {card.offer}
        </StyledStripe>
      )}
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
        {images.map((item, i) => {
          return (
            <CardMedia
              component="img"
              image={item}
              alt={card.name}
              key={i}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
              loading="lazy"
            />
          );
        })}
      </Carousel>
      <StyledCardContent>
        <Link
          href={card?.link}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <MuiTypography variant="heading3">{card.name}</MuiTypography>
          <MuiTypography
            variant="propertyCardContent"
            sx={{
              display: "inline-flex",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "95%",
            }}
            title={card.address}
          >
            <PlaceIcon sx={{ fontSize: { md: 15, xs: 10 } }} />
            {card.address}
          </MuiTypography>
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: { md: 2, xs: "unset" },
          }}
        >
          <MuiTypography
            variant="propertyCardContent"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              alignSelf: "center",
              pr: 1,
            }}
            title={card.type.join(", ")}
          >
            {`Type: ${card.type.join(", ")}`}
          </MuiTypography>
          {card?.link && card?.linkName && (
            <Button
              onClick={(e: any) => {
                e.stopPropagation();
                dispatch(
                  setModal(true, card.name, card.address, "From Property card")
                );
              }}
              variant="outlined"
              color="secondary"
              size="small"
              sx={{
                py: { xs: "unset" },
                fontWeight: "bold",
                whiteSpace: "nowrap",
                fontSize: 11,
                "&:hover": {
                  color: "white",
                  backgroundColor: theme.palette.secondary.main,
                },
              }}
            >
              {card?.linkName}
            </Button>
          )}
        </Box>
        <MuiTypography variant="propertyCardContent">
          <Link
            href={card?.link}
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            {card.shortDescription || card.description}
          </Link>
        </MuiTypography>
      </StyledCardContent>
    </StyledCard>
  );
};
