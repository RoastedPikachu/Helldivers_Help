import { makeAutoObservable } from "mobx";

import { Coat, CurrentCoatInfo } from "@/utils/storeInterfaces";

import { warbonds } from "@/data/warbonds";

class CoatsStore {
  currentCoatInfo = {} as CurrentCoatInfo;

  coats = [
    {
      id: 1,
      imagePath: "/static/Coats/EnemiesBreakerImage.webp",
      name: "Крушитель врагов",
      description:
        "Эти прочные, водонепроницаемые и утепленные плащи пользуются популярностью у туристов в качестве материала для палаток.",
      price: 0,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[0].icon,
    },
    {
      id: 2,
      imagePath: "/static/Coats/IndependenceBringerImage.webp",
      name: "Вестник независимости",
      description:
        "Этот укороченный плаз символизирует краткость галактических конфликтов, за что надо благодарить эффективность Адских Десантников.",
      price: 2,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 3,
      imagePath: "/static/Coats/WillHeraldImage.webp",
      name: "Вестник воли",
      description:
        "Две полоски служат напоминанием о двух столпах успешной военной кампании: атаке и дальнейшей атаке.",
      price: 3,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 4,
      imagePath: "/static/Coats/InspiratorImage.webp",
      name: "Вдохновитель",
      description:
        "Некоторые говорят, что одного вида этого плаща, величественно колышущегося на ветру, достаточно чтобы вдохновить отряд на победу.",
      price: 5,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 5,
      imagePath: "/static/Coats/StarsAndVotingImage.webp",
      name: "Плащ звезд и голосования",
      description:
        "Символ звездного обещания Супер-Земли на тему того, что однажды все звезды будут освещать массы счастливых избирателей.",
      price: 8,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 6,
      imagePath: "/static/Coats/UnblemishedAllegianceImage.webp",
      name: "Непорочная верность",
      description:
        "На последних этапах производства каждому такому плащу патриотический школьный хор поет гимн Супер-Земли.",
      price: 12,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 7,
      imagePath: "/static/Coats/DoomsdayImage.webp",
      name: "Судный день",
      description:
        "Череп Адского Десантника вселяет страх в сердца врагов, пытающихся подкрасться к владельцу этого плаща.",
      price: 15,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 8,
      imagePath: "/static/Coats/HonorCrestImage.webp",
      name: "Гребень чести",
      description:
        "Этот оттенок желтого полностью совпадает с цветом «Золотых врат» министерства единства, которые ведут в зал единогласного решения.",
      price: 15,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 9,
      imagePath: "/static/Coats/TrueCitizenMantieImage.webp",
      name: "Мантия истинного гражданства",
      description:
        "Очень легкий плащ контрастирует с тяжелой ношей, которую подразумевает владение этим плащом: жить согласно идеалам истинного гражданина.",
      price: 25,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 10,
      imagePath: "/static/Coats/FlaminSamaritanImage.webp",
      name: "Пылающий самаритянин",
      description:
        "Этот плащ окрашен в красный, белый и зеленый цвета 676-го демократического полка, до конца сражавшегося на склонах холма Свободы.",
      price: 30,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 11,
      imagePath: "/static/Coats/EternalLibertyLightImage.webp",
      name: "Свет вечной свободы",
      description:
        "Говорят, безупречное правосудие этого плаща ослепляет врагов свободы своим великолепным светом.",
      price: 40,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[1].icon,
    },
    {
      id: 12,
      imagePath: "/static/Coats/BotslayerImage.webp",
      name: "Убийца ботов",
      description:
        "Плащ, внедряющий протокол страха в процессоры всех автоматонов, сканирующих его.",
      price: 8,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[3].icon,
    },
    {
      id: 13,
      imagePath: "/static/Coats/GreatMartyrImage.webp",
      name: "Великий мученик",
      description:
        "Говорят, только истинные демократы могут накинуть этот плащ на свои плечи.",
      price: 20,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[3].icon,
    },
    {
      id: 14,
      imagePath: "/static/Coats/OblivionAgentImage.webp",
      name: "Агент забвения",
      description:
        "0.05% от прибыли жертвуется национальному парку Суперстоун в рамках кампании министерства единства «Зеленая галактика».",
      price: 30,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[3].icon,
    },
    {
      id: 15,
      imagePath: "/static/Coats/DissidentNightmareImage.webp",
      name: "Кошмар диссидента",
      description:
        "После тщательного тестирования в Центрах патриотической реабилитации этот дизайн оказался самым пугающим для пораженных раздором индивидуумов.",
      price: 8,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[5].icon,
    },
    {
      id: 16,
      imagePath: "/static/Coats/EternalGloryImage.webp",
      name: "Вечная слава",
      description:
        "Обеспечивает включение в бессмертные ряды тех, кто записан в цифровом архиве доблестных дел Супер-Земли.",
      price: 20,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[5].icon,
    },
    {
      id: 17,
      imagePath: "/static/Coats/VunerableBulletinOrderImage.webp",
      name: "Орден достопочтенного бюллетеня",
      description:
        "Украшен эмблемой Ордена достопочтенного бюллетеня, утвержденного министерством патриотического клуба для граждан, поклявшихся хранить святость голосования.",
      price: 30,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: warbonds[5].icon,
    },
    {
      id: 18,
      imagePath: "/static/Coats/FallenHeroRevengeImage.webp",
      name: "Месть павшего героя",
      description:
        "Наши павшие герои живут в этом плаще и направляют руку владельца в сердца их убийц.",
      price: 0,
      armorRating: 100,
      speed: 100,
      staminaRegen: 100,
      warbondIcon: "",
    },
  ] as Coat[];
  constructor() {
    makeAutoObservable(this);
  }

  changeCurrentCoatInfo(id: number) {
    this.currentCoatInfo = { id: id };
  }

  clearCurrentCoatInfo() {
    this.currentCoatInfo = {} as CurrentCoatInfo;
  }
}

export const coatsStore = new CoatsStore();
