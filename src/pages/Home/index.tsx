import { Helmet } from "react-helmet";
import ProductHero from "../../components/Hero";
import { AboutUs } from "../../components/AboutUs";
import { brandName } from "../../constants";
import { FeaturedProperties } from "../../components/FeaturedProperties";
import OurPartners from "../../components/Partners";
import { NewOurFocus } from "../../components/OurFocus/NewOurFocus";
import { FullWidthLayout } from "../../layout/FullWidthLayout";
// import { OurUsp } from "../../components/OurUsp";

const Home = () => {
  return (
    <FullWidthLayout>
      <Helmet>
        <title>{brandName}</title>
        <meta
          name="title"
          content="Transforming Tomorrow's Homes in Tricity with Solitaire Home Consultant"
        />
        <meta
          name="description"
          content="Discover a new era in Tricity living with Solitaire Home Consultant, pioneering the transformation of tomorrow's homes. Elevate your lifestyle with visionary expertise."
        />
      </Helmet>
      <ProductHero />
      <AboutUs />
      <NewOurFocus />
      <FeaturedProperties />
      {/* <OurUsp /> */}
      <OurPartners />
    </FullWidthLayout>
  );
};

export default Home;
