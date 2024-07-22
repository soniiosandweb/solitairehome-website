// SpeedDialButton.tsx

import React from "react";
import { SpeedDial, SxProps, useMediaQuery } from "@mui/material";
// import SpeedDialImage from "../../assets/speeddialImage.gif";
import SpeedDialImage1 from "../../assets/speeddial1.gif";
import { Image } from "../Image";
import { shake } from "../../utils";
import { setModal, useGlobal } from "../../contexts";
import BrandLogo from "../../assets/logo.png";

const SpeedDialButton: React.FC<{ logo?: string; sx?: SxProps }> = ({
  logo = BrandLogo,
  sx = {},
}) => {
  const { dispatch } = useGlobal();
  const isMobile = useMediaQuery("(max-width: 600px)"); // Adjust breakpoint as needed
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      color="primary"
      sx={{
        position: "fixed",
        bottom: 55,
        right: 35,
        animation: `${shake} 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite`,
        "& .MuiButtonBase-root": {
          backgroundColor: "white",
          height: isMobile ? 80 : 120,
          width: isMobile ? 80 : 120,
          "&:hover": {
            backgroundColor: "unset",
          },
        },
        ...sx,
      }} // Adjust position as needed
      icon={
        <Image
          src={SpeedDialImage1}
          alt="phone"
          sx={{
            height: "auto",
            width: isMobile ? 80 : 120,
          }}
          loading="lazy"
        />
      }
      onClick={() =>
        dispatch(setModal(true, "", "", "From floatingButton", logo))
      }
    />
  );
};

export default SpeedDialButton;
