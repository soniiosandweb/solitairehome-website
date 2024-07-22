import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { GlobalProvider } from "./contexts";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    bannerHeading: React.CSSProperties;
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    aboutUsBody?: React.CSSProperties;
    propertyCardContent?: React.CSSProperties;
    locationDescription?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bannerHeading?: React.CSSProperties;
    heading1?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading3?: React.CSSProperties;
    aboutUsBody?: React.CSSProperties;
    propertyCardContent?: React.CSSProperties;
    locationDescription?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bannerHeading: true;
    heading1?: true;
    heading2?: true;
    heading3?: true;
    aboutUsBody?: true;
    propertyCardContent?: true;
    locationDescription?: true;
  }
}

export let theme = createTheme({
  palette: { primary: { main: "#d8d2c6" }, secondary: { main: "#CEAD00" } },
});
theme.typography.bannerHeading = {
  fontSize: 60,
  fontFamily: "Roboto, Arial, sans-serif",
  [theme.breakpoints.down("md")]: {
    fontSize: 30,
  },
};
theme.typography.aboutUsBody = {
  fontSize: 18,
  fontFamily: "Roboto, Arial, sans-serif",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
};
theme.typography.heading1 = {
  fontSize: 30,
  fontFamily: "Roboto, Arial, sans-serif",
  [theme.breakpoints.down("md")]: {
    fontSize: 25,
  },
};
theme.typography.heading2 = {
  fontSize: 30,
  fontFamily: "Roboto, Arial, sans-serif",
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    fontSize: 25,
  },
};
theme.typography.heading3 = {
  fontSize: 20,
  fontFamily: "Roboto, Arial, sans-serif",
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    fontSize: 18,
  },
};
theme.typography.propertyCardContent = {
  fontSize: 12,
  fontFamily: "Roboto, Arial, sans-serif",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: 10,
  },
};
theme.typography.locationDescription = {
  fontSize: 15,
  fontFamily: "Roboto, Arial, sans-serif",
  [theme.breakpoints.down("md")]: {
    fontSize: 9,
  },
};
theme = responsiveFontSizes(theme);

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
