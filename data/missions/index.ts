import { Mission, SecondaryMission } from "@/utils/dataInterfaces";

export const generalMissions = [
  {
    id: 1,
    imagePath: "/static/Missions/BringDemocracyIcon.svg",
    title: "Несите демократию",
    description: "Поднимите флаг Супер-Земли как негасимый маяк свободы.",
    level: "1-9",
  },
  {
    id: 2,
    imagePath: "/static/Missions/StopIllegalTransmissionIcon.svg",
    title: "Остановите незаконную передачу",
    description:
      "Источник незаконной пропагандистской передачи был прослежен до этой точки.",
    level: "1-3",
  },
  {
    id: 3,
    imagePath: "/static/Missions/UploadDataFromRescueCapsuleIcon.svg",
    title: "Загрузите данные из спасательной капсулы",
    description:
      "В спасательной капсуле, разбившейся в регионе, хранятся ценные данные.",
    level: "2-3",
  },
  {
    id: 4,
    imagePath: "/static/Missions/PumpUpMBRFuelIcon.svg",
    title: "Закачайте топливо в МБР",
    description:
      "Эта заправочная станция отключена. Ее нужно активировать, чтобы запустить МБР.",
    level: "2",
  },
  {
    id: 5,
    imagePath: "/static/Missions/UploadImportantDataIcon.svg",
    title: "Добудьте ценные данные",
    description: "Добудьте и передайте ценные исследовательские данные.",
    level: "3-9",
  },
  {
    id: 6,
    imagePath: "/static/Missions/FastEvacuationIcon.svg",
    title: "Экстренная эвакуация",
    description:
      "Эвакуируйте гражданских, оказавшихся в ловушке в тылу автоматонов/терминидов.",
    level: "3-9",
  },
  {
    id: 7,
    imagePath: "/static/Missions/SaveImportantPersonnelIcon.svg",
    title: "Спасите важный персонал",
    description: "Сопроводите и защитите ученых по пути к зоне эвакуации.",
    level: "1-9",
    targetMissionCompletionCount: [
      { id: 1, value: 30 },
      { id: 4, value: 40 },
      { id: 7, value: 50 },
      { id: 9, value: 60 },
    ],
  },
  {
    id: 8,
    imagePath: "/static/Missions/MakeGeoReconIcon.svg",
    title: "Выполните геологическую разведку",
    description:
      "Выполните геологическую разведку, чтобы найти ценные рудные жилы.",
    level: "2-9",
  },
  {
    id: 9,
    imagePath: "/static/Missions/LaunchMBRIcon.svg",
    title: "Запустите МБР",
    description: "Подготовьте и запустите баллистические ракеты.",
    level: "3-9",
  },
  {
    id: 10,
    imagePath: "/static/Missions/EvacuateHighValueIcon.svg",
    title: "Эвакуируйте приоритетные материалы",
    description:
      "Начните эвакуацию с поверхности планеты крайне ценных материалов и обороняйте площадку до ее завершения.",
    level: "3-9",
  },
] as Mission[];

