import { makeAutoObservable } from "mobx";

import { stratagemTypes } from "@/data/stratagemTypes";

import { StratagemType } from "@/utils/dataInterfaces";
import { stratagemTrainingStore } from "@/store/StratagemTrainingStore";

export interface Direction {
  id: number;
  orientation: number;
  isPressed: boolean;
}

export interface Stratagem {
  id: number;
  iconPath: string;
  type: StratagemType;
  keyCodes: number[];
  directions: Direction[];
}

export interface SuperDestroyerStratagem extends Stratagem {
  videoPath: string;
  videoPreviewPath: string;
  price: number;
  obtainingLevel: number;
  callTime: number;
  useCount: number;
  reloadTime: number;
}

class StratagemStore {
  currentStratagem = {} as Stratagem | SuperDestroyerStratagem;
  nextStratagemsArray = [] as Stratagem[] | SuperDestroyerStratagem[];

  stratagems: any[] = [
    {
      id: 1,
      iconPath: "/static/stratagems/MachineGunIcon.png",
      videoPath: "/static/stratagemVideos/MachineGunVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/MachineGunPreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 0,
      obtainingLevel: 0,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 83, 87, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 2,
      iconPath: "/static/stratagems/AntiMaterialRifleIcon.png",
      videoPath: "/static/stratagemVideos/AntiMaterialRifleVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/AntiMaterialRiflePreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 5000,
      obtainingLevel: 2,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 68, 87, 83],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 3,
      iconPath: "/static/stratagems/LightMachineGunIcon.png",
      videoPath: "/static/stratagemVideos/StalwartVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/StalwartPreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 3500,
      obtainingLevel: 2,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 83, 87, 87, 65],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 4,
      iconPath: "/static/stratagems/ExpendableAntiTankIcon.png",
      videoPath: "/static/stratagemVideos/ExpendableAntiTankVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/ExpendableAntiTankPreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 3000,
      obtainingLevel: 3,
      callTime: 2,
      useCount: 0,
      reloadTime: 70,
      keyCodes: [83, 83, 65, 87, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 5,
      iconPath: "/static/stratagems/RecoilnessRifleIcon.png",
      videoPath: "/static/stratagemVideos/RecoilnessRifleVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/RecoilnessRiflePreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 6000,
      obtainingLevel: 5,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 68, 68, 65],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 6,
      iconPath: "/static/stratagems/FlamethrowerIcon.png",
      videoPath: "/static/stratagemVideos/FlamethrowerVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/FlamethrowerPreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 6000,
      obtainingLevel: 10,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 87, 83, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 7,
      iconPath: "/static/stratagems/AutocannonIcon.png",
      videoPath: "/static/stratagemVideos/AutocannonVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/AutocannonPreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 7000,
      obtainingLevel: 10,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 83, 87, 87, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 8,
      iconPath: "/static/stratagems/HeavyMachineGunIcon.png",
      videoPath: "/static/stratagemVideos/HeavyMachineGunVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/HeavyMachineGunPreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 6000,
      obtainingLevel: 16,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 87, 83, 83],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 9,
      iconPath: "/static/stratagems/Rl77Icon.png",
      videoPath: "/static/stratagemVideos/Rl77Video.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/Rl77Preview.webp",
      type: stratagemTypes.supportWeapon,
      price: 8000,
      obtainingLevel: 15,
      callTime: 7,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 87, 87, 65, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 10,
      iconPath: "/static/stratagems/Commando.png",
      videoPath: "/static/stratagemVideos/Commando.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/Commando.webp",
      type: stratagemTypes.supportWeapon,
      price: 8000,
      obtainingLevel: 15,
      callTime: 2,
      useCount: 0,
      reloadTime: 120,
      keyCodes: [83, 65, 87, 83, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 11,
      iconPath: "/static/stratagems/RelsaGunIcon.png",
      videoPath: "/static/stratagemVideos/RailgunVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/RailgunPreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 10000,
      obtainingLevel: 20,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 68, 83, 87, 65, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 12,
      iconPath: "/static/stratagems/SpearIcon.png",
      videoPath: "/static/stratagemVideos/SpearVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/SpearPreview.webp",
      type: stratagemTypes.supportWeapon,
      price: 9000,
      obtainingLevel: 20,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 83, 87, 83, 83],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 13,
      iconPath: "/static/stratagems/WASP.png",
      videoPath: "/static/stratagemVideos/WASP.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/WASP.webp",
      type: stratagemTypes.supportWeapon,
      price: 12000,
      obtainingLevel: 20,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 83, 87, 83, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 14,
      iconPath: "/static/stratagems/OrbitalGatlingBarrageIcon.png",
      videoPath: "/static/stratagemVideos/OrbitalGatlingBarrageVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalGatlingBarragePreview.webp",
      type: stratagemTypes.orbital,
      price: 1500,
      obtainingLevel: 2,
      callTime: 1,
      useCount: 0,
      reloadTime: 80,
      keyCodes: [68, 83, 65, 87, 87],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 15,
      iconPath: "/static/stratagems/OrbitalAirburstStrikeIcon.png",
      videoPath: "/static/stratagemVideos/OrbitalAirburstStrikeVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalAirburstStrikePreview.webp",
      type: stratagemTypes.orbital,
      price: 4000,
      obtainingLevel: 5,
      callTime: 1,
      useCount: 0,
      reloadTime: 120,
      keyCodes: [68, 68, 68],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 16,
      iconPath: "/static/stratagems/Orbital120mmHEBarrageIcon.png",
      videoPath: "/static/stratagemVideos/Orbital120mmHEBarrageVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/Orbital120mmHEBarragePreview.webp",
      type: stratagemTypes.orbital,
      price: 4000,
      obtainingLevel: 5,
      callTime: 4,
      useCount: 0,
      reloadTime: 240,
      keyCodes: [68, 68, 83, 65, 68, 83],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 17,
      iconPath: "/static/stratagems/Orbital380mmHEBarrageIcon.png",
      videoPath: "/static/stratagemVideos/Orbital380mmHEBarrageVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/Orbital380mmHEBarragePreview.webp",
      type: stratagemTypes.orbital,
      price: 7500,
      obtainingLevel: 8,
      callTime: 5,
      useCount: 0,
      reloadTime: 240,
      keyCodes: [68, 83, 87, 87, 65, 83, 83],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 7,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 18,
      iconPath: "/static/stratagems/OrbitalWalkingBarrageIcon.png",
      videoPath: "/static/stratagemVideos/OrbitalWalkingBarrageVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalWalkingBarragePreview.webp",
      type: stratagemTypes.orbital,
      price: 7500,
      obtainingLevel: 10,
      callTime: 2,
      useCount: 0,
      reloadTime: 240,
      keyCodes: [68, 83, 68, 83, 68, 83],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 19,
      iconPath: "/static/stratagems/OrbitalLaserIcon.png",
      videoPath: "/static/stratagemVideos/OrbitalLaserVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalLaserPreview.webp",
      type: stratagemTypes.orbital,
      price: 10000,
      obtainingLevel: 15,
      callTime: 1,
      useCount: 3,
      reloadTime: 300,
      keyCodes: [68, 83, 87, 68, 83],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 20,
      iconPath: "/static/stratagems/OrbitalNapalmBarrage.png",
      videoPath: "/static/stratagemVideos/OrbitalNapalmBarrage.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalNapalmBarrage.webp",
      type: stratagemTypes.orbital,
      price: 10000,
      obtainingLevel: 18,
      callTime: 7,
      useCount: 0,
      reloadTime: 240,
      keyCodes: [68, 68, 83, 65, 68, 87],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 21,
      iconPath: "/static/stratagems/OrbitalRailcannonStrikeIcon.png",
      videoPath: "/static/stratagemVideos/OrbitalRailcannonStrikeVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalRailcannonStrikePreview.webp",
      type: stratagemTypes.orbital,
      price: 10000,
      obtainingLevel: 20,
      callTime: 0,
      useCount: 0,
      reloadTime: 210,
      keyCodes: [68, 87, 83, 83, 68],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 22,
      iconPath: "/static/stratagems/EagleStrafingRunIcon.png",
      videoPath: "/static/stratagemVideos/EagleStrafingRunVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/EagleStrafingRunPreview.webp",
      type: stratagemTypes.hangar,
      price: 1500,
      obtainingLevel: 2,
      callTime: 0,
      useCount: 3,
      reloadTime: 8,
      keyCodes: [87, 68, 68],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 23,
      iconPath: "/static/stratagems/EagleAirstrikeIcon.png",
      videoPath: "/static/stratagemVideos/EagleAirstrikeVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/EagleAirstrikePreview.webp",
      type: stratagemTypes.hangar,
      price: 4000,
      obtainingLevel: 2,
      callTime: 0,
      useCount: 2,
      reloadTime: 8,
      keyCodes: [87, 68, 83, 68],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 24,
      iconPath: "/static/stratagems/EagleClusterBombIcon.png",
      videoPath: "/static/stratagemVideos/EagleClusterBombVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/EagleClusterBombPreview.webp",
      type: stratagemTypes.hangar,
      price: 4000,
      obtainingLevel: 3,
      callTime: 0,
      useCount: 4,
      reloadTime: 8,
      keyCodes: [87, 68, 83, 83, 68],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 25,
      iconPath: "/static/stratagems/EagleNapalmAirstrikeIcon.png",
      videoPath: "/static/stratagemVideos/EagleNapalmAirstrikeVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/EagleNapalmAirstrikePreview.webp",
      type: stratagemTypes.hangar,
      price: 5000,
      obtainingLevel: 5,
      callTime: 0,
      useCount: 2,
      reloadTime: 8,
      keyCodes: [87, 68, 83, 87],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 26,
      iconPath: "/static/stratagems/JumpPackIcon.png",
      videoPath: "/static/stratagemVideos/JumpPackVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/JumpPackPreview.webp",
      type: stratagemTypes.hangar,
      price: 6000,
      obtainingLevel: 8,
      callTime: 5,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 87, 87, 83, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 27,
      iconPath: "/static/stratagems/EagleSmokeStrikeIcon.png",
      videoPath: "/static/stratagemVideos/EagleSmokeStrikeVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/EagleSmokeStrikePreview.webp",
      type: stratagemTypes.hangar,
      price: 4000,
      obtainingLevel: 8,
      callTime: 0,
      useCount: 2,
      reloadTime: 8,
      keyCodes: [87, 68, 87, 83],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 28,
      iconPath: "/static/stratagems/Eagle110mmRocketPodIcon.png",
      videoPath: "/static/stratagemVideos/Eagle110mmRocketPodVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/Eagle110mmRocketPodPreview.webp",
      type: stratagemTypes.hangar,
      price: 7500,
      obtainingLevel: 10,
      callTime: 0,
      useCount: 2,
      reloadTime: 8,
      keyCodes: [87, 68, 87, 65],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 29,
      iconPath: "/static/stratagems/Eagle500kgBombIcon.png",
      videoPath: "/static/stratagemVideos/Eagle500kgBombVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/Eagle500kgBombPreview.webp",
      type: stratagemTypes.hangar,
      price: 10000,
      obtainingLevel: 15,
      callTime: 0,
      useCount: 1,
      reloadTime: 8,
      keyCodes: [87, 68, 83, 83, 83],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 30,
      iconPath: "/static/stratagems/M102.png",
      videoPath: "/static/stratagemVideos/M102.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/M102.webp",
      type: stratagemTypes.hangar,
      price: 25000,
      obtainingLevel: 25,
      callTime: 10,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [65, 83, 68, 83, 68, 83, 87],
      directions: [
        {
          id: 1,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 7,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 31,
      iconPath: "/static/stratagems/OrbitalPrecisionStrikeIcon.png",
      videoPath: "/static/stratagemVideos/OrbitalPrecisionStrikeVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalPrecisionStrikePreview.webp",
      type: stratagemTypes.bridge,
      price: 0,
      obtainingLevel: 0,
      callTime: 3,
      useCount: 0,
      reloadTime: 100,
      keyCodes: [68, 68, 87],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 32,
      iconPath: "/static/stratagems/OrbitalGasStrikeIcon.png",
      videoPath: "/static/stratagemVideos/OrbitalGasStrikeVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalGasStrikePreview.webp",
      type: stratagemTypes.bridge,
      price: 4000,
      obtainingLevel: 3,
      callTime: 1,
      useCount: 0,
      reloadTime: 75,
      keyCodes: [68, 68, 83, 68],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 33,
      iconPath: "/static/stratagems/OrbitalEMSStrikeIcon.png",
      videoPath: "/static/stratagemVideos/OrbitalEMSStrikeVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalEMSStrikePreview.webp",
      type: stratagemTypes.bridge,
      price: 6000,
      obtainingLevel: 4,
      callTime: 1,
      useCount: 0,
      reloadTime: 75,
      keyCodes: [68, 68, 65, 83],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 34,
      iconPath: "/static/stratagems/OrbitalSmokeStrikeIcon.png",
      videoPath: "/static/stratagemVideos/OrbitalSmokeStrikeVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/OrbitalSmokeStrikePreview.webp",
      type: stratagemTypes.bridge,
      price: 4000,
      obtainingLevel: 8,
      callTime: 1,
      useCount: 0,
      reloadTime: 100,
      keyCodes: [68, 68, 83, 87],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 35,
      iconPath: "/static/stratagems/HMGEmplacementIcon.png",
      videoPath: "/static/stratagemVideos/HMGEmplacementVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/HMGEmplacementPreview.webp",
      type: stratagemTypes.bridge,
      price: 10000,
      obtainingLevel: 10,
      callTime: 3,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 87, 65, 68, 68, 65],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 36,
      iconPath: "/static/stratagems/ShieldGeneratorRelayIcon.png",
      videoPath: "/static/stratagemVideos/ShieldGeneratorRelayVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/ShieldGeneratorRelayPreview.webp",
      type: stratagemTypes.bridge,
      price: 9000,
      obtainingLevel: 10,
      callTime: 0,
      useCount: 0,
      reloadTime: 90,
      keyCodes: [83, 83, 65, 68, 65, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 37,
      iconPath: "/static/stratagems/TeslaTowerIcon.png",
      videoPath: "/static/stratagemVideos/TeslaTowerVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/TeslaTowerPreview.webp",
      type: stratagemTypes.bridge,
      price: 8000,
      obtainingLevel: 15,
      callTime: 3,
      useCount: 0,
      reloadTime: 150,
      keyCodes: [83, 87, 68, 87, 65, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 38,
      iconPath: "/static/stratagems/GrenadierBattlement.png",
      videoPath: "/static/stratagemVideos/GrenadierBattlementVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/GrenadierBattlementPreview.webp",
      type: stratagemTypes.bridge,
      price: 10000,
      obtainingLevel: 15,
      callTime: 8,
      useCount: 0,
      reloadTime: 120,
      keyCodes: [83, 68, 83, 65, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 39,
      iconPath: "/static/stratagems/AntiPersonnelMinefieldIcon.png",
      videoPath: "/static/stratagemVideos/AntiPersonnelMinefieldVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/AntiPersonnelMinefieldPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 1500,
      obtainingLevel: 2,
      callTime: 3,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 65, 87, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 40,
      iconPath: "/static/stratagems/SupplyPackIcon.png",
      videoPath: "/static/stratagemVideos/SupplyPackVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/SupplyPackPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 4000,
      obtainingLevel: 3,
      callTime: 5,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 83, 87, 87, 83],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 41,
      iconPath: "/static/stratagems/GrenadeLauncherIcon.png",
      videoPath: "/static/stratagemVideos/GrenadeLauncherVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/GrenadeLauncherPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 6000,
      obtainingLevel: 4,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 87, 65, 83],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 42,
      iconPath: "/static/stratagems/LaserCannonIcon.png",
      videoPath: "/static/stratagemVideos/LaserCannonVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/LaserCannonPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 4000,
      obtainingLevel: 5,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 83, 87, 65],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 43,
      iconPath: "/static/stratagems/IncendiaryMinesIcon.png",
      videoPath: "/static/stratagemVideos/IncendiaryMinesVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/IncendiaryMinesPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 4000,
      obtainingLevel: 8,
      callTime: 3,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 65, 65, 83],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 44,
      iconPath: "/static/stratagems/GuardDogRoverIcon.png",
      videoPath: "/static/stratagemVideos/GuardDogRoverVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/GuardDogRoverPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 7500,
      obtainingLevel: 10,
      callTime: 5,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 87, 65, 87, 68, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 45,
      iconPath: "/static/stratagems/BallisticShieldBackpackIcon.png",
      videoPath: "/static/stratagemVideos/BallisticShieldBackpackVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/BallisticShieldBackpackPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 6000,
      obtainingLevel: 12,
      callTime: 5,
      useCount: 0,
      reloadTime: 300,
      keyCodes: [83, 65, 83, 83, 87, 65],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 46,
      iconPath: "/static/stratagems/ArcThrowerIcon.png",
      videoPath: "/static/stratagemVideos/ArcThrowerVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/ArcThrowerPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 7000,
      obtainingLevel: 15,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 68, 83, 87, 65, 65],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 47,
      iconPath: "/static/stratagems/AntiTankMines.png",
      videoPath: "/static/stratagemVideos/AntiTankMines.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/AntiTankMines.webp",
      type: stratagemTypes.engineeringBay,
      price: 7000,
      obtainingLevel: 15,
      callTime: 3,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 65, 87, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 48,
      iconPath: "/static/stratagems/QuasarCannonIcon.png",
      videoPath: "/static/stratagemVideos/QuasarCannonVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/QuasarCannonPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 7500,
      obtainingLevel: 18,
      callTime: 3,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 83, 87, 65, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 49,
      iconPath: "/static/stratagems/ShieldGeneratorPackIcon.png",
      videoPath: "/static/stratagemVideos/ShieldGeneratorPackVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/ShieldGeneratorPackPreview.webp",
      type: stratagemTypes.engineeringBay,
      price: 10000,
      obtainingLevel: 20,
      callTime: 5,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 87, 65, 68, 65, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 50,
      iconPath: "/static/stratagems/MachineGunSentryIcon.png",
      videoPath: "/static/stratagemVideos/MachineGunSentryVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/MachineGunSentryPreview.webp",
      type: stratagemTypes.roboticsWorkshop,
      price: 1500,
      obtainingLevel: 2,
      callTime: 0,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 87, 68, 68, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 51,
      iconPath: "/static/stratagems/GatlingSentryIcon.png",
      videoPath: "/static/stratagemVideos/GatlingSentryVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/GatlingSentryPreview.webp",
      type: stratagemTypes.roboticsWorkshop,
      price: 4000,
      obtainingLevel: 5,
      callTime: 0,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 87, 68, 65],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 52,
      iconPath: "/static/stratagems/MortarSentryIcon.png",
      videoPath: "/static/stratagemVideos/MortarSentryVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/MortarSentryPreview.webp",
      type: stratagemTypes.roboticsWorkshop,
      price: 7000,
      obtainingLevel: 8,
      callTime: 0,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 87, 68, 68, 83],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 53,
      iconPath: "/static/stratagems/GuardDogIcon.png",
      videoPath: "/static/stratagemVideos/GuardDogVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/GuardDogPreview.webp",
      type: stratagemTypes.roboticsWorkshop,
      price: 7500,
      obtainingLevel: 10,
      callTime: 5,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 87, 65, 87, 68, 83],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 54,
      iconPath: "/static/stratagems/AutocannonSentryIcon.png",
      videoPath: "/static/stratagemVideos/AutocannonSentryVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/AutocannonSentryPreview.webp",
      type: stratagemTypes.roboticsWorkshop,
      price: 6000,
      obtainingLevel: 13,
      callTime: 0,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 87, 68, 87, 65, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 55,
      iconPath: "/static/stratagems/RocketSentryIcon.png",
      videoPath: "/static/stratagemVideos/RocketSentryVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/RocketSentryPreview.webp",
      type: stratagemTypes.roboticsWorkshop,
      price: 7500,
      obtainingLevel: 15,
      callTime: 0,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 87, 68, 68, 65],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 56,
      iconPath: "/static/stratagems/EMSMortarSentryIcon.png",
      videoPath: "/static/stratagemVideos/EMSMortarSentryVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/EMSMortarSentryPreview.webp",
      type: stratagemTypes.roboticsWorkshop,
      price: 8000,
      obtainingLevel: 20,
      callTime: 0,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 87, 68, 83, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 57,
      iconPath: "/static/stratagems/PatriotExosuitIcon.png",
      videoPath: "/static/stratagemVideos/PatriotExosuitVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/PatriotExosuitPreview.webp",
      type: stratagemTypes.roboticsWorkshop,
      price: 20000,
      obtainingLevel: 25,
      callTime: 0,
      useCount: 2,
      reloadTime: 600,
      keyCodes: [65, 83, 68, 87, 65, 83, 83],
      directions: [
        {
          id: 1,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 7,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 58,
      iconPath: "/static/stratagems/EmancipatorExosuitIcon.png",
      videoPath: "/static/stratagemVideos/EmancipatorExosuitVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/EmancipatorExosuitPreview.webp",
      type: stratagemTypes.roboticsWorkshop,
      price: 20000,
      obtainingLevel: 25,
      callTime: 0,
      useCount: 2,
      reloadTime: 600,
      keyCodes: [65, 83, 68, 87, 65, 83, 87],
      directions: [
        {
          id: 1,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 7,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 59,
      iconPath: "/static/stratagems/Sterilizer.png",
      videoPath: "/static/stratagemVideos/Sterilizer.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/Sterilizer.webp",
      type: stratagemTypes.warbonds,
      price: 85,
      obtainingLevel: 100,
      callTime: 8,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 65, 87, 83, 65],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
      ],
    },
    {
      id: 60,
      iconPath: "/static/stratagems/DogBreath.png",
      videoPath: "/static/stratagemVideos/DogBreath.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/DogBreath.webp",
      type: stratagemTypes.warbonds,
      price: 110,
      obtainingLevel: 100,
      callTime: 10,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 87, 65, 87, 68, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 61,
      iconPath: "/static/stratagems/DirectionalShield.png",
      videoPath: "/static/stratagemVideos/DirectionalShield.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/DirectionalShield.webp",
      type: stratagemTypes.warbonds,
      price: 75,
      obtainingLevel: 100,
      callTime: 10,
      useCount: 0,
      reloadTime: 300,
      keyCodes: [83, 87, 65, 68, 87, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 62,
      iconPath: "/static/stratagems/FlameSentry.png",
      videoPath: "/static/stratagemVideos/FlameSentry.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/FlameSentry.webp",
      type: stratagemTypes.warbonds,
      price: 85,
      obtainingLevel: 100,
      callTime: 3,
      useCount: 0,
      reloadTime: 150,
      keyCodes: [83, 87, 68, 83, 87, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 63,
      iconPath: "/static/stratagems/AntiTankEmplacement.png",
      videoPath: "/static/stratagemVideos/AntiTankEmplacement.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/AntiTankEmplacement.webp",
      type: stratagemTypes.warbonds,
      price: 110,
      obtainingLevel: 100,
      callTime: 3,
      useCount: 0,
      reloadTime: 180,
      keyCodes: [83, 87, 65, 68, 68, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 64,
      iconPath: "/static/stratagems/PortableHellbomb.png",
      videoPath: "/static/stratagemVideos/PortableHellbombVideo.mp4",
      videoPreviewPath:
        "/static/stratagemVideoPreviews/PortableHellbombPreview.webp",
      type: stratagemTypes.warbonds,
      price: 110,
      obtainingLevel: 100,
      callTime: 10,
      useCount: 0,
      reloadTime: 300,
      keyCodes: [83, 68, 87, 87, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 65,
      iconPath: "/static/stratagems/HoverPack.png",
      videoPath: "/static/stratagemVideos/HoverPackVideo.mp4",
      videoPreviewPath: "/static/stratagemVideoPreviews/HoverPackPreview.webp",
      type: stratagemTypes.warbonds,
      price: 110,
      obtainingLevel: 100,
      callTime: 10,
      useCount: 0,
      reloadTime: 480,
      keyCodes: [83, 87, 87, 83, 65, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 66,
      iconPath: "/static/stratagems/ReinforceIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [87, 83, 68, 65, 87],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 67,
      iconPath: "/static/stratagems/SOSBeaconIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [87, 83, 68, 87],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 68,
      iconPath: "/static/stratagems/ResupplyIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [83, 83, 87, 68],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 69,
      iconPath: "/static/stratagems/SuperEarthFlagIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [83, 87, 83, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 70,
      iconPath: "/static/stratagems/UploadDataIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [65, 68, 87, 87, 87],
      directions: [
        {
          id: 1,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 71,
      iconPath: "/static/stratagems/UploadDataIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [83, 83, 83, 87, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 72,
      iconPath: "/static/stratagems/HellbombIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [83, 87, 65, 83, 87, 68, 83, 87],
      directions: [
        {
          id: 1,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 7,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 8,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
    {
      id: 73,
      iconPath: "/static/stratagems/SEAFArtilleryIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [68, 87, 87, 83],
      directions: [
        {
          id: 1,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 74,
      iconPath: "/static/stratagems/SeismicProbeIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [87, 87, 65, 68, 83, 83],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 75,
      iconPath: "/static/stratagems/DarkFluidIcon.png",
      type: stratagemTypes.mission,
      keyCodes: [87, 65, 68, 68, 83, 87, 87],
      directions: [
        {
          id: 1,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 2,
          orientation: 4,
          isPressed: false,
        },
        {
          id: 3,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 4,
          orientation: 2,
          isPressed: false,
        },
        {
          id: 5,
          orientation: 3,
          isPressed: false,
        },
        {
          id: 6,
          orientation: 1,
          isPressed: false,
        },
        {
          id: 7,
          orientation: 1,
          isPressed: false,
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentStratagem = (
    stratagem: Stratagem | SuperDestroyerStratagem,
    isNewStratagem: boolean,
  ) => {
    isNewStratagem
      ? (this.currentStratagem = {
          ...stratagem,
          directions: stratagem.directions.map((direction: Direction) => {
            return { ...direction, isPressed: false };
          }),
        })
      : (this.currentStratagem = stratagem);
  };

  setNextStratagemsArray = (
    stratagemsArray: Stratagem[] | SuperDestroyerStratagem[],
  ) => {
    this.nextStratagemsArray = stratagemsArray;
  };
}

export const stratagemStore = new StratagemStore();
