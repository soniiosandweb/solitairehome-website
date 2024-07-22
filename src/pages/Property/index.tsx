import { useParams } from "react-router-dom";
import { CityProps, ProperitesProps } from "../../data/types";
import data from "../../data";
import ErrorPage from "../ErrorPage";
import { Helmet } from "react-helmet";
import { brandName, homePage } from "../../constants";
import { PropertySection } from "../../components/PropertySection";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FullWidthLayout } from "../../layout/FullWidthLayout";
import { NewProperty } from "../../components/NewProperty";

export const Property = () => {
  const { location, property } = useParams();
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
  const propertyName = property?.replace(new RegExp("-", "g"), " ");
  const propertyData = (currentLocation?.properties || []).filter(
    (item: ProperitesProps) => item.name.toLowerCase() === propertyName
  );
  if (propertyData.length === 0) {
    return <ErrorPage />;
  }
  const [currentProperty] = propertyData;
  return currentProperty.newUI ? (
    <NewProperty />
  ) : (
    <FullWidthLayout>
      {/* {locationName} {JSON.stringify(currentLocation)} */}
      <Helmet>
        <title>{`${currentProperty.name} | Properties in ${currentLocation.name} | ${brandName}`}</title>
        <meta name="title" content={currentProperty.metaTitle} />
        <meta name="description" content={currentProperty.metaDescription} />
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
          {
            value: currentProperty.name,
            link: `${homePage}properties-in-${currentLocation.name
              .toLowerCase()
              .replace(new RegExp(" ", "g"), "-")}/${currentProperty.name
              .toLowerCase()
              .replace(new RegExp(" ", "g"), "-")}`,
          },
        ]}
      />
      <PropertySection {...currentProperty} />
    </FullWidthLayout>
  );
};
