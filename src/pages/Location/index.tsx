import { Outlet, useParams } from "react-router-dom";
import { CityProps } from "../../data/types";
import data from "../../data";
import ErrorPage from "../ErrorPage";
import { LocationTitle } from "../../components/LocationTitle";
import { PropertyList } from "../../components/PropertyList";
import { Helmet } from "react-helmet";
import { brandName, homePage } from "../../constants";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FullWidthLayout } from "../../layout/FullWidthLayout";

export const Location = () => {
  const { location } = useParams();
  const locationName = location
    ?.replace("properties-in-", "")
    .replace("-", " ");
  const locationData = data.filter(
    (item: CityProps) => item.name.toLowerCase() === locationName
  );

  if (locationData.length === 0) {
    return <ErrorPage />;
  }
  const [currentLocation] = locationData;
  return (
    <FullWidthLayout>
      {/* {locationName} {JSON.stringify(currentLocation)} */}
      <Helmet>
        <title>{`Properties in ${currentLocation.name} | ${brandName}`}</title>
        <meta name="title" content={currentLocation.metaTitle} />
        <meta name="description" content={currentLocation.metaDescription} />
      </Helmet>
      <Breadcrumbs
        pages={[
          { value: "Home", link: homePage },
          {
            value: `Properties in ${currentLocation.name}`,
            link: `${homePage}properties-in-${currentLocation.name
              .toLowerCase()
              .replace(new RegExp(" ", "g"), "-")}/`,
          },
        ]}
      />
      <LocationTitle {...currentLocation} />
      <PropertyList {...currentLocation} />
      <Outlet />
    </FullWidthLayout>
  );
};
