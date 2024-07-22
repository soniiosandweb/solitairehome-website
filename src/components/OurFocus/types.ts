import { CityProps } from "../../data/types";

export interface ListProps<T> {
  list: T[];
  renderItem: (item: T) => React.ReactNode;
  viewAllLink?: string;
  limit?: number;
}

export interface CityComponentProps extends CityProps {
  zIndex?: number;
  id?: string;
  viewAllLink?: string;
}
