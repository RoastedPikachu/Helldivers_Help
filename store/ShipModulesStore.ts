import { makeAutoObservable } from "mobx";

import { stratagemStore } from "@/store/StratagemStore";

import { ShipModule } from "@/utils/dataInterfaces";

class ShipModulesStore {
  shipModules = [
    {
      id: 1,
      levelImages: [
        "/static/shipModules/PatrioticAdministrationCenterLvl1.webp",
        "/static/shipModules/PatrioticAdministrationCenterLvl2.webp",
        "/static/shipModules/PatrioticAdministrationCenterLvl3.webp",
        "/static/shipModules/PatrioticAdministrationCenterLvl4.webp",
        "/static/shipModules/PatrioticAdministrationCenterLvl5.webp",
      ],
      improvementPrices: [
        {
          commonSampleCount: 60,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 40,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 60,
          superSampleCount: 5,
        },
        {
          commonSampleCount: 150,
          rareSampleCount: 150,
          superSampleCount: 15,
          requisites: 20000,
        },
        {
          commonSampleCount: 200,
          rareSampleCount: 200,
          superSampleCount: 20,
          requisites: 30000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[8],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[3],
          stratagemStore.stratagems.engineerBay[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[0],
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.patrioticAdministrationCenter[1],
        ],
        secondLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[6],
          stratagemStore.stratagems.patrioticAdministrationCenter[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[8],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[3],
          stratagemStore.stratagems.engineerBay[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[0],
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.patrioticAdministrationCenter[4],
          stratagemStore.stratagems.patrioticAdministrationCenter[1],
          stratagemStore.stratagems.patrioticAdministrationCenter[3],
          stratagemStore.stratagems.engineerBay[8],
        ],
        thirdLevel: [
          stratagemStore.stratagems.engineerBay[9],
          stratagemStore.stratagems.roboticsWorkshop[3],
          stratagemStore.stratagems.engineerBay[6],
          stratagemStore.stratagems.engineerBay[1],
          stratagemStore.stratagems.hangar[4],
          stratagemStore.stratagems.engineerBay[5],
        ],
        fourthLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[6],
          stratagemStore.stratagems.patrioticAdministrationCenter[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[8],
          stratagemStore.stratagems.engineerBay[3],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[0],
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.patrioticAdministrationCenter[4],
          stratagemStore.stratagems.patrioticAdministrationCenter[1],
        ],
        fifthLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[6],
          stratagemStore.stratagems.patrioticAdministrationCenter[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[8],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[3],
          stratagemStore.stratagems.engineerBay[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[0],
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.patrioticAdministrationCenter[4],
          stratagemStore.stratagems.patrioticAdministrationCenter[1],
          stratagemStore.stratagems.patrioticAdministrationCenter[3],
          stratagemStore.stratagems.engineerBay[8],
        ],
      },
    },
    {
      id: 2,
      levelImages: [
        "/static/shipModules/OrbitalCannonsLvl1.webp",
        "/static/shipModules/OrbitalCannonsLvl2.webp",
        "/static/shipModules/OrbitalCannonsLvl3.webp",
        "/static/shipModules/OrbitalCannonsLvl4.webp",
        "/static/shipModules/OrbitalCannonsLvl5.webp",
      ],
      improvementPrices: [
        {
          commonSampleCount: 100,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 60,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 200,
          rareSampleCount: 150,
          superSampleCount: 15,
          requisites: 25000,
        },
        {
          commonSampleCount: 250,
          rareSampleCount: 200,
          superSampleCount: 20,
          requisites: 35000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.orbitalCannon[4],
          stratagemStore.stratagems.orbitalCannon[6],
          stratagemStore.stratagems.orbitalCannon[1],
          stratagemStore.stratagems.bridge[0],
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
        secondLevel: [
          stratagemStore.stratagems.orbitalCannon[0],
          stratagemStore.stratagems.orbitalCannon[4],
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
        thirdLevel: [
          stratagemStore.stratagems.orbitalCannon[0],
          stratagemStore.stratagems.orbitalCannon[4],
          stratagemStore.stratagems.bridge[2],
          stratagemStore.stratagems.orbitalCannon[6],
          stratagemStore.stratagems.bridge[3],
          stratagemStore.stratagems.orbitalCannon[1],
          stratagemStore.stratagems.orbitalCannon[5],
          stratagemStore.stratagems.bridge[0],
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
        fourthLevel: [
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
        fifthLevel: [
          stratagemStore.stratagems.orbitalCannon[4],
          stratagemStore.stratagems.bridge[0],
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
      },
    },
    {
      id: 3,
      levelImages: [
        "/static/shipModules/HangarLvl1.webp",
        "/static/shipModules/HangarLvl2.webp",
        "/static/shipModules/HangarLvl3.webp",
        "/static/shipModules/HangarLvl4.webp",
        "/static/shipModules/HangarLvl5.webp",
      ],
      improvementPrices: [
        {
          commonSampleCount: 80,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 40,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 150,
          rareSampleCount: 150,
          superSampleCount: 15,
          requisites: 25000,
        },
        {
          commonSampleCount: 200,
          rareSampleCount: 250,
          superSampleCount: 25,
          requisites: 30000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.hangar[7],
          stratagemStore.stratagems.hangar[1],
          stratagemStore.stratagems.hangar[0],
          stratagemStore.stratagems.hangar[5],
          stratagemStore.stratagems.hangar[3],
          stratagemStore.stratagems.hangar[2],
          stratagemStore.stratagems.hangar[6],
        ],
        secondLevel: [],
        thirdLevel: [
          stratagemStore.stratagems.hangar[7],
          stratagemStore.stratagems.hangar[1],
          stratagemStore.stratagems.hangar[0],
          stratagemStore.stratagems.hangar[5],
          stratagemStore.stratagems.hangar[3],
          stratagemStore.stratagems.hangar[2],
          stratagemStore.stratagems.hangar[6],
        ],
        fourthLevel: [
          stratagemStore.stratagems.hangar[1],
          stratagemStore.stratagems.hangar[5],
          stratagemStore.stratagems.hangar[3],
          stratagemStore.stratagems.hangar[2],
        ],
        fifthLevel: [],
      },
    },
    {
      id: 4,
      levelImages: [
        "/static/shipModules/BridgeLvl1.webp",
        "/static/shipModules/BridgeLvl2.webp",
        "/static/shipModules/BridgeLvl3.webp",
        "/static/shipModules/BridgeLvl4.webp",
        "/static/shipModules/BridgeLvl5.webp",
      ],
      improvementPrices: [
        {
          commonSampleCount: 60,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 40,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 200,
          rareSampleCount: 150,
          superSampleCount: 15,
          requisites: 25000,
        },
        {
          commonSampleCount: 250,
          rareSampleCount: 200,
          superSampleCount: 20,
          requisites: 35000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.orbitalCannon[0],
          stratagemStore.stratagems.orbitalCannon[4],
          stratagemStore.stratagems.bridge[2],
          stratagemStore.stratagems.bridge[1],
          stratagemStore.stratagems.orbitalCannon[6],
          stratagemStore.stratagems.bridge[3],
          stratagemStore.stratagems.orbitalCannon[1],
          stratagemStore.stratagems.orbitalCannon[5],
          stratagemStore.stratagems.bridge[0],
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
        secondLevel: [],
        thirdLevel: [],
        fourthLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.hangar[3],
          stratagemStore.stratagems.engineerBay[4],
        ],
        fifthLevel: [],
      },
    },
    {
      id: 5,
      levelImages: [
        "/static/shipModules/EngineerBayLvl1.webp",
        "/static/shipModules/EngineerBayLvl2.webp",
        "/static/shipModules/EngineerBayLvl3.webp",
        "/static/shipModules/EngineerBayLvl4.webp",
        "/static/shipModules/EngineerBayLvl5.webp",
      ],
      improvementPrices: [
        {
          commonSampleCount: 60,
          rareSampleCount: 10,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 60,
          superSampleCount: 5,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 200,
          rareSampleCount: 150,
          superSampleCount: 20,
          requisites: 20000,
        },
        {
          commonSampleCount: 250,
          rareSampleCount: 200,
          superSampleCount: 25,
          requisites: 30000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.bridge[5],
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.bridge[6],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.engineerBay[0],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
          stratagemStore.stratagems.engineerBay[4],
          stratagemStore.stratagems.bridge[4],
        ],
        secondLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.bridge[6],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
        thirdLevel: [
          stratagemStore.stratagems.bridge[5],
          stratagemStore.stratagems.bridge[6],
          stratagemStore.stratagems.engineerBay[0],
          stratagemStore.stratagems.engineerBay[4],
          stratagemStore.stratagems.bridge[4],
        ],
        fourthLevel: [
          stratagemStore.stratagems.engineerBay[7],
          stratagemStore.stratagems.bridge[6],
        ],
        fifthLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[6],
          stratagemStore.stratagems.patrioticAdministrationCenter[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[8],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[3],
          stratagemStore.stratagems.engineerBay[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[0],
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.patrioticAdministrationCenter[4],
          stratagemStore.stratagems.patrioticAdministrationCenter[1],
          stratagemStore.stratagems.patrioticAdministrationCenter[3],
          stratagemStore.stratagems.engineerBay[8],
        ],
      },
    },
    {
      id: 6,
      levelImages: [
        "/static/shipModules/RoboticsWorkshopLvl1.webp",
        "/static/shipModules/RoboticsWorkshopLvl2.webp",
        "/static/shipModules/RoboticsWorkshopLvl3.webp",
        "/static/shipModules/RoboticsWorkshopLvl4.webp",
        "/static/shipModules/RoboticsWorkshopLvl5.webp",
      ],
      improvementPrices: [
        {
          commonSampleCount: 60,
          rareSampleCount: 20,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 40,
          superSampleCount: 5,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 150,
          rareSampleCount: 150,
          superSampleCount: 20,
          requisites: 25000,
        },
        {
          commonSampleCount: 250,
          rareSampleCount: 200,
          superSampleCount: 30,
          requisites: 35000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
        secondLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
        thirdLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
        fourthLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.bridge[6],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
        fifthLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[2],
        ],
      },
    },
  ] as ShipModule[];

  constructor() {
    makeAutoObservable(this);
  }
}

export const shipModulesStore = new ShipModulesStore();
