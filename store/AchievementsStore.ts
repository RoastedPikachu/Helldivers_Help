import { makeAutoObservable } from "mobx";

import { Achievement } from "@/utils/storeInterfaces";

class AchievementsStore {
  achievements: { [key: string]: Achievement[] } = {
    easy: [
      {
        id: 1,
        iconPath: "/static/Achievements/TrainingIcon.webp",
      },
      {
        id: 2,
        iconPath: "/static/Achievements/YoungLadIcon.webp",
      },
      {
        id: 3,
        iconPath: "/static/Achievements/BugStomperIcon.webp",
      },
      {
        id: 4,
        iconPath: "/static/Achievements/BotScrapperIcon.webp",
      },
      {
        id: 5,
        iconPath: "/static/Achievements/TacticoolIcon.webp",
      },
      {
        id: 6,
        iconPath: "/static/Achievements/NightIcon.webp",
      },
      {
        id: 7,
        iconPath: "/static/Achievements/CountrysideDefenceIcon.webp",
      },
      {
        id: 8,
        iconPath: "/static/Achievements/SpreadDemocracyIcon.webp",
      },
      {
        id: 9,
        iconPath: "/static/Achievements/JobIsDoneIcon.webp",
      },
      {
        id: 10,
        iconPath: "/static/Achievements/NickOfTimeIcon.webp",
      },
      {
        id: 11,
        iconPath: "/static/Achievements/LongArmIcon.webp",
      },
      {
        id: 12,
        iconPath: "/static/Achievements/CoolGuysDontLookIcon.webp",
      },
      {
        id: 13,
        iconPath: "/static/Achievements/HulkIcon.webp",
      },
      {
        id: 14,
        iconPath: "/static/Achievements/BileTitanIcon.webp",
      },
      {
        id: 15,
        iconPath: "/static/Achievements/EatThisIcon.webp",
      },
      {
        id: 16,
        iconPath: "/static/Achievements/IllegalStalkingIcon.webp",
      },
      {
        id: 17,
        iconPath: "/static/Achievements/HotPotatoIcon.webp",
      },
      {
        id: 18,
        iconPath: "/static/Achievements/GetSomeIcon.webp",
      },
      {
        id: 19,
        iconPath: "/static/Achievements/InjuriesIcon.webp",
      },
      {
        id: 20,
        iconPath: "/static/Achievements/DemocracyStemIcon.webp",
      },
      {
        id: 21,
        iconPath: "/static/Achievements/PromoteSynergyIcon.webp",
      },
    ],
    extreme: [
      {
        id: 1,
        iconPath: "/static/Achievements/ExtractamundoIcon.webp",
      },
      {
        id: 2,
        iconPath: "/static/Achievements/StratagemsIcon.webp",
      },
      {
        id: 3,
        iconPath: "/static/Achievements/DemocracyPowerIcon.webp",
      },
      {
        id: 4,
        iconPath: "/static/Achievements/FireKillIcon.webp",
      },
      {
        id: 5,
        iconPath: "/static/Achievements/QuantityScienceIcon.webp",
      },
      {
        id: 6,
        iconPath: "/static/Achievements/SamplesFriendIcon.webp",
      },
      {
        id: 7,
        iconPath: "/static/Achievements/HoldOnMyLiberTeaIcon.webp",
      },
    ],
    helldive: [
      {
        id: 1,
        iconPath: "/static/Achievements/DrawIcon.webp",
      },
      {
        id: 2,
        iconPath: "/static/Achievements/SuppliesIcon.webp",
      },
      {
        id: 3,
        iconPath: "/static/Achievements/HellDiveIcon.webp",
      },
      {
        id: 4,
        iconPath: "/static/Achievements/HoldMyPrimaryIcon.webp",
      },
      {
        id: 5,
        iconPath: "/static/Achievements/360SecIcon.webp",
      },
    ],
    longWay: [
      {
        id: 1,
        iconPath: "/static/Achievements/GreaterGodIcon.webp",
      },
      {
        id: 2,
        iconPath: "/static/Achievements/PatriotIcon.webp",
      },
      {
        id: 3,
        iconPath: "/static/Achievements/DoingYourPartIcon.webp",
      },
      {
        id: 4,
        iconPath: "/static/Achievements/FullyOperationalIcon.webp",
      },
      {
        id: 5,
        iconPath: "/static/Achievements/ShipItIcon.webp",
      },
      {
        id: 6,
        iconPath: "/static/Achievements/SuperEarthHeroIcon.webp",
      },
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const achievementsStore = new AchievementsStore();
