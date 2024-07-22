import { mohaliProperties } from "./mohaliProperties";
import { newChandigarhProperties } from "./newChandigarhProperties";
import { panchkulaProperties } from "./panchkulaProperties";
import { AllPropertiesProps, ProperitesProps } from "./types";
import { zirakpurProperties } from "./zirakpurProperties";

export const allProperties: AllPropertiesProps[] = [
  ...mohaliProperties.map((property: ProperitesProps) => ({
    ...property,
    city: "Mohali",
  })),
  ...zirakpurProperties.map((property: ProperitesProps) => ({
    ...property,
    city: "Zirakpur",
  })),
  ...newChandigarhProperties.map((property: ProperitesProps) => ({
    ...property,
    city: "New Chandigarh",
  })),
  ...panchkulaProperties.map((property: ProperitesProps) => ({
    ...property,
    city: "Panchkula",
  })),
];
