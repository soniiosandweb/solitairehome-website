import { Helmet } from "react-helmet";
import { FullWidthLayout } from "../../layout/FullWidthLayout";
import { brandName, homePage } from "../../constants";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { TermsConditions } from "../../components/TermsConditions";

const TermsOfUse = () => {
  return (
    <FullWidthLayout>
      <Helmet>
        <title>{`Terms & Conditions | ${brandName}`}</title>
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
            value: `Terms & Conditions`,
            link: `${homePage}privacy-policy/`,
          },
        ]}
      />
      <TermsConditions />
    </FullWidthLayout>
  );
};

export default TermsOfUse;
