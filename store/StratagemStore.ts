import { makeAutoObservable } from "mobx";

import { makePersistable } from "mobx-persist-store";

import { stratagemTypes } from "@/data/stratagemTypes";

import { Stratagem } from "@/utils/generalInterfaces";
import { getRandomEntity } from "@/utils/generalFunctions";

class StratagemStore {
  currentStratagem = {} as Stratagem;
  nextStratagemsArray = [] as Stratagem[];

  secondsInterval = undefined as ReturnType<typeof setInterval>;

  currentRoundNumber = 1;
  secondsLeft = 10;
  currentScore = 0;
  finalGameScore = 0;
  highestGameScore = 0;

  isRequiredKeyPressed = false;
  isGameStarted = false;
  isRoundEnded = false;
  isRoundLost = false;
  isStratagemInputSuccessful = false;
  isStratagemInputFail = false;

  stratagems = {
    patrioticAdministrationCenter: [
      {
        id: 1,
        iconPath: "/static/Stratagems/MachineGunIcon.png",
        videoPath: "/static/StratagemVideos/MachineGunVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/MachineGunPreview.webp",
        type: stratagemTypes.supportWeapon,
        name: "MG-43 «Пулемет»",
        description:
          "Стационарный пулемет. Обладает большой огневой мощью, но сильной отдачей и сниженной точностью.",
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
        name: "APW-1 «Крупнокалиберная винтовка»",
        description:
          "Крупнокалиберная снайперская винтовка, эффективно поражающая легкую бронированную технику на большом расстоянии. Используется только с прицелом.",
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
        name: "M-105 «Доблесть»",
        description:
          "Компактный пулемет малого калибра. Меньшая огневая мощь по сравнению с тяжелыми пулеметами компенсируется удобством использования и быстротой перезарядки.",
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
        name: "EAT-17 «Одноразовый бронебой»",
        description:
          "Одноразовое оружие, предназначенное для повреждения бронированной техники. Выбрасывается после использования.",
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
        name: "GR-8 «Безоткатная винтовка»",
        description:
          "Безоткатная винтовка, эффективно уничтожающая бронированную технику. В комплекте идет рюкзак поддержки для перезарядки.",
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
        name: "FLAM-40 «Огнемет»",
        description:
          "Зажигательное оружие ближнего боя. Поджигает врагов, ландшафт и легковоспламеняющихся союзников.",
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
        videoPreviewPath:
          "/static/StratagemVideoPreviews/AutocannonPreview.webp",
        type: stratagemTypes.supportWeapon,
        name: "AC-8 «Автопушка»",
        description:
          "Автоматическая пушка, эффективно уничтожающая легкую бронированную технику. Для перезарядки требуется прикладываемый рюкзак поддержки.",
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
        name: "MG-206 «Тяжелый пулемет»",
        description:
          "Очень мощный, но сложный в обращении пулемет с сильной отдачей.",
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
        name: "RL-77 «Ракетница с подрывом в воздухе»",
        description:
          "Выпускает ракету, которая взрывается при приближении к цели и разбрасывает множество взрывающихся бомб.",
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
        iconPath: "/static/Stratagems/RelsaGunIcon.png",
        videoPath: "/static/StratagemVideos/RailgunVideo.mp4",
        videoPreviewPath: "/static/StratagemVideoPreviews/RailgunPreview.webp",
        type: stratagemTypes.supportWeapon,
        name: "RS-422 «Рельсотрон»",
        description:
          "Экспериментальное оружие, отличающееся высокой бронепробивной способностью. Требует зарядки между выстрелами, так что выбирайте цели с умом.",
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
        iconPath: "/static/Stratagems/SpearIcon.png",
        videoPath: "/static/StratagemVideos/SpearVideo.mp4",
        videoPreviewPath: "/static/StratagemVideoPreviews/SpearPreview.webp",
        type: stratagemTypes.supportWeapon,
        name: "FAF-14 «Копье»",
        description:
          "Противотанковая ракета с самонаведением, которую нужно навести на цель перед запуском. Эффективна против больших и бронированных целей.",
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
    ],
    orbitalCannon: [
      {
        id: 1,
        iconPath: "/static/Stratagems/OrbitalGatlingBarrageIcon.png",
        videoPath: "/static/StratagemVideos/OrbitalGatlingBarrageVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/OrbitalGatlingBarragePreview.webp",
        type: stratagemTypes.orbital,
        name: "Орбитальный залп Гатлинга",
        description:
          "Залп фугасных снарядов из скорострельных вращающихся автопушек эсминца.",
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
        id: 2,
        iconPath: "/static/Stratagems/OrbitalAirburstStrikeIcon.png",
        videoPath: "/static/StratagemVideos/OrbitalAirburstStrikeVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/OrbitalAirburstStrikePreview.webp",
        type: stratagemTypes.orbital,
        name: "Орбитальная воздушная бомба",
        description:
          "Взрывающийся в воздухе снаряд, обрушивающий на землю град смертоносной шрапнели. Неэффективен против тяжелой брони.",
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
        id: 3,
        iconPath: "/static/Stratagems/Orbital120mmHEBarrageIcon.png",
        videoPath: "/static/StratagemVideos/Orbital120mmHEBarrageVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/Orbital120mmHEBarragePreview.webp",
        type: stratagemTypes.orbital,
        name: "Орбитальный залп 120-мм ОФ",
        description:
          "Высокоточный артиллерийский залп по небольшой площади, идеально подходящий для уничтожения сконцентрированных сил врага.",
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
        id: 4,
        iconPath: "/static/Stratagems/Orbital380mmHEBarrageIcon.png",
        videoPath: "/static/StratagemVideos/Orbital380mmHEBarrageVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/Orbital380mmHEBarragePreview.webp",
        type: stratagemTypes.orbital,
        name: "Орбитальный залп 380-мм ОФ",
        description:
          "Долгий залп, причиняющий огромные разрушения на большой площади. Рекомендуется уведомить союзников.",
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
        id: 5,
        iconPath: "/static/Stratagems/OrbitalWalkingBarrageIcon.png",
        videoPath: "/static/StratagemVideos/OrbitalWalkingBarrageVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/OrbitalWalkingBarragePreview.webp",
        type: stratagemTypes.orbital,
        name: "Орбитальный огневой вал",
        description:
          "Артиллерийский удар по линии, которая последовательно сдвигается, выдавливая врагов из укрытий и позволяя продвигаться вперед.",
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
        id: 6,
        iconPath: "/static/Stratagems/OrbitalLaserIcon.png",
        videoPath: "/static/StratagemVideos/OrbitalLaserVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/OrbitalLaserPreview.webp",
        type: stratagemTypes.orbital,
        name: "Орбитальный лазер",
        description:
          "Выстрел из лазерной пушки эсминца по выбранной зоне, испаряющий все цели в области действия.",
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
        id: 7,
        iconPath: "/static/Stratagems/OrbitalRailcannonStrikeIcon.png",
        videoPath: "/static/StratagemVideos/OrbitalRailcannonStrikeVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/OrbitalRailcannonStrikePreview.webp",
        type: stratagemTypes.orbital,
        name: "Орбитальный рельсотронный залп",
        description:
          "Высокоскоростной снаряд рельсотрона выпускается по крупнейшей цели рядом с маяком. Прицеливание выполняется автоматически.",
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
    ],
    hangar: [
      {
        id: 1,
        iconPath: "/static/Stratagems/EagleStrafingRunIcon.png",
        videoPath: "/static/StratagemVideos/EagleStrafingRunVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/EagleStrafingRunPreview.webp",
        type: stratagemTypes.hangar,
        name: "Орел: бреющий полет",
        description:
          "Атака на бреющем полете для зачистки малых целей. Может быть выполнена практически моментально.",
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
        id: 2,
        iconPath: "/static/Stratagems/EagleAirstrikeIcon.png",
        videoPath: "/static/StratagemVideos/EagleAirstrikeVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/EagleAirstrikePreview.webp",
        type: stratagemTypes.hangar,
        name: "Орел: воздушный налет",
        description: "Неприцельная бомбардировка, создающая вал взрывов.",
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
        id: 3,
        iconPath: "/static/Stratagems/EagleClusterBombIcon.png",
        videoPath: "/static/StratagemVideos/EagleClusterBombVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/EagleClusterBombPreview.webp",
        type: stratagemTypes.hangar,
        name: "Орел: кластерная бомба",
        description:
          "Прицельный удар с воздуха, недостаточно мощный, чтобы уничтожить постройки, но отлично справляющийся с малыми целями.",
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
        id: 4,
        iconPath: "/static/Stratagems/EagleNapalmAirstrikeIcon.png",
        videoPath: "/static/StratagemVideos/EagleNapalmAirstrikeVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/EagleNapalmAirstrikePreview.webp",
        type: stratagemTypes.hangar,
        name: "Орел: авиаудар напалмом",
        description:
          "Бомбардировка напалмом, создающая стену пламени, которая не позволит врагу продвинуться вперед.",
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
        id: 5,
        iconPath: "/static/Stratagems/JumpPackIcon.png",
        videoPath: "/static/StratagemVideos/JumpPackVideo.mp4",
        videoPreviewPath: "/static/StratagemVideoPreviews/JumpPackPreview.webp",
        type: stratagemTypes.hangar,
        name: "LIFT-850 «Реактивный ранец»",
        description:
          "Позволяет пользователю прыгать выше, чем допускает «гравитация» и «безопасность». Требует зарядки перед использованием.",
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
        id: 6,
        iconPath: "/static/Stratagems/EagleSmokeStrikeIcon.png",
        videoPath: "/static/StratagemVideos/EagleSmokeStrikeVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/EagleSmokeStrikePreview.webp",
        type: stratagemTypes.hangar,
        name: "Орел: дымовая завеса",
        description:
          "Бомбардировка дымовыми гранатами, создающая плотную дымовую завесу, которая блокирует врагу обзор.",
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
        id: 7,
        iconPath: "/static/Stratagems/Eagle110mmRocketPodIcon.png",
        videoPath: "/static/StratagemVideos/Eagle110mmRocketPodVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/Eagle110mmRocketPodPreview.webp",
        type: stratagemTypes.hangar,
        name: "Орел: 110-мм ракетные блоки",
        description:
          "Залп из ракетных блоков, выпускаемый пилотом «Орла» по крупнейшей цели рядом с маяком стратагемы.",
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
        id: 8,
        iconPath: "/static/Stratagems/Eagle500kgBombIcon.png",
        videoPath: "/static/StratagemVideos/Eagle500kgBombVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/Eagle500kgBombPreview.webp",
        type: stratagemTypes.hangar,
        name: "Орел: бомба [500 кг]",
        description:
          "Большая бомба, способная уничтожить практически любую цель в точке взрыва. Не забудьте покинуть зону удара.",
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
    ],
    bridge: [
      {
        id: 1,
        iconPath: "/static/Stratagems/OrbitalPrecisionStrikeIcon.png",
        videoPath: "/static/StratagemVideos/OrbitalPrecisionStrikeVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/OrbitalPrecisionStrikePreview.webp",
        type: stratagemTypes.bridge,
        name: "Орбитальный высокоточный удар",
        description: "Один меткий выстрел из пушки «АТЛАС» эсминца",
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
        id: 2,
        iconPath: "/static/Stratagems/OrbitalGasStrikeIcon.png",
        videoPath: "/static/StratagemVideos/OrbitalGasStrikeVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/OrbitalGasStrikePreview.webp",
        type: stratagemTypes.bridge,
        name: "Орбитальный газовый удар",
        description:
          "Снаряд, выпускающий облако едкого газа, наносящего урон как органическим, так и механическим существам.",
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
        id: 3,
        iconPath: "/static/Stratagems/OrbitalEMSStrikeIcon.png",
        videoPath: "/static/StratagemVideos/OrbitalEMSStrikeVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/OrbitalEMSStrikePreview.webp",
        type: stratagemTypes.bridge,
        name: "Орбитальный эм-удар",
        description:
          "«Несмертельное оружие», предназначенное для изменения поведения врага. Снаряд на время оглушает все цели в зоне удара.",
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
        id: 4,
        iconPath: "/static/Stratagems/OrbitalSmokeStrikeIcon.png",
        videoPath: "/static/StratagemVideos/OrbitalSmokeStrikeVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/OrbitalSmokeStrikePreview.webp",
        type: stratagemTypes.bridge,
        name: "Орбитальная дымовая завеса",
        description:
          "Создает большое облако плотного дыма, перекрывающего целям обзор.",
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
        id: 5,
        iconPath: "/static/Stratagems/HMGEmplacementIcon.png",
        videoPath: "/static/StratagemVideos/HMGEmplacementVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/HMGEmplacementPreview.webp",
        type: stratagemTypes.bridge,
        name: "E/MG-101 «Огневая позиция: тяжелый пулемет»",
        description:
          "Укомплектованное укрепление, крайне эффективно уничтожающее легкобронированные цели. Медленно поворачивается, размещайте его с трудом.",
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
        id: 6,
        iconPath: "/static/Stratagems/ShieldGeneratorRelayIcon.png",
        videoPath: "/static/StratagemVideos/ShieldGeneratorRelayVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/ShieldGeneratorRelayPreview.webp",
        type: stratagemTypes.bridge,
        name: "FX-12 «Реле генератора щита»",
        description:
          "Стационарный энергетический щит, обеспечивающий защиту от снарядов. Время действия ограничено.",
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
        id: 7,
        iconPath: "/static/Stratagems/TeslaTowerIcon.png",
        videoPath: "/static/StratagemVideos/TeslaTowerVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/TeslaTowerPreview.webp",
        type: stratagemTypes.bridge,
        name: "A/ARC-3 «Тесла-башня»",
        description:
          "Турель, выпускающая электрические разряды по целям на близкой дистанции. Чтобы не попасть под огонь по своим, лягте на землю.",
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
    ],
    engineerBay: [
      {
        id: 1,
        iconPath: "/static/Stratagems/AntiPersonnelMinefieldIcon.png",
        videoPath: "/static/StratagemVideos/AntiPersonnelMinefieldVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/AntiPersonnelMinefieldPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "MD-6 «Противопехотные мины»",
        description:
          "Размещает оборонительное противопехотное минное поле, задерживающее наступление врага.",
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
        id: 2,
        iconPath: "/static/Stratagems/SupplyPackIcon.png",
        videoPath: "/static/StratagemVideos/SupplyPackVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/SupplyPackPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "B-1 «Рюкзак: боеприпасы»",
        description:
          "Ящики с боеприпасами, а также рюкзак, позволяющий пользователю раздавать их другим Адским Десантникам.",
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
        id: 3,
        iconPath: "/static/Stratagems/GrenadeLauncherIcon.png",
        videoPath: "/static/StratagemVideos/GrenadeLauncherVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/GrenadeLauncherPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "GL-21 «Гранатомет»",
        description:
          "Гранатомет, эффективно поражающий бронированную пехоту. Не предназначен для уничтожения бронированной техники или укреплений.",
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
        id: 4,
        iconPath: "/static/Stratagems/LaserCannonIcon.png",
        videoPath: "/static/StratagemVideos/LaserCannonVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/LaserCannonPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "LAS-98 «Лазерная пушка»",
        description:
          "Лазерное оружие, стреляющее непрерывным лучом. Не требует перезарядки, но в случае перегрева нужно заменить радиатор.",
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
        id: 5,
        iconPath: "/static/Stratagems/IncendiaryMinesIcon.png",
        videoPath: "/static/StratagemVideos/IncendiaryMinesVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/IncendiaryMinesPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "MD-14 «Зажигательные мины»",
        description:
          "Размещает оборонительное зажигательное минное поле, при активации поджигающее цели и ландшафт.",
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
        id: 6,
        iconPath: "/static/Stratagems/GuardDogRoverIcon.png",
        videoPath: "/static/StratagemVideos/GuardDogRoverVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/GuardDogRoverPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "AX/LAS-5 «Аппарат: сторожевой пес»",
        description:
          "Автономный дрон, оснащенный лазерной винтовкой и обеспечивающий всестороннее прикрытие. Возвращается в рюкзак для перезарядки.",
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
        id: 7,
        iconPath: "/static/Stratagems/BallisticShieldBackpackIcon.png",
        videoPath: "/static/StratagemVideos/BallisticShieldBackpackVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/BallisticShieldBackpackPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "SH-20 «Рюкзак: баллистический щит»",
        description:
          "Рюкзак, который можно использовать в качестве одноручного баллистического щита. Защищает от снарядов малого калибра.",
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
        id: 8,
        iconPath: "/static/Stratagems/ArcThrowerIcon.png",
        videoPath: "/static/StratagemVideos/ArcThrowerVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/ArcThrowerPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "ARC-3 «Дуговой метатель»",
        description:
          "Выстреливает электрическую дугу на близком расстоянии. Заряжается для стрельбы молниями, способными поразить несколько целей.",
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
        id: 9,
        iconPath: "/static/Stratagems/QuasarCannonIcon.png",
        videoPath: "/static/StratagemVideos/QuasarCannonVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/QuasarCannonPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "LAS-99 Пушка «Квазар»",
        description:
          "Заряжается и выпускает мощный взрывающийся сгусток энергии. После выстрела долго перезаряжается.",
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
        id: 10,
        iconPath: "/static/Stratagems/ShieldGeneratorPackIcon.png",
        videoPath: "/static/StratagemVideos/ShieldGeneratorPackVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/ShieldGeneratorPackPreview.webp",
        type: stratagemTypes.engineeringBay,
        name: "SH-32 «Генератор щита»",
        description:
          "Окружает пользователя сферическим щитом, который блокирует высокоскоростные снаряды. Время действия ограничено.",
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
    ],
    roboticsWorkshop: [
      {
        id: 1,
        iconPath: "/static/Stratagems/MachineGunSentryIcon.png",
        videoPath: "/static/StratagemVideos/MachineGunSentryVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/MachineGunSentryPreview.webp",
        type: stratagemTypes.roboticsWorkshop,
        name: "A/MG-43 «Пулеметная турель»",
        description:
          "Маневренная автоматическая пулеметная турель. Будет вести огонь по целям, даже если на линии стрельбы будут Адские Десантники.",
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
        id: 2,
        iconPath: "/static/Stratagems/GatlingSentryIcon.png",
        videoPath: "/static/StratagemVideos/GatlingSentryVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/GatlingSentryPreview.webp",
        type: stratagemTypes.roboticsWorkshop,
        name: "A/G-16 «Турель Гатлинга»",
        description:
          "Автоматическая турель, обладающая крайне высокой скорострельностью. Внимание: не имеет системы распознавания «свой-чужой».",
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
        id: 3,
        iconPath: "/static/Stratagems/MortarSentryIcon.png",
        videoPath: "/static/StratagemVideos/MortarSentryVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/MortarSentryPreview.webp",
        type: stratagemTypes.roboticsWorkshop,
        name: "A/M-12 «Турель с минометом»",
        description:
          "Турель, выпускающая мощные снаряды по высокой дуге. Эффективна на большом расстоянии и может поражать цели за укрытиями.",
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
        id: 4,
        iconPath: "/static/Stratagems/GuardDogIcon.png",
        videoPath: "/static/StratagemVideos/GuardDogVideo.mp4",
        videoPreviewPath: "/static/StratagemVideoPreviews/GuardDogPreview.webp",
        type: stratagemTypes.roboticsWorkshop,
        name: "AX/AR-23 «Сторожевой пес»",
        description:
          "Автономный дрон, оснащенный штурмовой винтовкой «Освободитель» и обеспечивающий всестороннее прикрытие. Возвращается в рюкзак для перезарядки.",
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
        id: 5,
        iconPath: "/static/Stratagems/AutocannonSentryIcon.png",
        videoPath: "/static/StratagemVideos/AutocannonSentryVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/AutocannonSentryPreview.webp",
        type: stratagemTypes.roboticsWorkshop,
        name: "A/AC-8 «Турель с автопушкой»",
        description:
          "Автоматическая пушка-турель посылает противотанковые снаряды на большое расстояние. Сниженная маневренность компенсируется дальностью и мощью стрельбы.",
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
        id: 6,
        iconPath: "/static/Stratagems/RocketSentryIcon.png",
        videoPath: "/static/StratagemVideos/RocketSentryVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/RocketSentryPreview.webp",
        type: stratagemTypes.roboticsWorkshop,
        name: "A/MLS-4X «Ракетная турель»",
        description:
          "Мощная автоматическая турель, эффективно поражающая бронированные цели. В основном целится в крупных врагов.",
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
        id: 7,
        iconPath: "/static/Stratagems/EMSMortarSentryIcon.png",
        videoPath: "/static/StratagemVideos/EMSMortarSentryVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/EMSMortarSentryPreview.webp",
        type: stratagemTypes.roboticsWorkshop,
        name: "A/M-23 «Турель с эм-минометом»",
        description:
          "Турель разбрасывает генераторы статического поля, замедляющие продвижение врага.",
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
        id: 8,
        iconPath: "/static/Stratagems/PatriotExosuitIcon.png",
        videoPath: "/static/StratagemVideos/PatriotExosuitVideo.mp4",
        videoPreviewPath:
          "/static/StratagemVideoPreviews/PatriotExosuitPreview.webp",
        type: stratagemTypes.roboticsWorkshop,
        name: "EXO-45 Экзокостюм «патриот»",
        description:
          "Тяжелобронированный экзокостюм, оснащенный гранатометом и тяжелым пулеметом.",
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
    ],
    general: [
      {
        id: 1,
        iconPath: "/static/Stratagems/ReinforceIcon.png",
        type: stratagemTypes.mission,
        name: "Подкрепление",
        description:
          "Подкрепление из 1 нового и готового к тяжелой битве Адского Десантника.",
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
        id: 2,
        iconPath: "/static/Stratagems/SOSBeaconIcon.png",
        type: stratagemTypes.mission,
        name: "SOS маячок",
        description:
          "Маяк, который своим ярким светом прорезает небеса и является призывом о помощи всем ближайшим Адским Десантникам.",
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
        id: 3,
        iconPath: "/static/Stratagems/ResupplyIcon.png",
        type: stratagemTypes.mission,
        name: "Припасы",
        description:
          "Капсуля с патронами, гранатами и стимами на полную команду, состоящую из 4 Адских Десантников.",
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
        id: 4,
        iconPath: "/static/Stratagems/SuperEarthFlagIcon.png",
        type: stratagemTypes.mission,
        name: "Флаг Супер-Земли",
        description:
          "Символ, олицетворяющий собой процветание, свободу и управляемую демократию.",
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
        id: 5,
        iconPath: "/static/Stratagems/UploadDataIcon.png",
        type: stratagemTypes.mission,
        name: "Загрузить данные",
        description:
          "Старт загрузки данных, так сильно необходимых Супер-Земле.",
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
        id: 6,
        iconPath: "/static/Stratagems/UploadDataIcon.png",
        type: stratagemTypes.mission,
        name: "Доставка диска",
        description:
          "Доставка стратегического диска с программой, позволяющей выполнять разноплановые задачи.",
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
        id: 7,
        iconPath: "/static/Stratagems/HellbombIcon.png",
        type: stratagemTypes.mission,
        name: "Адская бомба",
        description:
          "Самое мощное вооружение для уничтожения сооружений и противников демократии.",
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
        id: 8,
        iconPath: "/static/Stratagems/SEAFArtilleryIcon.png",
        type: stratagemTypes.mission,
        name: "Артиллерия ВССЗ",
        description:
          "Артиллерия, мощные снаряды которой могут оказать существенную огневую поддержку на поле боя.",
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
        id: 9,
        iconPath: "/static/Stratagems/SeismicProbeIcon.png",
        type: stratagemTypes.mission,
        name: "Сейсмический зонд",
        description:
          "Зонд для сканирования глубин планет и метеоров. Помогает найти нужные ресурсы для последующей добычи.",
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
    ],
  };

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      makePersistable(this, {
        name: "StratagemsStore",
        properties: ["highestGameScore"],
        storage: window.localStorage,
      });
    }
  }

  restartStratagemInput = () => {
    this.currentStratagem.directions.map(
      (direction) => (direction.isPressed = false),
    );
  };

  handleRoundEnd = () => {
    this.isRoundEnded = true;

    clearInterval(this.secondsInterval);

    this.stratagems.patrioticAdministrationCenter.map((stratagem) =>
      stratagem.directions.forEach(
        (direction) => (direction.isPressed = false),
      ),
    );
    this.stratagems.orbitalCannon.map((stratagem) =>
      stratagem.directions.forEach(
        (direction) => (direction.isPressed = false),
      ),
    );
    this.stratagems.hangar.map((stratagem) =>
      stratagem.directions.forEach(
        (direction) => (direction.isPressed = false),
      ),
    );
    this.stratagems.bridge.map((stratagem) =>
      stratagem.directions.forEach(
        (direction) => (direction.isPressed = false),
      ),
    );
    this.stratagems.engineerBay.map((stratagem) =>
      stratagem.directions.forEach(
        (direction) => (direction.isPressed = false),
      ),
    );
    this.stratagems.roboticsWorkshop.map((stratagem) =>
      stratagem.directions.forEach(
        (direction) => (direction.isPressed = false),
      ),
    );

    this.currentRoundNumber++;
    setTimeout(() => this.handleStratagemTrainingRoundStart(), 1500);
  };

  handleStratagemKeyPress = (() => {
    let currentIndex = 0;

    return (event: any) => {
      const targetKey = this.currentStratagem.keyCodes[currentIndex];

      if (event.keyCode === targetKey) {
        const updatedDirections = [...this.currentStratagem.directions];
        updatedDirections[currentIndex].isPressed = true;

        currentIndex++;

        if (currentIndex === this.currentStratagem.keyCodes.length) {
          this.currentScore += 20;
          currentIndex = 0;

          if (this.nextStratagemsArray.length) {
            setTimeout(() => {
              this.currentStratagem = this.nextStratagemsArray[0];
              this.nextStratagemsArray = this.nextStratagemsArray.slice(1);
            }, 250);
          } else {
            this.handleRoundEnd();
          }

          if (this.secondsLeft > 9) {
            this.secondsLeft = 10;
          } else {
            this.secondsLeft += 1;
          }

          this.isStratagemInputSuccessful = true;
        }

        this.currentStratagem = {
          ...this.currentStratagem,
          directions: updatedDirections,
        };
      } else {
        currentIndex = 0;

        this.restartStratagemInput();
      }
    };
  })();

  handleGameStart = (event: KeyboardEvent) => {
    if ((event.keyCode === 38 || event.keyCode === 87) && !this.isGameStarted) {
      this.isRequiredKeyPressed = true;

      setTimeout(() => (this.isGameStarted = true), 300);

      this.handleStratagemTrainingRoundStart();
    }
  };

  handleStratagemTrainingRoundStart = () => {
    this.isRoundEnded = false;
    this.secondsLeft = 10;

    const stratagemsArray = Object.values(this.stratagems)
      .map((shipModule) => [...shipModule])
      .flat();

    this.currentStratagem = getRandomEntity(
      stratagemsArray,
      this.currentStratagem,
    );

    for (let i = 0; i < 4 + this.currentRoundNumber; i++) {
      this.nextStratagemsArray.push(
        getRandomEntity(stratagemsArray, this.currentStratagem),
      );
    }

    this.secondsInterval = setInterval(() => {
      this.secondsLeft = this.secondsLeft - 0.01;

      if (this.secondsLeft < 0) {
        this.handleGameLost();
      }
    }, 10);

    document.addEventListener("keydown", this.handleStratagemKeyPress);
  };

  handleGameLost = () => {
    this.isRoundEnded = true;
    this.isRoundLost = true;

    this.finalGameScore = this.currentScore;

    if (this.currentScore > this.highestGameScore) {
      this.highestGameScore = this.currentScore;
    }

    setTimeout(() => {
      this.currentScore = 0;

      this.isGameStarted = false;
      this.isRoundEnded = false;
      this.isRoundLost = false;
      this.isRequiredKeyPressed = false;

      clearInterval(this.secondsInterval);
    }, 5000);
  };
}

export const stratagemStore = new StratagemStore();
