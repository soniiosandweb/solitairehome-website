interface CommonProps {
  name: string;
  images: string[];
  thumbnailImages?: string[];
  description?: string;
  shortDescription?: string;
  link?: string;
  linkName?: string;
  isFeatured?: boolean;
  offer?: string;
  metaTitle?: string;
  metaDescription?: string;
  isActive?: boolean;
}

export interface CityProps extends CommonProps {
  pageLink?: string;
  pageLinkName?: string;
  properties?: Array<ProperitesProps>;
}

export interface ProperitesProps extends CommonProps {
  displayName?: string;
  address: string;
  area: string;
  type: string[];
  bedrooms?: number;
  bathrooms?: number;
  features?: string[];
  specifications?: SpecificationProps[];
  reraNo?: string;
  descriptionTitle?: string;
  nearByConnectivity?: string[];
  youtubeVideoLink?: string;
  newUI?: boolean;
  logo?: string;
  logoSmall?: string;
  sublink?: string;
  nameDescription?: string;
  aboutUs?: string[];
  aboutUsImage?: string;
  amenities?: string[];
  floorPlanImages?: string[];
  locationImage?: string;
  locationText?: string[];
  gallery?: string[];
  heroBannerImages?: string[];
  primaryColor?: string;
  secondaryColor?: string;
  displayNameMobileFontSize?: string;
}

interface SpecificationProps {
  title: string;
  value: string[];
}

export interface AllPropertiesProps extends ProperitesProps {
  city?: string;
}
