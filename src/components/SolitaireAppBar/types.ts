export interface HideOnScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}

export interface AppBarProps {
  backgroundColor?: string;
  color?: string;
  logo?: string;
  logoSmall?: string;
  NavLinks?: NavTypes[];
  enableSmallScreenDrawer?: boolean;
}

export interface NavTypes {
  icon?: JSX.Element;
  text?: string;
  onClick?: () => void;
  href?: string;
  component?: JSX.Element;
}
