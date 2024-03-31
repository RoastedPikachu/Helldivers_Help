import { makeAutoObservable } from "mobx";

import { Stratagem } from "@/utils/generalInterfaces";
import { getRandomEntity } from "@/utils/generalFunctions";

/*
  С 1 по 8: стратагемы оружия поддержки;
  С 9 по 15: стратагемы орбитальных ударов;
  С 16 по 22: стратагемы ангара;
  С 23 по 28: страгемы капитанского мостика;
  С 29 по 37: стратагемы инженерии;
  С 38 по 45: стратагемы производственного цеха;
  С 45 по 52: стратагемы миссий;
*/

class StratagemStore {
  isStratagemTrainingStarted = false;
  isStratagemInputFail = false;
  isStratagemInputSuccessful = false;

  currentStratagem = {} as Stratagem;
  nextStratagem = {} as Stratagem;

  stratagems = [
    {
      id: 1,
      name: "Пулемет",
      image: "/static/Stratagems/MachineGunIcon.png",
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
      name: "Крупнокалиберная винтовка",
      image: "/static/Stratagems/AntiMaterialRifleIcon.png",
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
      name: "Доблесть",
      image: "/static/Stratagems/StalwartIcon.png",
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
      id: 4,
      name: "Одноразовый бронебой",
      image: "/static/Stratagems/ExpendableAntiTankIcon.png",
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
      id: 5,
      name: "Огнемет",
      image: "/static/Stratagems/FlamethrowerIcon.png",
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
      id: 6,
      name: "Автопушка",
      image: "/static/Stratagems/AutocannonIcon.png",
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
      id: 7,
      name: "Рельсотрон",
      image: "/static/Stratagems/RailgunIcon.png",
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
      id: 8,
      name: "Копье",
      image: "/static/Stratagems/SpearIcon.png",
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
      id: 9,
      name: "Орбитальный залп Гатлинга",
      image: "/static/Stratagems/OrbitalGatlingBarrageIcon.png",
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
      id: 10,
      name: "Орбитальная воздушная бомба",
      image: "/static/Stratagems/OrbitalAirburstStrikeIcon.png",
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
      id: 11,
      name: "Орбитальный залп 120-мм ОФ",
      image: "/static/Stratagems/Orbital120mmHEBarrageIcon.png",
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
      id: 12,
      name: "Орбитальный залп 380-мм ОФ",
      image: "/static/Stratagems/Orbital380mmHEBarrageIcon.png",
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
      id: 13,
      name: "Орбитальный огневой вал",
      image: "/static/Stratagems/OrbitalWalkingBarrageIcon.png",
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
      id: 14,
      name: "Орбитальный лазер",
      image: "/static/Stratagems/OrbitalLaserIcon.png",
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
      id: 15,
      name: "Орбитальный рельсотронный залп",
      image: "/static/Stratagems/OrbitalRailcannonStrikeIcon.png",
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
      id: 16,
      name: "Орел: бреющий полет",
      image: "/static/Stratagems/EagleStrafingRunIcon.png",
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
      id: 17,
      name: "Орел: воздушный налет",
      image: "/static/Stratagems/EagleAirstrikeIcon.png",
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
      id: 18,
      name: "Орел: кластерная бомба",
      image: "/static/Stratagems/EagleClusterBombIcon.png",
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
      id: 19,
      name: "Реактивный ранец",
      image: "/static/Stratagems/JumpPackIcon.png",
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
      id: 20,
      name: "Орел: дымовая завеса",
      image: "/static/Stratagems/EagleSmokeStrikeIcon.png",
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
      id: 21,
      name: "Орел: 110-мм ракетные блоки",
      image: "/static/Stratagems/Eagle110mmRocketPodIcon.png",
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
      id: 22,
      name: "Орел: бомба [500 кг]",
      image: "/static/Stratagems/Eagle500kgBombIcon.png",
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
      id: 23,
      name: "Орбитальный высокоточный удар",
      image: "/static/Stratagems/OrbitalPrecisionStrikeIcon.png",
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
      id: 23,
      name: "Орбитальный газовый удар",
      image: "/static/Stratagems/OrbitalGasStrikeIcon.png",
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
      id: 24,
      name: "Орбитальный эм-удар",
      image: "/static/Stratagems/OrbitalEMSStrikeIcon.png",
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
          orientation: 3,
          isPressed: false,
        },
      ],
    },
    {
      id: 25,
      name: "Орбитальная дымовая завеса",
      image: "/static/Stratagems/OrbitalSmokeStrikeIcon.png",
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
      id: 26,
      name: "Огневая позиция: тяжелый пулемет",
      image: "/static/Stratagems/HMGEmplacementIcon.png",
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
      id: 27,
      name: "Реле генератора щита",
      image: "/static/Stratagems/ShieldGeneratorRelayIcon.png",
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
      id: 28,
      name: "Тесла-башня",
      image: "/static/Stratagems/TeslaTowerIcon.png",
      keyCodes: [83, 87, 65, 83, 68, 68],
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
      id: 29,
      name: "Противопехотные мины",
      image: "/static/Stratagems/AntiPersonnelMinefieldIcon.png",
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
      id: 30,
      name: "Рюкзак: боеприпасы",
      image: "/static/Stratagems/SupplyPackIcon.png",
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
      id: 31,
      name: "Гранатомет",
      image: "/static/Stratagems/GrenadeLauncherIcon.png",
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
      id: 32,
      name: "Лазерная пушка",
      image: "/static/Stratagems/LaserCannonIcon.png",
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
      id: 33,
      name: "Зажигательные мины",
      image: "/static/Stratagems/IncendiaryMinesIcon.png",
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
      id: 34,
      name: "Аппарат: сторожевой пес",
      image: "/static/Stratagems/GuardDogRoverIcon.png",
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
      id: 35,
      name: "Рюкзак: баллистический щит",
      image: "/static/Stratagems/BallisticShieldBackpackIcon.png",
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
      id: 36,
      name: "Дуговой метатель",
      image: "/static/Stratagems/ArcThrowerIcon.png",
      keyCodes: [83, 65, 87, 87, 68],
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
        {
          id: 5,
          orientation: 2,
          isPressed: false,
        },
      ],
    },
    {
      id: 37,
      name: "Генератор щита",
      image: "/static/Stratagems/ShieldGeneratorPackIcon.png",
      keyCodes: [83, 68, 87, 65, 84],
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
      id: 38,
      name: "Пулеметная турель",
      image: "/static/Stratagems/MachineGunSentryIcon.png",
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
      id: 39,
      name: "Турель Гатлинга",
      image: "/static/Stratagems/GatlingSentryIcon.png",
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
      id: 40,
      name: "Турель с минометом",
      image: "/static/Stratagems/MortarSentryIcon.png",
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
      id: 41,
      name: "Сторожевой пес",
      image: "/static/Stratagems/GuardDogIcon.png",
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
      id: 42,
      name: "Турель с автопушкой",
      image: "/static/Stratagems/AutocannonSentryIcon.png",
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
      id: 43,
      name: "Ракетная турель",
      image: "/static/Stratagems/RocketSentryIcon.png",
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
      id: 44,
      name: "Турель с эм-минометом",
      image: "/static/Stratagems/EMSMortarSentryIcon.png",
      keyCodes: [83, 83, 87, 87, 65],
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
      id: 45,
      name: "Экзокостюм «патриот»",
      image: "/static/Stratagems/PatriotExosuitIcon.png",
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
      id: 46,
      name: "Подкрепление",
      image: "/static/Stratagems/ReinforceIcon.png",
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
      id: 47,
      name: "SOS маячок",
      image: "/static/Stratagems/SOSBeaconIcon.png",
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
      id: 48,
      name: "Припасы",
      image: "/static/Stratagems/ResupplyIcon.png",
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
      id: 49,
      name: "Флаг Супер-Земли",
      image: "/static/Stratagems/SuperEarthFlagIcon.png",
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
      id: 50,
      name: "Загрузить данные",
      image: "/static/Stratagems/UploadDataIcon.png",
      keyCodes: [65, 68, 83, 83, 83],
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
      id: 51,
      name: "Адская бомба",
      image: "/static/Stratagems/HellbombIcon.png",
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
      id: 52,
      name: "Артиллерия ВССЗ",
      image: "/static/Stratagems/SEAFArtilleryIcon.png",
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
  ] as Stratagem[];

  constructor() {
    makeAutoObservable(this);

    this.currentStratagem = getRandomEntity(
      this.stratagems,
      this.currentStratagem,
    );
    this.nextStratagem = getRandomEntity(
      this.stratagems,
      this.currentStratagem,
    );
  }

  handleStratagemKeyPress = (() => {
    let currentIndex = 0;

    return (event: any) => {
      const targetKey = this.currentStratagem.keyCodes[currentIndex];

      if (event.keyCode === targetKey) {
        const updatedDirections = [...this.currentStratagem.directions];
        updatedDirections[currentIndex].isPressed = true;

        currentIndex++;

        if (currentIndex === this.currentStratagem.keyCodes.length) {
          document.removeEventListener("keydown", this.handleStratagemKeyPress);

          currentIndex = 0;

          this.isStratagemInputSuccessful = true;
        }

        this.currentStratagem = {
          ...this.currentStratagem,
          directions: updatedDirections,
        };
      }
      document.removeEventListener("keydown", this.handleStratagemKeyPress);

      currentIndex = 0;

      this.isStratagemInputFail = true;
    };
  })();

  handleStratagemTrainingStart() {
    this.isStratagemTrainingStarted = true;

    document.addEventListener("keydown", this.handleStratagemKeyPress);
  }

  handleStratagemTrainingRestart() {
    this.isStratagemInputFail = false;
    this.isStratagemInputSuccessful = false;
    this.currentStratagem = this.nextStratagem;
    this.nextStratagem = getRandomEntity(
      stratagemStore.stratagems,
      this.currentStratagem,
    );

    document.addEventListener("keydown", this.handleStratagemKeyPress);
  }
}

export const stratagemStore = new StratagemStore();
