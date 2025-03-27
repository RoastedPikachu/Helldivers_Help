export interface ArmorBonus {
  id: number;
  icon: string;
  name: string;
  description: string;
}

export const armorBonuses: { [key: string]: ArmorBonus } = {
  extraPadding: {
    id: 1,
    icon: "/static/armorBonuses/ExtraPadding.svg",
    name: "Экстра-уплотнение",
    description: "Обеспечивает более высокий рейтинг брони.",
  },
  engineerKit: {
    id: 2,
    icon: "/static/armorBonuses/EngineeringKit.svg",
    name: "Инженерный комплект",
    description:
      "Снижает отдачу в приседе и лежа еще на 30%. Увеличивает первоначальный размер инвентаря и количество переносимых гранат на +2.",
  },
  medKit: {
    id: 3,
    icon: "/static/armorBonuses/Aptechka.svg",
    name: "Аптечка",
    description:
      "Увеличивает первоначальный размер инвентаря и количество переносимых стимов на +2. Увеличивает время действия стима на 2.0 сек.",
  },
  democracyProtects: {
    id: 4,
    icon: "/static/armorBonuses/DemocracyProtects.svg",
    name: "Демократия защищает",
    description:
      "50% вероятность не умереть при получении смертельного урона. Предотвращает урон от кровотечения при кровотечении из груди.",
  },
  electricalCondult: {
    id: 5,
    icon: "/static/armorBonuses/ElectricalCondult.svg",
    name: "Электропроводник",
    description: "Дает 95% сопротивление урону от дуги.",
  },
  fortification: {
    id: 6,
    icon: "/static/armorBonuses/Fortified.svg",
    name: "Укрепление",
    description:
      "Снижает отдачу в приседе и лежа еще на 30%. Дает 50% сопротивление урону от взрыва.",
  },
  servoAssisted: {
    id: 7,
    icon: "/static/armorBonuses/ServoAssisted.svg",
    name: "Сервопривод",
    description:
      "Увеличивает дальность броска на 30%. Увеличивает здоровье конечностей на 50%.",
  },
  scout: {
    id: 8,
    icon: "/static/armorBonuses/Scout.svg",
    name: "Разведчик",
    description:
      "Размещенные на карте метки сканируют местность каждые 2.0 сек. Сокращает дистанцию обнаружения пользователя на 30%.",
  },
  peakPhisique: {
    id: 9,
    icon: "/static/armorBonuses/PeakPhisique.svg",
    name: "Пик формы",
    description:
      "Увеличивает урон в ближнем бою на 50%. Улучшает обращение с оружием за счет уменьшения отдачи.",
  },
  inflammable: {
    id: 10,
    icon: "/static/armorBonuses/Inflammable.svg",
    name: "Огнеопасный",
    description:
      "Дает 75% сопротивления урону от огня, чтобы обладатель не сомневался в своей огнеупорности.",
  },
  advancedFiltration: {
    id: 11,
    icon: "/static/armorBonuses/AdvancedFiltration.svg",
    name: "Продвинутая фильтрация",
    description: "Обеспечивает 80% к сопротивлению урону и эффектам от газа.",
  },
  unflinching: {
    id: 12,
    icon: "/static/armorBonuses/Unflinching.svg",
    name: "Непоколебимый",
    description: "Не дает Адским Десантникам дергаться, когда по ним попадают.",
  },
  siegeReady: {
    id: 13,
    icon: "/static/armorBonuses/SiegeReady.svg",
    name: "К осаде готов",
    description:
      "Повышает скорость перезарядки основого оружия на 30%. Повышает боезапас основного оружия на 20%.",
  },
  acclimated: {
    id: 14,
    icon: "/static/armorBonuses/Inflammable.svg",
    name: "Акклиматизированный",
    description:
      "Дает 50% сопротивления урону от огня, газа, кислоты и электричества.",
  },
  integratedExplosives: {
    id: 15,
    icon: "/static/armorBonuses/IntegratedExplosives.svg",
    name: "Встроенная взрывчатка",
    description: "Броня взрывается через 1,5 сек. после гибели владельца.",
  },
  gunslinger: {
    id: 16,
    icon: "/static/armorBonuses/IntegratedExplosives.svg",
    name: "Стрелок",
    description:
      "Ускоряет перезарядку оружия на 40%. Скорость, с которой доп. оружие извлекается или убирается в кобуру, увеличена на 50%. Отдача доп. оружия уменьшена на 70%.",
  },
};