export const secondaryMissions = [
  {
    id: 1,
    imagePath: "/static/Missions/DestroyStalkerLiarIcon.svg",
    title: "Уничтожить Гнездо Следопытов",

    effect: "Периодически спавнит следопытов.",
    rewardEffect: "Прекращает спавнить следопытов.",
  },
  {
    id: 2,
    imagePath: "/static/Missions/DestroySporeSpewerIcon.svg",
    title: "Уничтожить Рассеиватель спор",
    effect: "Ухудшает обзор генерируя густой туман.",
    rewardEffect: "Прекращает генерировать густой туман, ухудшающий видимость.",
  },
  {
    id: 3,
    imagePath: "/static/Missions/DestroyShriekerNestIcon.svg",
    title: "Уничтожить Гнездо Крикунов",
    effect:
      "Если Адский Десантник находится на расстоянии менее 130 метров от гнезда, то спавнит крикунов.",
    rewardEffect: "Прекращает спавнить крикунов.",
  },
  {
    id: 4,
    imagePath: "/static/Missions/UploadDataFromEscapePodIcon.svg",
    title: "Загрузить данные спасательной капсулы",
    effect: "Отсутствует.",
    rewardEffect: "Отсутствует.",
  },
  {
    id: 5,
    imagePath: "/static/Missions/TerminateIllegalBroadcastIcon.svg",
    title: "Остановить незаконную передачу",
    effect: "Отсутствует.",
    rewardEffect: "Отсутствует.",
  },
  {
    id: 6,
    imagePath: "/static/Missions/DestroyRogueResearchStationIcon.svg",
    title: "Уничтожить ННС",
    effect: "Отсутствует.",
    rewardEffect: "Отсутствует.",
  },
  {
    id: 7,
    imagePath: "/static/Missions/ActivateSeafArtilleryIcon.svg",
    title: "Артиллерия ВССЗ",
    effect: "Отсутствует.",
    rewardEffect:
      "У Адских Десантников появляется возможность воспользоваться заряженными снарядами в формате 5 стратагем.",
  },
  {
    id: 8,
    imagePath: "/static/Missions/ActivateRadarStationIcon.svg",
    title: "Радарная станция",
    effect: "Отсутствует.",
    rewardEffect:
      "Делает видимыми на карте все места интереса и второстепенные миссии.",
  },
  {
    id: 9,
    imagePath: "/static/Missions/ActivateSeafSamSiteIcon.svg",
    title: "Активировать ЗРК",
    effect: "Отсутствует.",
    rewardEffect:
      "После активации начнет обстреливать все десантные корабли автоматонов в радиусе своего действия.",
  },
  {
    id: 10,
    imagePath: "/static/Missions/DestroyMortarEmplacementIcon.svg",
    title: "Уничтожить Минометную точку",
    effect:
      "Обстреливает всех Адских Десантников в радиусе от 20 до 150 метров от своего расположения.",
    rewardEffect: "В виду уничтожения обстрелы прекращаются.",
  },
  {
    id: 11,
    imagePath: "/static/Missions/DestroyAntiAirEmplacementIcon.svg",
    title: "Уничтожить огневую точку ПВО",
    effect: "В радиусе 150 метров делает недоступными все стратагемы «Орла».",
    rewardEffect:
      "После ее уничтожения стратагемы «Орла» вновь становятся доступны.",
  },
  {
    id: 12,
    imagePath: "/static/Missions/DisableStratagemJammerIcon.svg",
    title: "Уничтожить Глушилку стратагем",
    effect:
      "В радиусе 150 метров от этого сооружения все стратагемы становятся недоступны.",
    rewardEffect:
      "После деактивации и самоуничтожения стратагемы становятся вновь доступны.",
  },
  {
    id: 13,
    imagePath: "/static/Missions/DestroyDetectorTowerIcon.svg",
    title: "Уничтожить Сторожевую башню",
    effect:
      "При обнаружении Адского Десантника в радиусе своего действия вызывает десантные корабли.",
    rewardEffect:
      "В виду своего уничтожения вызов подкрепления автоматонов становится недоступным.",
  },
  {
    id: 14,
    imagePath: "/static/Missions/DestroyGunshipFacilityIcon.svg",
    title: "Уничтожить Завод Боевых кораблей",
    effect: "Периодически выпускает боевые корабли.",
    rewardEffect:
      "После уничтожения прекращает производить новые боевые корабли.",
  },
] as SecondaryMission[];

