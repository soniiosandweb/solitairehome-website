import Box from "@mui/material/Box";
import { ListProps } from "./types";
import { Button } from "@mui/material";

export const List = <T extends {}>(props: ListProps<T>) => {
  const { list, viewAllLink, renderItem, limit = 4 } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: { md: "wrap" },
      }}
    >
      {list.slice(0, limit).map((card, i) => (
        <>{renderItem && renderItem({ ...card, key: i })}</>
      ))}
      {viewAllLink && (
        <Button
          variant="contained"
          href={viewAllLink}
          sx={{ textWrap: "nowrap" }}
        >
          View All
        </Button>
      )}
    </Box>
  );
};
