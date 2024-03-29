import { Mission } from "@/utils/dataInterfaces";

export const generalMissions = [
  {
    id: 1,
    imagePath: "/static/missions/BringDemocracyIcon.webp",
    title: "Несите демократию",
    description: "Поднимите флаг Супер-Земли как негасимый маяк свободы.",
  },
  {
    id: 2,
    imagePath: "/static/missions/StopIllegalTransmissionIcon.webp",
    title: "Остановите незаконную передачу",
    description:
      "Источник незаконной пропагандистской передачи был прослежен до этой точки.",
  },
  {
    id: 3,
    imagePath: "/static/missions/UploadDataFromRescueCapsuleIcon.webp",
    title: "Загрузите данные из спасательной капсулы",
    description:
      "В спасательной капсуле, разбившейся в регионе, хранятся ценные данные.",
  },
  {
    id: 4,
    imagePath: "/static/missions/PumpUpMBRFuelIcon.webp",
    title: "Закачайте топливо в МБР",
    description:
      "Эта заправочная станция отключена. Ее нужно активировать, чтобы запустить МБР.",
  },
  {
    id: 5,
    imagePath: "/static/missions/UploadImportantDataIcon.webp",
    title: "Добудьте ценные данные",
    description: "Добудьте и передайте ценные исследовательские данные.",
  },
  {
    id: 6,
    imagePath: "/static/missions/FastEvacuationIcon.webp",
    title: "Экстренная эвакуация",
    description:
      "Эвакуируйте гражданских, оказавшихся в ловушке в тылу автоматонов/терминидов.",
  },
  {
    id: 7,
    imagePath: "/static/missions/SaveImportantPersonnelIcon.webp",
    title: "Спасите важный персонал",
    description: "",
  },
  {
    id: 8,
    imagePath: "/static/missions/MakeGeoReconIcon.webp",
    title: "Выполните геологическую разведку",
    description:
      "Выполните геологическую разведку, чтобы найти ценные рудные жилы.",
  },
  {
    id: 9,
    imagePath: "/static/missions/LaunchMBRIcon.webp",
    title: "Запустите МБР",
    description: "Подготовьте и запустите баллистические ракеты.",
  },
] as Mission[];

export const terminidMissions = [
  {
    id: 1,
    imagePath: "/static/missions/KillSwarmCommandersIcon.webp",
    title: "Убейте командиров роя, громилу, желчного титана",
    description:
      "Выследите и устраните командира роя, громилу, желчного титана.",
  },
  {
    id: 2,
    imagePath: "/static/missions/KillTerminidsIcon.webp",
    title: "Уничтожьте рой терминидов",
    description: "",
  },
  {
    id: 3,
    imagePath: "/static/missions/KillTerminidsIcon.webp",
    title: "Блиц: Найти и уничтожить",
    description: "Найдите и уничтожьте строения терминидов.",
  },
  {
    id: 4,
    imagePath: "/static/missions/ActivatePumpsIcon.webp",
    title: "Активируйте насосы Э-710",
    description:
      "Насосы этого огромного хранилища Э-710 отключились и должны быть запущены заново.",
  },
  {
    id: 5,
    imagePath: "/static/missions/FuelIcon.webp",
    title: "Обезопасьте вывоз Э-710",
    description: "Позвольте Шаттлам собрать ценный Э-710.",
  },
] as Mission[];

export const automatonMissions = [
  {
    id: 1,
    imagePath: "/static/missions/KillDevastatorsIcon.webp",
    title: "Убейте разрушителей/глыб",
    description:
      "Найдите и уничтожьте автоматонов-разрушителей/автоматонов-глыб.",
  },
  {
    id: 2,
    imagePath: "/static/missions/DestroySuppliesIcon.webp",
    title: "Выведите из строя базы снабжения",
    description:
      "Проникните на территорию автоматонов и уничтожьте их запасы топлива и боекомплектов.",
  },
  {
    id: 3,
    imagePath: "/static/missions/DestroyAviabaseIcon.webp",
    title: "Выведите из строя авиабазу",
    description: "Выведите из строя авиабазу автоматонов в этом регионе.",
  },
  {
    id: 4,
    imagePath: "/static/missions/KillAutomatonsIcon.webp",
    title: "Истребите силы автоматонов",
    description: "Уничтожьте автоматонов, чтобы снизить их численность.",
  },
  {
    id: 5,
    imagePath: "/static/missions/KillAutomatonsIcon.webp",
    title: "Блиц: Найти и уничтожить",
    description: "Найдите и уничтожьте изготовители автоматонов.",
  },
] as Mission[];
