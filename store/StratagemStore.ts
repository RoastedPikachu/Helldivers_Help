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
      iconPath: "/static/Stratagems/MachineGunIcon.png",
      videoPath: "/static/StratagemVideos/MachineGunVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/MachineGunPreview.webp",
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
      iconPath: "/static/Stratagems/AntiMaterialRifleIcon.png",
      videoPath: "/static/StratagemVideos/AntiMaterialRifleVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/AntiMaterialRiflePreview.webp",
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
      iconPath: "/static/Stratagems/LightMachineGunIcon.png",
      videoPath: "/static/StratagemVideos/StalwartVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/StalwartPreview.webp",
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
      iconPath: "/static/Stratagems/ExpendableAntiTankIcon.png",
      videoPath: "/static/StratagemVideos/ExpendableAntiTankVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/ExpendableAntiTankPreview.webp",
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
      iconPath: "/static/Stratagems/RecoilnessRifleIcon.png",
      videoPath: "/static/StratagemVideos/RecoilnessRifleVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/RecoilnessRiflePreview.webp",
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
      iconPath: "/static/Stratagems/FlamethrowerIcon.png",
      videoPath: "/static/StratagemVideos/FlamethrowerVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/FlamethrowerPreview.webp",
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
      iconPath: "/static/Stratagems/AutocannonIcon.png",
      videoPath: "/static/StratagemVideos/AutocannonVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/AutocannonPreview.webp",
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
      iconPath: "/static/Stratagems/HeavyMachineGunIcon.png",
      videoPath: "/static/StratagemVideos/HeavyMachineGunVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/HeavyMachineGunPreview.webp",
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
      iconPath: "/static/Stratagems/Rl77Icon.png",
      videoPath: "/static/StratagemVideos/Rl77Video.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/Rl77Preview.jpg",
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
      iconPath: "/static/Stratagems/Commando.png",
      videoPath: "/static/StratagemVideos/RailgunVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/RailgunPreview.webp",
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
      id: 11,
      iconPath: "/static/Stratagems/RelsaGunIcon.png",
      videoPath: "/static/StratagemVideos/RailgunVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/RailgunPreview.webp",
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
      iconPath: "/static/Stratagems/SpearIcon.png",
      videoPath: "/static/StratagemVideos/SpearVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/SpearPreview.webp",
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
      iconPath: "/static/Stratagems/WASP.png",
      videoPath: "/static/StratagemVideos/SpearVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/SpearPreview.webp",
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
      id: 14,
      iconPath: "/static/Stratagems/OrbitalGatlingBarrageIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalGatlingBarrageVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalGatlingBarragePreview.webp",
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
      iconPath: "/static/Stratagems/OrbitalAirburstStrikeIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalAirburstStrikeVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalAirburstStrikePreview.webp",
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
      iconPath: "/static/Stratagems/Orbital120mmHEBarrageIcon.png",
      videoPath: "/static/StratagemVideos/Orbital120mmHEBarrageVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/Orbital120mmHEBarragePreview.webp",
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
      iconPath: "/static/Stratagems/Orbital380mmHEBarrageIcon.png",
      videoPath: "/static/StratagemVideos/Orbital380mmHEBarrageVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/Orbital380mmHEBarragePreview.webp",
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
      iconPath: "/static/Stratagems/OrbitalWalkingBarrageIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalWalkingBarrageVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalWalkingBarragePreview.webp",
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
      iconPath: "/static/Stratagems/OrbitalLaserIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalLaserVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalLaserPreview.webp",
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
      iconPath: "/static/Stratagems/OrbitalLaserIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalLaserVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalLaserPreview.webp",
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
      id: 21,
      iconPath: "/static/Stratagems/OrbitalRailcannonStrikeIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalRailcannonStrikeVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalRailcannonStrikePreview.webp",
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
      iconPath: "/static/Stratagems/EagleStrafingRunIcon.png",
      videoPath: "/static/StratagemVideos/EagleStrafingRunVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/EagleStrafingRunPreview.webp",
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
      iconPath: "/static/Stratagems/EagleAirstrikeIcon.png",
      videoPath: "/static/StratagemVideos/EagleAirstrikeVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/EagleAirstrikePreview.webp",
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
      iconPath: "/static/Stratagems/EagleClusterBombIcon.png",
      videoPath: "/static/StratagemVideos/EagleClusterBombVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/EagleClusterBombPreview.webp",
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
      iconPath: "/static/Stratagems/EagleNapalmAirstrikeIcon.png",
      videoPath: "/static/StratagemVideos/EagleNapalmAirstrikeVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/EagleNapalmAirstrikePreview.webp",
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
      iconPath: "/static/Stratagems/JumpPackIcon.png",
      videoPath: "/static/StratagemVideos/JumpPackVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/JumpPackPreview.webp",
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
      iconPath: "/static/Stratagems/EagleSmokeStrikeIcon.png",
      videoPath: "/static/StratagemVideos/EagleSmokeStrikeVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/EagleSmokeStrikePreview.webp",
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
      iconPath: "/static/Stratagems/Eagle110mmRocketPodIcon.png",
      videoPath: "/static/StratagemVideos/Eagle110mmRocketPodVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/Eagle110mmRocketPodPreview.webp",
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
      iconPath: "/static/Stratagems/Eagle500kgBombIcon.png",
      videoPath: "/static/StratagemVideos/Eagle500kgBombVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/Eagle500kgBombPreview.webp",
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
      iconPath: "/static/Stratagems/M102.png",
      videoPath: "/static/StratagemVideos/Eagle500kgBombVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/Eagle500kgBombPreview.webp",
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
      id: 31,
      iconPath: "/static/Stratagems/OrbitalPrecisionStrikeIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalPrecisionStrikeVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalPrecisionStrikePreview.webp",
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
      iconPath: "/static/Stratagems/OrbitalGasStrikeIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalGasStrikeVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalGasStrikePreview.webp",
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
      iconPath: "/static/Stratagems/OrbitalEMSStrikeIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalEMSStrikeVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalEMSStrikePreview.webp",
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
      iconPath: "/static/Stratagems/OrbitalSmokeStrikeIcon.png",
      videoPath: "/static/StratagemVideos/OrbitalSmokeStrikeVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/OrbitalSmokeStrikePreview.webp",
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
      iconPath: "/static/Stratagems/HMGEmplacementIcon.png",
      videoPath: "/static/StratagemVideos/HMGEmplacementVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/HMGEmplacementPreview.webp",
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
      iconPath: "/static/Stratagems/ShieldGeneratorRelayIcon.png",
      videoPath: "/static/StratagemVideos/ShieldGeneratorRelayVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/ShieldGeneratorRelayPreview.webp",
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
      iconPath: "/static/Stratagems/TeslaTowerIcon.png",
      videoPath: "/static/StratagemVideos/TeslaTowerVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/TeslaTowerPreview.webp",
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
      iconPath: "/static/Stratagems/AntiPersonnelMinefieldIcon.png",
      videoPath: "/static/StratagemVideos/AntiPersonnelMinefieldVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/AntiPersonnelMinefieldPreview.webp",
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
      id: 39,
      iconPath: "/static/Stratagems/SupplyPackIcon.png",
      videoPath: "/static/StratagemVideos/SupplyPackVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/SupplyPackPreview.webp",
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
      id: 40,
      iconPath: "/static/Stratagems/GrenadeLauncherIcon.png",
      videoPath: "/static/StratagemVideos/GrenadeLauncherVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/GrenadeLauncherPreview.webp",
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
      id: 41,
      iconPath: "/static/Stratagems/LaserCannonIcon.png",
      videoPath: "/static/StratagemVideos/LaserCannonVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/LaserCannonPreview.webp",
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
      id: 42,
      iconPath: "/static/Stratagems/IncendiaryMinesIcon.png",
      videoPath: "/static/StratagemVideos/IncendiaryMinesVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/IncendiaryMinesPreview.webp",
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
      id: 43,
      iconPath: "/static/Stratagems/GuardDogRoverIcon.png",
      videoPath: "/static/StratagemVideos/GuardDogRoverVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/GuardDogRoverPreview.webp",
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
      id: 44,
      iconPath: "/static/Stratagems/BallisticShieldBackpackIcon.png",
      videoPath: "/static/StratagemVideos/BallisticShieldBackpackVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/BallisticShieldBackpackPreview.webp",
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
      id: 45,
      iconPath: "/static/Stratagems/ArcThrowerIcon.png",
      videoPath: "/static/StratagemVideos/ArcThrowerVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/ArcThrowerPreview.webp",
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
      id: 46,
      iconPath: "/static/Stratagems/AntiTankMines.png",
      videoPath: "/static/StratagemVideos/QuasarCannonVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/QuasarCannonPreview.webp",
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
      id: 47,
      iconPath: "/static/Stratagems/QuasarCannonIcon.png",
      videoPath: "/static/StratagemVideos/QuasarCannonVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/QuasarCannonPreview.webp",
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
      id: 48,
      iconPath: "/static/Stratagems/ShieldGeneratorPackIcon.png",
      videoPath: "/static/StratagemVideos/ShieldGeneratorPackVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/ShieldGeneratorPackPreview.webp",
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
      id: 49,
      iconPath: "/static/Stratagems/MachineGunSentryIcon.png",
      videoPath: "/static/StratagemVideos/MachineGunSentryVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/MachineGunSentryPreview.webp",
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
      id: 50,
      iconPath: "/static/Stratagems/GatlingSentryIcon.png",
      videoPath: "/static/StratagemVideos/GatlingSentryVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/GatlingSentryPreview.webp",
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
      id: 51,
      iconPath: "/static/Stratagems/MortarSentryIcon.png",
      videoPath: "/static/StratagemVideos/MortarSentryVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/MortarSentryPreview.webp",
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
      id: 52,
      iconPath: "/static/Stratagems/GuardDogIcon.png",
      videoPath: "/static/StratagemVideos/GuardDogVideo.mp4",
      videoPreviewPath: "/static/StratagemVideoPreviews/GuardDogPreview.webp",
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
      id: 53,
      iconPath: "/static/Stratagems/AutocannonSentryIcon.png",
      videoPath: "/static/StratagemVideos/AutocannonSentryVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/AutocannonSentryPreview.webp",
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
      id: 54,
      iconPath: "/static/Stratagems/RocketSentryIcon.png",
      videoPath: "/static/StratagemVideos/RocketSentryVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/RocketSentryPreview.webp",
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
      id: 55,
      iconPath: "/static/Stratagems/EMSMortarSentryIcon.png",
      videoPath: "/static/StratagemVideos/EMSMortarSentryVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/EMSMortarSentryPreview.webp",
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
      id: 56,
      iconPath: "/static/Stratagems/PatriotExosuitIcon.png",
      videoPath: "/static/StratagemVideos/PatriotExosuitVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/PatriotExosuitPreview.webp",
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
      id: 57,
      iconPath: "/static/Stratagems/EmancipatorExosuitIcon.png",
      videoPath: "/static/StratagemVideos/EmancipatorExosuitVideo.mp4",
      videoPreviewPath:
        "/static/StratagemVideoPreviews/EmancipatorExosuitPreview.webp",
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
      id: 58,
      iconPath: "/static/Stratagems/Sterilizer.png",
      type: stratagemTypes.warbonds,
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
      id: 59,
      iconPath: "/static/Stratagems/DogBreath.png",
      type: stratagemTypes.warbonds,
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
      id: 60,
      iconPath: "/static/Stratagems/DirectionalShield.png",
      type: stratagemTypes.warbonds,
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
      id: 61,
      iconPath: "/static/Stratagems/FlameSentry.png",
      type: stratagemTypes.warbonds,
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
      id: 62,
      iconPath: "/static/Stratagems/AntiTankEmplacement.png",
      type: stratagemTypes.warbonds,
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
      id: 63,
      iconPath: "/static/Stratagems/ReinforceIcon.png",
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
      id: 64,
      iconPath: "/static/Stratagems/SOSBeaconIcon.png",
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
      id: 65,
      iconPath: "/static/Stratagems/ResupplyIcon.png",
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
      id: 66,
      iconPath: "/static/Stratagems/SuperEarthFlagIcon.png",
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
      id: 67,
      iconPath: "/static/Stratagems/UploadDataIcon.png",
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
      id: 68,
      iconPath: "/static/Stratagems/UploadDataIcon.png",
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
      id: 69,
      iconPath: "/static/Stratagems/HellbombIcon.png",
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
      id: 70,
      iconPath: "/static/Stratagems/SEAFArtilleryIcon.png",
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
      id: 71,
      iconPath: "/static/Stratagems/SeismicProbeIcon.png",
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
      id: 72,
      iconPath: "/static/Stratagems/DarkFluidIcon.png",
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
