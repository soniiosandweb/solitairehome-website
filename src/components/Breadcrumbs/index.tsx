import { Paper, Breadcrumbs as BreadcrumbLink, Link } from "@mui/material";
import Typography from "../Typography";
import { sectionRadius } from "../../constants";

export const Breadcrumbs = ({
  pages,
}: {
  pages: Array<{ value: string; link: string }>;
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: "5px 10px",
        my: 1,
        backgroundColor: "transparent",
        borderRadius: sectionRadius,
      }}
    >
      <BreadcrumbLink aria-label="breadcrumb">
        {pages.map(({ value, link }: any, i: number) =>
          pages.length - 1 === i ? (
            <Typography color="text.primary" key={i} sx={{ margin: "unset" }}>
              {value}
            </Typography>
          ) : (
            <Link underline="hover" color="inherit" href={link} key={i}>
              {value}
            </Link>
          )
        )}
      </BreadcrumbLink>
    </Paper>
  );
};
