import MohaliImage from "../assets/mohali/mohali.webp";
import MohaliImageT from "../assets/mohali/mohaliCard.webp";
import ZirakpurImage from "../assets/zirakpur/zirakpur.webp";
import NewChandigarhImage from "../assets/newchandigarh/newchandigarh.jpeg";
import NewChandigarhImageT from "../assets/newchandigarh/newchandigarhCard.webp";
import PanchkulaImage from "../assets/panchkula/pic1.webp";
import PanchkulaImage1 from "../assets/panchkula/pic2.jpg";
import PanchkulaImageT from "../assets/panchkula/pic1Card.webp";
import PanchkulaImageT1 from "../assets/panchkula/pic2Card.jpg";
import { CityProps, ProperitesProps } from "./types";
import { mohaliProperties } from "./mohaliProperties";
import { zirakpurProperties } from "./zirakpurProperties";
import { newChandigarhProperties } from "./newChandigarhProperties";
import { panchkulaProperties } from "./panchkulaProperties";

const data: CityProps[] = [
  {
    name: "Mohali",
    thumbnailImages: [MohaliImageT],
    images: [MohaliImage],
    description:
      "Mohali, officially known as Sahibzada Ajit Singh Nagar, is a planned city in the Mohali district in Punjab, India, which is an administrative and a commercial hub lying south-west of Chandigarh.",
    link: "#mohaliCard",
    linkName: "View",
    pageLink: "/properties-in-mohali",
    properties: mohaliProperties.filter(
      (property: ProperitesProps) => property.isActive ?? true
    ),
    metaTitle:
      "Explore Exceptional Properties in Mohali for Your Dream Home | Solitaire Home Consultant",
    metaDescription:
      "Discover your dream home in Mohali with Solitaire Home Consultant with curated collection of exceptional properties, meticulously designed for luxury living. Find the perfect blend of comfort and style.",
  },
  {
    name: "Zirakpur",
    images: [ZirakpurImage],
    description:
      "Zirakpur is a satellite town, in Mohali District, Punjab, neighboring Mohali, Chandigarh in India. It is set on the foothills of Shivalik hills. It is part of the tehsil Dera Bassi. It is the gateway to Chandigarh from D.e/assetslhi.",
    link: "#zirakpurCard",
    linkName: "View",
    pageLink: "/properties-in-zirakpur",
    properties: zirakpurProperties.filter(
      (property: ProperitesProps) => property.isActive ?? true
    ),
    metaTitle:
      "Discover Properties in Zirakpur: Gateway to Luxury Living | Solitaire Home Consultant",
    metaDescription:
      "Explore a curated collection of exquisite properties in Zirakpur with Solitaire Home Consultant. Your gateway to luxury living awaits. Find your dream home with us today.",
  },
  {
    name: "New Chandigarh",
    thumbnailImages: [NewChandigarhImageT],
    images: [NewChandigarhImage],
    description:
      "New Chandigarh is a new planned smart city near Mullanpur in the Mohali district (SAS Nagar) in Punjab, India. It has been designed as an extension of the city of Chandigarh. It is developed by the Greater Mohali Area Development Authority.",
    link: "#newchandigarhCard",
    linkName: "View",
    pageLink: "/properties-in-new-chandigarh",
    properties: newChandigarhProperties.filter(
      (property: ProperitesProps) => property.isActive ?? true
    ),
    metaTitle:
      "Explore Luxurious Properties in New Chandigarh | Solitaire Home Consultant",
    metaDescription:
      "Discover opulent living in New Chandigarh with Solitaire Home Consultant with luxurious properties that redefine elegance and comfort. Uncover the epitome of sophistication today.",
  },
  {
    name: "Panchkula",
    thumbnailImages: [PanchkulaImageT, PanchkulaImageT1],
    images: [PanchkulaImage, PanchkulaImage1],
    description:
      "Panchkula is a planned city and district headquarter in the Panchkula district in Haryana, India. The origin of the name Panchkula came from the place where five irrigation canals meet. At present, it forms a part of an adjoining area to Chandigarh, Mohali, and Zirakpur. It is approximately 4 km southeast of Chandigarh, 105 km southwest of Shimla",
    link: "#panchkulaCard",
    linkName: "View",
    pageLink: "/properties-in-panchkula",
    properties: panchkulaProperties.filter(
      (property: ProperitesProps) => property.isActive ?? true
    ),
    metaTitle:
      "Explore Stunning Properties in Panchkula | Solitaire Home Consultant",
    metaDescription:
      "Discover your luxurious dream home in Panchkula with Solitaire Home Consultant and explore a curated collection of stunning properties that blend luxury and comfort.",
  },
];

export default data;
