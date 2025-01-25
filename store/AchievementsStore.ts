import { makeAutoObservable } from "mobx";

import { Achievement } from "@/utils/storeInterfaces";

class AchievementsStore {
  achievements: { [key: string]: Achievement[] } = {
    easy: [
      {
        id: 1,
        iconPath: "/static/achievements/icons/TrainingIcon.webp",
      },
      {
        id: 2,
        iconPath: "/static/achievements/icons/YoungLadIcon.webp",
      },
      {
        id: 3,
        iconPath: "/static/achievements/icons/BugStomperIcon.webp",
      },
      {
        id: 4,
        iconPath: "/static/achievements/icons/BotScrapperIcon.webp",
      },
      {
        id: 5,
        iconPath: "/static/achievements/icons/TacticoolIcon.webp",
      },
      {
        id: 6,
        iconPath: "/static/achievements/icons/NightIcon.webp",
      },
      {
        id: 7,
        iconPath: "/static/achievements/icons/CountrysideDefenceIcon.webp",
      },
      {
        id: 8,
        iconPath: "/static/achievements/icons/SpreadDemocracyIcon.webp",
      },
      {
        id: 9,
        iconPath: "/static/achievements/icons/JobIsDoneIcon.webp",
      },
      {
        id: 10,
        iconPath: "/static/achievements/icons/NickOfTimeIcon.webp",
      },
      {
        id: 11,
        iconPath: "/static/achievements/icons/LongArmIcon.webp",
      },
      {
        id: 12,
        iconPath: "/static/achievements/icons/CoolGuysDontLookIcon.webp",
      },
      {
        id: 13,
        iconPath: "/static/achievements/icons/HulkIcon.webp",
      },
      {
        id: 14,
        iconPath: "/static/achievements/icons/BileTitanIcon.webp",
      },
      {
        id: 15,
        iconPath: "/static/achievements/icons/EatThisIcon.webp",
      },
      {
        id: 16,
        iconPath: "/static/achievements/icons/IllegalStalkingIcon.webp",
      },
      {
        id: 17,
        iconPath: "/static/achievements/icons/HotPotatoIcon.webp",
      },
      {
        id: 18,
        iconPath: "/static/achievements/icons/GetSomeIcon.webp",
      },
      {
        id: 19,
        iconPath: "/static/achievements/icons/InjuriesIcon.webp",
      },
      {
        id: 20,
        iconPath: "/static/achievements/icons/DemocracyStemIcon.webp",
      },
      {
        id: 21,
        iconPath: "/static/achievements/icons/PromoteSynergyIcon.webp",
      },
    ],
    extreme: [
      {
        id: 1,
        iconPath: "/static/achievements/icons/ExtractamundoIcon.webp",
      },
      {
        id: 2,
        iconPath: "/static/achievements/icons/StratagemsIcon.webp",
      },
      {
        id: 3,
        iconPath: "/static/achievements/icons/DemocracyPowerIcon.webp",
      },
      {
        id: 4,
        iconPath: "/static/achievements/icons/FireKillIcon.webp",
      },
      {
        id: 5,
        iconPath: "/static/achievements/icons/QuantityScienceIcon.webp",
      },
      {
        id: 6,
        iconPath: "/static/achievements/icons/SamplesFriendIcon.webp",
      },
      {
        id: 7,
        iconPath: "/static/achievements/icons/HoldOnMyLiberTeaIcon.webp",
      },
    ],
    helldive: [
      {
        id: 1,
        iconPath: "/static/achievements/icons/DrawIcon.webp",
      },
      {
        id: 2,
        iconPath: "/static/achievements/icons/SuppliesIcon.webp",
      },
      {
        id: 3,
        iconPath: "/static/achievements/icons/HellDiveIcon.webp",
      },
      {
        id: 4,
        iconPath: "/static/achievements/icons/HoldMyPrimaryIcon.webp",
      },
      {
        id: 5,
        iconPath: "/static/achievements/icons/360SecIcon.webp",
      },
    ],
    longWay: [
      {
        id: 1,
        iconPath: "/static/achievements/icons/GreaterGodIcon.webp",
      },
      {
        id: 2,
        iconPath: "/static/achievements/icons/PatriotIcon.webp",
      },
      {
        id: 3,
        iconPath: "/static/achievements/icons/DoingYourPartIcon.webp",
      },
      {
        id: 4,
        iconPath: "/static/achievements/icons/FullyOperationalIcon.webp",
      },
      {
        id: 5,
        iconPath: "/static/achievements/icons/ShipItIcon.webp",
      },
      {
        id: 6,
        iconPath: "/static/achievements/icons/SuperEarthHeroIcon.webp",
      },
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const achievementsStore = new AchievementsStore();