export const terminidMissions = [
  {
    id: 1,
    imagePath: "/static/Missions/KillSwarmCommandersIcon.svg",
    title: "Убейте командиров роя",
    description: "Выследите и устраните командира роя.",
    level: "1-2",
  },
  {
    id: 2,
    imagePath: "/static/Missions/KillChargersIcon.svg",
    title: "Убейте громилу",
    description: "Выследите и устраните громилу.",
    level: "3",
  },
  {
    id: 3,
    imagePath: "/static/Missions/KillBileTitansIcon.svg",
    title: "Убейте желчного титана",
    description: "Выследите и устраните желчного титана.",
    level: "4",
  },
  {
    id: 4,
    imagePath: "/static/Missions/KillTerminidsIcon.svg",
    title: "Уничтожьте рой терминидов",
    description: "Убейте терминидов, чтобы снизить их численность.",
    targetMissionCompletionCount: [
      { id: 3, value: 225 },
      { id: 4, value: 275 },
      { id: 5, value: 350 },
      { id: 6, value: 400 },
      { id: 7, value: 425 },
      { id: 8, value: 460 },
      { id: 9, value: 500 },
    ],
    level: "3-9",
  },
  {
    id: 5,
    imagePath: "/static/Missions/KillTerminidsIcon.svg",
    title: "Блиц: Найти и уничтожить",
    description: "Найдите и уничтожьте строения терминидов.",
    level: "3-9",
  },
  {
    id: 6,
    imagePath: "/static/Missions/ActivatePumpsIcon.svg",
    title: "Активируйте насосы Э-710",
    description:
      "Насосы этого огромного хранилища Э-710 отключились и должны быть запущены заново.",
    level: "2-9",
  },
  {
    id: 7,
    imagePath: "/static/Missions/FuelIcon.svg",
    title: "Обезопасьте вывоз Э-710",
    description: "Позвольте Шаттлам собрать ценный Э-710.",
    level: "2-9",
  },
  {
    id: 8,
    imagePath: "/static/Missions/DarkFluidIcon.svg",
    title: "Заложите темную жидкость",
    description:
      "Заложите темную жидкость в кору под суперколонией, чтобы раз и навсегда уничтожить ее.",
    level: "1-9",
  },
  {
    id: 9,
    imagePath: "/static/Missions/NukeNurseryIcon.svg",
    title: "Взорвите инкубатор ядерной бомбой",
    description:
      "Заложите ядерный заряд во всех инкубационных залах и ликвидируйте терминидский молодняк.",
    level: "1-9",
  },
] as Mission[];

export const automatonMissions = [
  {
    id: 1,
    imagePath: "/static/Missions/KillDevastatorsIcon.svg",
    title: "Убейте разрушителей",
    description: "Найдите и уничтожьте автоматонов-разрушителей.",
    level: "1-2",
  },
  {
    id: 2,
    imagePath: "/static/Missions/KillHulksIcon.svg",
    title: "Убейте глыб",
    description: "Найдите и уничтожьте автоматонов-глыб.",
    level: "3",
  },
  {
    id: 3,
    imagePath: "/static/Missions/KillFactoryStriderIcon.svg",
    title: "Уничтожьте шатун-завод автоматонов",
    description: "Найдите и уничтожьте шатун-завод автоматонов.",
    level: "4",
  },
  {
    id: 4,
    imagePath: "/static/Missions/DestroySuppliesIcon.svg",
    title: "Выведите из строя базы снабжения",
    description:
      "Проникните на территорию автоматонов и уничтожьте их запасы топлива и боекомплектов.",
    level: "1-9",
  },
  {
    id: 5,
    imagePath: "/static/Missions/DestroyAviabaseIcon.svg",
    title: "Выведите из строя авиабазу",
    description: "Выведите из строя авиабазу автоматонов в этом регионе.",
    level: "3-9",
  },
  {
    id: 6,
    imagePath: "/static/Missions/DestroyCommandBunkersIcon.svg",
    title: "Уничтожьте командные бункеры",
    description:
      "Отрежьте ботов от их информационной сети, уничтожив командные бункеры.",
    level: "3-9",
  },
  {
    id: 7,
    imagePath: "/static/Missions/KillAutomatonsIcon.svg",
    title: "Истребите силы автоматонов",
    description: "Уничтожьте автоматонов, чтобы снизить их численность.",
    level: "3-9",
    targetMissionCompletionCount: [
      { id: 3, value: 225 },
      { id: 4, value: 275 },
      { id: 5, value: 350 },
      { id: 6, value: 400 },
      { id: 7, value: 425 },
      { id: 8, value: 460 },
      { id: 9, value: 500 },
    ],
  },
  {
    id: 8,
    imagePath: "/static/Missions/KillAutomatonsIcon.svg",
    title: "Блиц: Найти и уничтожить",
    description: "Найдите и уничтожьте изготовители автоматонов.",
    level: "3-9",
  },
] as Mission[];
