import { makeAutoObservable } from "mobx";

import { Achievement } from "@/utils/storeInterfaces";

class AchievementsStore {
  achievements: Achievement[] = [
    {
      id: 1,
      iconPath: "/static/achievements/icons/TrainingIcon.webp",
      type: "easy",
    },
    {
      id: 2,
      iconPath: "/static/achievements/icons/YoungLadIcon.webp",
      type: "easy",
    },
    {
      id: 3,
      iconPath: "/static/achievements/icons/BugStomperIcon.webp",
      type: "easy",
    },
    {
      id: 4,
      iconPath: "/static/achievements/icons/BotScrapperIcon.webp",
      type: "easy",
    },
    {
      id: 5,
      iconPath: "/static/achievements/icons/TacticoolIcon.webp",
      type: "easy",
    },
    {
      id: 6,
      iconPath: "/static/achievements/icons/NightIcon.webp",
      type: "easy",
    },
    {
      id: 7,
      iconPath: "/static/achievements/icons/CountrysideDefenceIcon.webp",
      type: "easy",
    },
    {
      id: 8,
      iconPath: "/static/achievements/icons/SpreadDemocracyIcon.webp",
      type: "easy",
    },
    {
      id: 9,
      iconPath: "/static/achievements/icons/JobIsDoneIcon.webp",
      type: "easy",
    },
    {
      id: 10,
      iconPath: "/static/achievements/icons/NickOfTimeIcon.webp",
      type: "easy",
    },
    {
      id: 11,
      iconPath: "/static/achievements/icons/LongArmIcon.webp",
      type: "easy",
    },
    {
      id: 12,
      iconPath: "/static/achievements/icons/CoolGuysDontLookIcon.webp",
      type: "easy",
    },
    {
      id: 13,
      iconPath: "/static/achievements/icons/HulkIcon.webp",
      type: "easy",
    },
    {
      id: 14,
      iconPath: "/static/achievements/icons/BileTitanIcon.webp",
      type: "easy",
    },
    {
      id: 15,
      iconPath: "/static/achievements/icons/EatThisIcon.webp",
      type: "easy",
    },
    {
      id: 16,
      iconPath: "/static/achievements/icons/IllegalStalkingIcon.webp",
      type: "easy",
    },
    {
      id: 17,
      iconPath: "/static/achievements/icons/HotPotatoIcon.webp",
      type: "easy",
    },
    {
      id: 18,
      iconPath: "/static/achievements/icons/GetSomeIcon.webp",
      type: "easy",
    },
    {
      id: 19,
      iconPath: "/static/achievements/icons/InjuriesIcon.webp",
      type: "easy",
    },
    {
      id: 20,
      iconPath: "/static/achievements/icons/DemocracyStemIcon.webp",
      type: "easy",
    },
    {
      id: 21,
      iconPath: "/static/achievements/icons/PromoteSynergyIcon.webp",
      type: "easy",
    },
    {
      id: 22,
      iconPath: "/static/achievements/icons/ExtractamundoIcon.webp",
      type: "extreme",
    },
    {
      id: 23,
      iconPath: "/static/achievements/icons/StratagemsIcon.webp",
      type: "extreme",
    },
    {
      id: 24,
      iconPath: "/static/achievements/icons/DemocracyPowerIcon.webp",
      type: "extreme",
    },
    {
      id: 25,
      iconPath: "/static/achievements/icons/FireKillIcon.webp",
      type: "extreme",
    },
    {
      id: 26,
      iconPath: "/static/achievements/icons/QuantityScienceIcon.webp",
      type: "extreme",
    },
    {
      id: 27,
      iconPath: "/static/achievements/icons/SamplesFriendIcon.webp",
      type: "extreme",
    },
    {
      id: 28,
      iconPath: "/static/achievements/icons/HoldOnMyLiberTeaIcon.webp",
      type: "extreme",
    },
    {
      id: 29,
      iconPath: "/static/achievements/icons/DrawIcon.webp",
      type: "helldive",
    },
    {
      id: 30,
      iconPath: "/static/achievements/icons/SuppliesIcon.webp",
      type: "helldive",
    },
    {
      id: 31,
      iconPath: "/static/achievements/icons/HellDiveIcon.webp",
      type: "helldive",
    },
    {
      id: 32,
      iconPath: "/static/achievements/icons/HoldMyPrimaryIcon.webp",
      type: "helldive",
    },
    {
      id: 33,
      iconPath: "/static/achievements/icons/360SecIcon.webp",
      type: "helldive",
    },
    {
      id: 34,
      iconPath: "/static/achievements/icons/GreaterGodIcon.webp",
      type: "longWay",
    },
    {
      id: 35,
      iconPath: "/static/achievements/icons/PatriotIcon.webp",
      type: "longWay",
    },
    {
      id: 36,
      iconPath: "/static/achievements/icons/DoingYourPartIcon.webp",
      type: "longWay",
    },
    {
      id: 37,
      iconPath: "/static/achievements/icons/FullyOperationalIcon.webp",
      type: "longWay",
    },
    {
      id: 38,
      iconPath: "/static/achievements/icons/ShipItIcon.webp",
      type: "longWay",
    },
    {
      id: 39,
      iconPath: "/static/achievements/icons/SuperEarthHeroIcon.webp",
      type: "longWay",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export const achievementsStore = new AchievementsStore();
