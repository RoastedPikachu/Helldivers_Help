import { Mission } from "@/utils/dataInterfaces";

export const generalMissions = [
  {
    id: 1,
    imagePath: "/static/missions/BringDemocracyIcon.svg",
    title: "Несите демократию",
    description: "Поднимите флаг Супер-Земли как негасимый маяк свободы.",
    level: "1-2",
  },
  {
    id: 2,
    imagePath: "/static/missions/StopIllegalTransmissionIcon.svg",
    title: "Остановите незаконную передачу",
    description:
      "Источник незаконной пропагандистской передачи был прослежен до этой точки.",
    level: "1-3",
  },
  {
    id: 3,
    imagePath: "/static/missions/UploadDataFromRescueCapsuleIcon.svg",
    title: "Загрузите данные из спасательной капсулы",
    description:
      "В спасательной капсуле, разбившейся в регионе, хранятся ценные данные.",
    level: "2-3",
  },
  {
    id: 4,
    imagePath: "/static/missions/PumpUpMBRFuelIcon.svg",
    title: "Закачайте топливо в МБР",
    description:
      "Эта заправочная станция отключена. Ее нужно активировать, чтобы запустить МБР.",
    level: "2",
  },
  {
    id: 5,
    imagePath: "/static/missions/UploadImportantDataIcon.svg",
    title: "Добудьте ценные данные",
    description: "Добудьте и передайте ценные исследовательские данные.",
    level: "3-9",
  },
  {
    id: 6,
    imagePath: "/static/missions/FastEvacuationIcon.svg",
    title: "Экстренная эвакуация",
    description:
      "Эвакуируйте гражданских, оказавшихся в ловушке в тылу автоматонов/терминидов.",
    level: "3-9",
  },
  {
    id: 7,
    imagePath: "/static/missions/SaveImportantPersonnelIcon.svg",
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
    imagePath: "/static/missions/MakeGeoReconIcon.svg",
    title: "Выполните геологическую разведку",
    description:
      "Выполните геологическую разведку, чтобы найти ценные рудные жилы.",
    level: "2-9",
  },
  {
    id: 9,
    imagePath: "/static/missions/LaunchMBRIcon.svg",
    title: "Запустите МБР",
    description: "Подготовьте и запустите баллистические ракеты.",
    level: "3-9",
  },
] as Mission[];

export const terminidMissions = [
  {
    id: 1,
    imagePath: "/static/missions/KillSwarmCommandersIcon.svg",
    title: "Убейте командиров роя",
    description: "Выследите и устраните командира роя.",
    level: "1-2",
  },
  {
    id: 2,
    imagePath: "/static/missions/KillChargersIcon.svg",
    title: "Убейте громилу",
    description: "Выследите и устраните громилу.",
    level: "3",
  },
  {
    id: 3,
    imagePath: "/static/missions/KillBileTitansIcon.svg",
    title: "Убейте желчного титана",
    description: "Выследите и устраните желчного титана.",
    level: "4",
  },
  {
    id: 4,
    imagePath: "/static/missions/KillTerminidsIcon.svg",
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
    imagePath: "/static/missions/KillTerminidsIcon.svg",
    title: "Блиц: Найти и уничтожить",
    description: "Найдите и уничтожьте строения терминидов.",
    level: "3-9",
  },
  {
    id: 6,
    imagePath: "/static/missions/ActivatePumpsIcon.svg",
    title: "Активируйте насосы Э-710",
    description:
      "Насосы этого огромного хранилища Э-710 отключились и должны быть запущены заново.",
    level: "2-9",
  },
  {
    id: 7,
    imagePath: "/static/missions/FuelIcon.svg",
    title: "Обезопасьте вывоз Э-710",
    description: "Позвольте Шаттлам собрать ценный Э-710.",
    level: "2-9",
  },
] as Mission[];

export const automatonMissions = [
  {
    id: 1,
    imagePath: "/static/missions/KillDevastatorsIcon.svg",
    title: "Убейте разрушителей",
    description: "Найдите и уничтожьте автоматонов-разрушителей.",
    level: "1-2",
  },
  {
    id: 2,
    imagePath: "/static/missions/KillHulksIcon.svg",
    title: "Убейте глыб",
    description: "Найдите и уничтожьте автоматонов-глыб.",
    level: "3",
  },
  {
    id: 3,
    imagePath: "/static/missions/DestroySuppliesIcon.svg",
    title: "Выведите из строя базы снабжения",
    description:
      "Проникните на территорию автоматонов и уничтожьте их запасы топлива и боекомплектов.",
    level: "1-9",
  },
  {
    id: 4,
    imagePath: "/static/missions/DestroyAviabaseIcon.svg",
    title: "Выведите из строя авиабазу",
    description: "Выведите из строя авиабазу автоматонов в этом регионе.",
    level: "3-9",
  },
  {
    id: 5,
    imagePath: "/static/missions/KillAutomatonsIcon.svg",
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
    id: 6,
    imagePath: "/static/missions/KillAutomatonsIcon.svg",
    title: "Блиц: Найти и уничтожить",
    description: "Найдите и уничтожьте изготовители автоматонов.",
    level: "3-9",
  },
] as Mission[];
