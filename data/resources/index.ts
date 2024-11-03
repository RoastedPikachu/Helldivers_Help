import { IResource } from "@/utils/generalInterfaces";

export const resources = [
  {
    id: 1,
    iconPath: "/static/Resources/CommonSampleIcon.svg",
    maxAmount: 500,
    isDependsOnDifficulty: true,
  },
  {
    id: 2,
    iconPath: "/static/Resources/RareSampleIcon.svg",
    maxAmount: 250,
    isDependsOnDifficulty: true,
  },
  {
    id: 3,
    iconPath: "/static/Resources/UltraRareSampleIcon.svg",
    maxAmount: 100,
    isDependsOnDifficulty: true,
  },
  {
    id: 4,
    iconPath: "/static/Resources/SuperCreditIcon.svg",
    prices: ["$1.99", "$4.99", "$9.99", "$19.99"],
    isDependsOnDifficulty: false,
  },
  {
    id: 5,
    iconPath: "/static/Resources/MedalIcon.svg",
    maxAmount: 250,
    isDependsOnDifficulty: true,
  },
  {
    id: 6,
    iconPath: "/static/Resources/RequisitesIcon.svg",
    maxAmount: 50000,
    isDependsOnDifficulty: false,
  },
] as IResource[];
