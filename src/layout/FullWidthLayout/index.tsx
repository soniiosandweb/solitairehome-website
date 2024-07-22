import React from "react";
import { Box } from "@mui/material";
import { Footer } from "../../components/Footer";
import { SolitaireAppBar } from "../../components/SolitaireAppBar";

export const FullWidthLayout = ({
  children = <></>,
}: {
  children?: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <>
      <SolitaireAppBar />
      <Box sx={{ mt: 11 }}>{children}</Box>
      <Footer />
    </>
  );
};
