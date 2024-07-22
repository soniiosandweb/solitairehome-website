import { Helmet } from "react-helmet";
import { FullWidthLayout } from "../../layout/FullWidthLayout";
import { brandName, homePage } from "../../constants";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PrivacyPolicy } from "../../components/PrivacyPolicy";

const Privacy = () => {
  return (
    <FullWidthLayout>
      <Helmet>
        <title>{`Privacy Policy | ${brandName}`}</title>
        <meta
          name="title"
          content="Transforming Tomorrow's Homes in Tricity with Solitaire Home Consultant"
        />
        <meta
          name="description"
          content="Discover a new era in Tricity living with Solitaire Home Consultant, pioneering the transformation of tomorrow's homes. Elevate your lifestyle with visionary expertise."
        />
      </Helmet>
      <Breadcrumbs
        pages={[
          { value: "Home", link: homePage },
          {
            value: `Privacy Policy`,
            link: `${homePage}privacy-policy/`,
          },
        ]}
      />
      <PrivacyPolicy />
    </FullWidthLayout>
  );
};

export default Privacy;
