import { biomes } from "@/data/planetBiomes";
import { galaxySectors } from "@/data/galaxySectors";
import { weatherConditions } from "@/data/planetWeatherConditions";

export const planets = {
  0: {
    name: "Супер-Земля",
    sector: galaxySectors.sol,
    biome: null,
    weatherConditions: [],
  },
  1: {
    name: "Клен Дахт II",
    sector: galaxySectors.altus,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  2: {
    name: "Следопыт V",
    sector: galaxySectors.altus,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  3: {
    name: "Вдовья гавань",
    sector: galaxySectors.altus,
    biome: null,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  4: {
    name: "Новая гавань",
    sector: galaxySectors.altus,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  5: {
    name: "Пилен V",
    sector: galaxySectors.altus,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  6: {
    name: "Гидропад прайм",
    sector: galaxySectors.barnard,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  7: {
    name: "Зея ругозия",
    sector: galaxySectors.ferris,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  8: {
    name: "Дерроуспорт",
    sector: galaxySectors.barnard,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  9: {
    name: "Форнскогур II",
    sector: galaxySectors.barnard,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  10: {
    name: "Мидасбург",
    sector: galaxySectors.barnard,
    biome: null,
    weatherConditions: [],
  },
  11: {
    name: "Цербер IIIc",
    sector: galaxySectors.cancri,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  12: {
    name: "Водопады процветания",
    sector: galaxySectors.cancri,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  13: {
    name: "Окул VI",
    sector: galaxySectors.gothmar,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  14: {
    name: "Залив мучеников",
    sector: galaxySectors.cantolus,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  15: {
    name: "Пик свободы",
    sector: galaxySectors.cantolus,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  16: {
    name: "Форт единения",
    sector: galaxySectors.orion,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  17: {
    name: "Кельвинор",
    sector: galaxySectors.cantolus,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  18: {
    name: "Призрак",
    sector: galaxySectors.idun,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  19: {
    name: "Игла",
    sector: galaxySectors.kelvin,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  20: {
    name: "Новая кируна",
    sector: galaxySectors.kelvin,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  21: {
    name: "Форт правосудия",
    sector: galaxySectors.kelvin,
    biome: null,
    weatherConditions: [],
  },
  22: {
    name: "Зегемский рай",
    sector: galaxySectors.kelvin,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  23: {
    name: "Провидение",
    sector: galaxySectors.iptus,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  24: {
    name: "Примортия",
    sector: galaxySectors.iptus,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  25: {
    name: "Сульфура",
    sector: galaxySectors.celeste,
    biome: biomes.ethereal,
    weatherConditions: [],
  },
  26: {
    name: "Нублария I",
    sector: galaxySectors.celeste,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  27: {
    name: "Кракату",
    sector: galaxySectors.celeste,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  28: {
    name: "Вольтерра",
    sector: galaxySectors.korpus,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  29: {
    name: "Горн",
    sector: galaxySectors.korpus,
    biome: null,
    weatherConditions: [],
  },
  30: {
    name: "Вуаль",
    sector: galaxySectors.barnard,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  31: {
    name: "Марр IV",
    sector: galaxySectors.barnard,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  32: {
    name: "Форт безопасности",
    sector: galaxySectors.cancri,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  33: {
    name: "Сейшельский пляж",
    sector: galaxySectors.cancri,
    biome: biomes.ethereal,
    weatherConditions: [],
  },
  34: {
    name: "Хеллмейр",
    imageCount: 3,
    sector: galaxySectors.mirin,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  35: {
    name: "Эффлувия",
    sector: galaxySectors.cancri,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  36: {
    name: "Солгаст",
    sector: galaxySectors.gothmar,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  37: {
    name: "Дилувия",
    sector: galaxySectors.gothmar,
    biome: null,
    weatherConditions: [],
  },
  38: {
    name: "Виридия-прайм",
    sector: galaxySectors.cantolus,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  39: {
    name: "Обари",
    sector: galaxySectors.cantolus,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  40: {
    name: "Мирадеш",
    sector: galaxySectors.idun,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  41: {
    name: "Атрама",
    sector: galaxySectors.idun,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  42: {
    name: "Эмерия",
    sector: galaxySectors.kelvin,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  43: {
    name: "Барабос",
    sector: galaxySectors.marspira,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  44: {
    name: "Фенмейр",
    sector: galaxySectors.marspira,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  45: {
    name: "Мастия",
    sector: galaxySectors.marspira,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  46: {
    name: "Шаллус",
    sector: galaxySectors.talus,
    biome: biomes.ethereal,
    weatherConditions: [],
  },
  47: {
    name: "Кракабос",
    sector: galaxySectors.iptus,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  48: {
    name: "Иридика",
    sector: galaxySectors.iptus,
    biome: biomes.ethereal,
    weatherConditions: [],
  },
  49: {
    name: "Астерра",
    sector: galaxySectors.orion,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  50: {
    name: "Азур II",
    sector: galaxySectors.sten,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  51: {
    name: "Айвис",
    sector: galaxySectors.celeste,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  52: {
    name: "Слиф",
    sector: galaxySectors.celeste,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  53: {
    name: "Карамур",
    sector: galaxySectors.korpus,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  54: {
    name: "Кхарст",
    sector: galaxySectors.gallux,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  55: {
    name: "Юкория",
    sector: galaxySectors.morgon,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  56: {
    name: "Мириум",
    sector: galaxySectors.morgon,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  57: {
    name: "Керт II",
    sector: galaxySectors.rictus,
    biome: null,
    weatherConditions: [],
  },
  58: {
    name: "Парш",
    sector: galaxySectors.rictus,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  59: {
    name: "Риф",
    sector: galaxySectors.saleria,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  60: {
    name: "Ирулта",
    sector: galaxySectors.saleria,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  61: {
    name: "Эморат",
    sector: galaxySectors.meridian,
    biome: null,
    weatherConditions: [],
  },
  62: {
    name: "Илдуна-прайм",
    sector: galaxySectors.meridian,
    biome: null,
    weatherConditions: [],
  },
  63: {
    name: "Утроба",
    sector: galaxySectors.idun,
    biome: null,
    weatherConditions: [weatherConditions.intenseHeat],
  },
  64: {
    name: "Меридия",
    tidbit: `<p>One of four planets where the Terminid Control System (TCS) was deployed, a network of massive towers that cover the planet in a neurotoxin known as Termincide. The deployment of these TCS towers took the combined effort of many helldivers and eventually lead to the Terminids being driven away for good.</p>`,
    sector: galaxySectors.umlaut,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  65: {
    name: "Борея",
    sector: galaxySectors.sagan,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  66: {
    name: "Курия",
    sector: galaxySectors.marspira,
    biome: null,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  67: {
    name: "Тарш",
    sector: galaxySectors.marspira,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  68: {
    name: "Шелт",
    sector: galaxySectors.talus,
    biome: null,
    weatherConditions: [],
  },
  69: {
    name: "Имбер",
    sector: galaxySectors.talus,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  70: {
    name: "Блистика",
    sector: galaxySectors.gellert,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  71: {
    name: "Ратч",
    sector: galaxySectors.iptus,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  72: {
    name: "Юльхейм",
    sector: galaxySectors.nanos,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  73: {
    name: "Валгаард",
    sector: galaxySectors.iptus,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  74: {
    name: "Арктур",
    sector: galaxySectors.arturion,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  75: {
    name: "Эскер",
    sector: galaxySectors.falstaff,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  76: {
    name: "Терек",
    sector: galaxySectors.orion,
    biome: null,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  77: {
    name: "Сиррус",
    sector: galaxySectors.orion,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  78: {
    name: "Кримсика",
    imageCount: 3,
    sector: galaxySectors.draco,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  79: {
    name: "Хиит",
    sector: galaxySectors.orion,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  80: {
    name: "Вельд",
    sector: galaxySectors.orion,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  81: {
    name: "Альта V",
    sector: galaxySectors.korpus,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  82: {
    name: "Урсика XI",
    sector: galaxySectors.borgus,
    biome: null,
    weatherConditions: [],
  },
  83: {
    name: "Инари",
    sector: galaxySectors.korpus,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  84: {
    name: "Скааш",
    sector: galaxySectors.ursa,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  85: {
    name: "Морадеш",
    sector: galaxySectors.celeste,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  86: {
    name: "Расп",
    sector: galaxySectors.gallux,
    biome: null,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  87: {
    name: "Башир",
    sector: galaxySectors.gallux,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  88: {
    name: "Регнус",
    sector: galaxySectors.morgon,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  89: {
    name: "Мог",
    sector: galaxySectors.morgon,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  90: {
    name: "Вальмокс",
    sector: galaxySectors.rictus,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  91: {
    name: "Иро",
    sector: galaxySectors.rictus,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  92: {
    name: "Графмер",
    sector: galaxySectors.rictus,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  93: {
    name: "Новый стокгольм",
    sector: galaxySectors.hanzo,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  94: {
    name: "Оазис",
    sector: galaxySectors.rictus,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  95: {
    name: "Генезис-прайм",
    sector: galaxySectors.rictus,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  96: {
    name: "Аванпост 32",
    sector: galaxySectors.saleria,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  97: {
    name: "Калипсо",
    sector: galaxySectors.saleria,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  98: {
    name: "Луга элизия",
    sector: galaxySectors.guang,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  99: {
    name: "Пещера альдеридж",
    sector: galaxySectors.guang,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  100: {
    name: "Трандор",
    sector: galaxySectors.sten,
    biome: biomes.tundra,
    weatherConditions: [],
  },
  101: {
    name: "Восточный иридиевый торговый залив",
    sector: galaxySectors.tarragon,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  102: {
    name: "Хребет свободы",
    sector: galaxySectors.meridian,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  103: {
    name: "Болдрик-прайм",
    sector: galaxySectors.meridian,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  104: {
    name: "Вир",
    sector: galaxySectors.theseus,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  105: {
    name: "Купер",
    sector: galaxySectors.theseus,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  106: {
    name: "Станция «Осло»",
    sector: galaxySectors.sagan,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  107: {
    name: "Пепли IX",
    sector: galaxySectors.xzar,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  108: {
    name: "Гюнвальд",
    sector: galaxySectors.sagan,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  109: {
    name: "Дольф",
    sector: galaxySectors.nanos,
    biome: null,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  110: {
    name: "Беквам III",
    sector: galaxySectors.nanos,
    biome: null,
    weatherConditions: [],
  },
  111: {
    name: "Дума тюр",
    sector: galaxySectors.nanos,
    biome: null,
    weatherConditions: [],
  },
  112: {
    name: "Колодцы вернена",
    sector: galaxySectors.hydra,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  113: {
    name: "Перевал асов",
    sector: galaxySectors.hydra,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  114: {
    name: "Залив авроры",
    sector: galaxySectors.valdis,
    biome: biomes.tundra,
    weatherConditions: [],
  },
  115: {
    name: "Пента",
    sector: galaxySectors.lacaille,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  116: {
    name: "Елливаре",
    sector: galaxySectors.talus,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  117: {
    name: "Вог-сойот",
    sector: galaxySectors.tanis,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  118: {
    name: "Киррик",
    sector: galaxySectors.arturion,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  119: {
    name: "Мортакс-прайм",
    sector: galaxySectors.arturion,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  120: {
    name: "Станция «Уилфорд»",
    sector: galaxySectors.arturion,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  121: {
    name: "Первопроходец II",
    sector: galaxySectors.arturion,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  122: {
    name: "Пески эрсона",
    sector: galaxySectors.falstaff,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  123: {
    name: "Сокорро III",
    sector: galaxySectors.falstaff,
    biome: null,
    weatherConditions: [],
  },
  124: {
    name: "Буровой камень",
    sector: galaxySectors.falstaff,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  125: {
    name: "Фенрир III",
    tidbit: `<p>One of four planets where the Terminid Control System (TCS) was deployed, a network of massive towers that cover the planet in a neurotoxin known as Termincide. The deployment of these TCS towers took the combined effort of many helldivers and eventually lead to the Terminids being driven away for good.</p>`,
    sector: galaxySectors.umlaut,
    biome: biomes.Moon,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  126: {
    name: "Тьюринг",
    tidbit: `<p>One of four planets where the Terminid Control System (TCS) was deployed, a network of massive towers that cover the planet in a neurotoxin known as Termincide. The deployment of these TCS towers took the combined effort of many helldivers and eventually lead to the Terminids being driven away for good.</p>`,
    sector: galaxySectors.umlaut,
    biome: biomes.ethereal,
    weatherConditions: [],
  },
  127: {
    name: "Ангельский риск",
    sector: galaxySectors.orion,
    biome: biomes.tundra,
    weatherConditions: [],
  },
  128: {
    name: "Дарий II",
    sector: galaxySectors.borgus,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  129: {
    name: "Акамар IV",
    sector: galaxySectors.jinXi,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  130: {
    name: "Ахернар II",
    sector: galaxySectors.borgus,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  131: {
    name: "Ахирд III",
    sector: galaxySectors.borgus,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  132: {
    name: "Акраб XI",
    sector: galaxySectors.ursa,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  133: {
    name: "Акрукс IX",
    sector: galaxySectors.ursa,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  134: {
    name: "Акубенс-прайм",
    sector: galaxySectors.gallux,
    biome: null,
    weatherConditions: [],
  },
  135: {
    name: "Эдхара",
    sector: galaxySectors.gallux,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  136: {
    name: "Афойя-бэй",
    sector: galaxySectors.gallux,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  137: {
    name: "Айн-5",
    sector: galaxySectors.hanzo,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  138: {
    name: "Алаирт III",
    sector: galaxySectors.hanzo,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  139: {
    name: "Аламак VII",
    sector: galaxySectors.hanzo,
    biome: null,
    weatherConditions: [],
  },
  140: {
    name: "Алараф",
    sector: galaxySectors.akira,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  141: {
    name: "Алатфар XI",
    sector: galaxySectors.akira,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  142: {
    name: "Эндар",
    sector: galaxySectors.akira,
    biome: null,
    weatherConditions: [],
  },
  143: {
    name: "Асперот-прайм",
    sector: galaxySectors.akira,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  144: {
    name: "Беллатрикс",
    sector: galaxySectors.guang,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  145: {
    name: "Ботейн",
    sector: galaxySectors.guang,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  146: {
    name: "Осупсам",
    sector: galaxySectors.tarragon,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  147: {
    name: "Бринк-2",
    sector: galaxySectors.tarragon,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  148: {
    name: "Бунда II",
    sector: galaxySectors.tarragon,
    biome: null,
    weatherConditions: [],
  },
  149: {
    name: "Канопус",
    sector: galaxySectors.tarragon,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  150: {
    name: "Каф",
    sector: galaxySectors.theseus,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  151: {
    name: "Кастор",
    sector: galaxySectors.theseus,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  152: {
    name: "Дирген",
    sector: galaxySectors.severin,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  153: {
    name: "Дропнир",
    sector: galaxySectors.xzar,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  154: {
    name: "Морт",
    sector: galaxySectors.xzar,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  155: {
    name: "Ингмар",
    sector: galaxySectors.xzar,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  156: {
    name: "Чарбол-VII",
    sector: galaxySectors.andromeda,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  157: {
    name: "Харон-прайм",
    sector: galaxySectors.andromeda,
    biome: null,
    weatherConditions: [weatherConditions.intenseHeat],
  },
  158: {
    name: "Хепесса IV",
    sector: galaxySectors.trigon,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  159: {
    name: "Чухи",
    sector: galaxySectors.lacaille,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  160: {
    name: "Хорт-бэй",
    sector: galaxySectors.lacaille,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  161: {
    name: "Клаорелл",
    sector: galaxySectors.tanis,
    biome: null,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  162: {
    name: "Класа",
    sector: galaxySectors.tanis,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  163: {
    name: "Демиург",
    sector: galaxySectors.tanis,
    biome: biomes.tundra,
    weatherConditions: [],
  },
  164: {
    name: "Денеб II",
    sector: galaxySectors.arturion,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  165: {
    name: "Электра-бэй",
    sector: galaxySectors.arturion,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  166: {
    name: "Энулиале",
    sector: galaxySectors.lestrade,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  167: {
    name: "Эпсилон-финсис VI",
    sector: galaxySectors.lestrade,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  168: {
    name: "Эрата-прайм",
    tidbit: `<p>One of four planets where the Terminid Control System (TCS) was deployed, a network of massive towers that cover the planet in a neurotoxin known as Termincide. The deployment of these TCS towers took the combined effort of many helldivers and eventually lead to the Terminids being driven away for good.</p>`,
    sector: galaxySectors.umlaut,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  169: {
    name: "Эстану",
    sector: galaxySectors.draco,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  170: {
    name: "Фори-прайм",
    sector: galaxySectors.draco,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  171: {
    name: "Гакрукс",
    sector: galaxySectors.jinXi,
    biome: null,
    weatherConditions: [],
  },
  172: {
    name: "Гар-харен",
    sector: galaxySectors.jinXi,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  173: {
    name: "Гатрия",
    sector: galaxySectors.jinXi,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  174: {
    name: "Гемма",
    sector: galaxySectors.ursa,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  175: {
    name: "Гранд Эррант",
    sector: galaxySectors.farsight,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  176: {
    name: "Хадар",
    sector: galaxySectors.ferris,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  177: {
    name: "Хака",
    sector: galaxySectors.leo,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  178: {
    name: "Хальдус",
    sector: galaxySectors.ferris,
    biome: null,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  179: {
    name: "Порт-галье",
    sector: galaxySectors.leo,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  180: {
    name: "Хартон II",
    sector: galaxySectors.ferris,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  181: {
    name: "Хесоэ-прайм",
    sector: galaxySectors.rigel,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  182: {
    name: "Хезе-бэй",
    sector: galaxySectors.hanzo,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  183: {
    name: "Хорт",
    sector: galaxySectors.rigel,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  184: {
    name: "Гидробиус",
    sector: galaxySectors.omega,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  185: {
    name: "Карлия",
    sector: galaxySectors.omega,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  186: {
    name: "Кейд",
    sector: galaxySectors.akira,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  187: {
    name: "Хандарк",
    sector: galaxySectors.guang,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  188: {
    name: "Клака 5",
    sector: galaxySectors.alstrad,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  189: {
    name: "Порт-кнет",
    sector: galaxySectors.alstrad,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  190: {
    name: "Краз",
    sector: galaxySectors.alstrad,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  191: {
    name: "Кума",
    sector: galaxySectors.hawking,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  192: {
    name: "Ластоф",
    sector: galaxySectors.theseus,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  193: {
    name: "Ленг II",
    sector: galaxySectors.quintus,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  194: {
    name: "Лесат",
    sector: galaxySectors.lacaille,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  195: {
    name: "Майя",
    sector: galaxySectors.severin,
    biome: null,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  196: {
    name: "Малевелон-крик",
    sector: galaxySectors.severin,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  197: {
    name: "Мантес",
    sector: galaxySectors.xzar,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  198: {
    name: "Марфарк",
    sector: galaxySectors.andromeda,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  199: {
    name: "Мартале",
    sector: galaxySectors.andromeda,
    biome: null,
    weatherConditions: [],
  },
  200: {
    name: "Матар-бэй",
    sector: galaxySectors.andromeda,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  201: {
    name: "Мейсса",
    sector: galaxySectors.ymir,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  202: {
    name: "Мекбуда",
    sector: galaxySectors.valdis,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  203: {
    name: "Менкент",
    sector: galaxySectors.hydra,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  204: {
    name: "Мерак",
    sector: galaxySectors.valdis,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  205: {
    name: "Марга IV",
    sector: galaxySectors.valdis,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  206: {
    name: "Минхир",
    sector: galaxySectors.gellert,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  207: {
    name: "Минтория",
    sector: galaxySectors.gellert,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  208: {
    name: "Мордия-9",
    sector: galaxySectors.hawking,
    biome: biomes.ethereal,
    weatherConditions: [],
  },
  209: {
    name: "Нанбатея II",
    sector: galaxySectors.lestrade,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  210: {
    name: "Нави VII",
    sector: galaxySectors.lestrade,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  211: {
    name: "Нивель 43",
    sector: galaxySectors.mirin,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  212: {
    name: "Ошоне",
    imageCount: 2,
    sector: galaxySectors.mirin,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  213: {
    name: "Оверго-прайм",
    sector: galaxySectors.sten,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  214: {
    name: "Пандион XXIV",
    sector: galaxySectors.jinXi,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  215: {
    name: "Партион",
    sector: galaxySectors.sten,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  216: {
    name: "Пикок",
    sector: galaxySectors.sten,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  217: {
    name: "Факт-бэй",
    sector: galaxySectors.jinXi,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  218: {
    name: "Феркад II",
    sector: galaxySectors.farsight,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  219: {
    name: "Полярис-прайм",
    sector: galaxySectors.farsight,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  220: {
    name: "Поллукс-31",
    sector: galaxySectors.farsight,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  221: {
    name: "Праса",
    sector: galaxySectors.farsight,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  222: {
    name: "Пропус",
    sector: galaxySectors.leo,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  223: {
    name: "Рас-альгети",
    sector: galaxySectors.leo,
    biome: null,
    weatherConditions: [],
  },
  224: {
    name: "Арди-4",
    sector: galaxySectors.rigel,
    biome: biomes.Moon,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  225: {
    name: "Роуг 5",
    sector: galaxySectors.rigel,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  226: {
    name: "Рирга-бэй",
    sector: galaxySectors.rigel,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  227: {
    name: "Сиэсс",
    sector: galaxySectors.omega,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  228: {
    name: "Сенже-23",
    sector: galaxySectors.omega,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
  229: {
    name: "Сетия",
    sector: galaxySectors.omega,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  230: {
    name: "Шете",
    sector: galaxySectors.xiTauri,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  231: {
    name: "Симнот",
    sector: galaxySectors.xiTauri,
    biome: biomes.rainForest,
    weatherConditions: [weatherConditions.ionStorms],
  },
  232: {
    name: "Сириус",
    sector: galaxySectors.xiTauri,
    biome: biomes.Moon,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  233: {
    name: "Скат-бэй",
    sector: galaxySectors.xiTauri,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  234: {
    name: "Сферион",
    sector: galaxySectors.quintus,
    biome: biomes.jungle,
    weatherConditions: [
      weatherConditions.volcanicActivity,
      weatherConditions.rainstorms,
    ],
  },
  235: {
    name: "Стор та-прайм",
    sector: galaxySectors.quintus,
    biome: biomes.iceMoss,
    weatherConditions: [weatherConditions.extremeCold],
  },
  236: {
    name: "Стаут",
    sector: galaxySectors.quintus,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  237: {
    name: "Термодон",
    sector: galaxySectors.quintus,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  238: {
    name: "Тибит",
    sector: galaxySectors.severin,
    biome: biomes.ethereal,
    weatherConditions: [],
  },
  239: {
    name: "Тьен-кван",
    tidbit: `
      <p>Tien Kwan is the proud home of the renowned Morgunson Arsenal, where the finest Exosuits are forged! These cutting-edge marvels were on the brink of deployment across the galaxy until those pesky Automatons swooped in, trying to take what is ours. But Democracy prevailed once again, for our brave Helldivers swiftly sprang into action to safeguard this treasure trove of technology.</p>
      <p>The Automatons, oblivious to the golden opportunity they had stumbled upon, were swiftly dealt with, thanks to the lightning-fast response of our elite forces. Super Earth's high command breathed a collective sigh of relief as Tien Kwan was liberated on March 8th, securing the future of the EXO-45 Patriot Exosuits and ensuring its immediate availability for requisition by our valiant troops. Another victory for Super Earth, thanks to the unwavering courage of our Helldivers!</p>
    `,
    sector: galaxySectors.theseus,
    biome: biomes.iceMossSpecial,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  240: {
    name: "Труст",
    sector: galaxySectors.trigon,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  241: {
    name: "Убанея",
    sector: galaxySectors.severin,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  242: {
    name: "Устоту",
    sector: galaxySectors.trigon,
    biome: biomes.desert,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.tremors,
    ],
  },
  243: {
    name: "Вандалон IV",
    sector: galaxySectors.trigon,
    biome: biomes.Moon,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  244: {
    name: "Верилия-5",
    sector: galaxySectors.trigon,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  245: {
    name: "Васат",
    sector: galaxySectors.ymir,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.acidStorms,
    ],
  },
  246: {
    name: "Вега-бэй",
    sector: galaxySectors.ymir,
    biome: biomes.winter,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.blizzards,
    ],
  },
  247: {
    name: "Везен",
    sector: galaxySectors.ymir,
    biome: biomes.desolate,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.fireTornadoes,
    ],
  },
  248: {
    name: "Виндемитарикс-прайм",
    sector: galaxySectors.valdis,
    biome: biomes.ethereal,
    weatherConditions: [],
  },
  249: {
    name: "Экс-45",
    sector: galaxySectors.ymir,
    biome: biomes.swamp,
    weatherConditions: [weatherConditions.thickFog],
  },
  250: {
    name: "Йед-приор",
    sector: galaxySectors.tanis,
    biome: biomes.crimsonMoor,
    weatherConditions: [weatherConditions.ionStorms],
  },
  251: {
    name: "Зефия",
    sector: galaxySectors.tanis,
    biome: biomes.ethereal,
    weatherConditions: [],
  },
  252: {
    name: "Зосма",
    sector: galaxySectors.gellert,
    biome: biomes.Moon,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  253: {
    name: "Зания-прайм",
    sector: galaxySectors.gellert,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  254: {
    name: "Скиттер",
    sector: galaxySectors.hawking,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  255: {
    name: "Эйфория III",
    sector: galaxySectors.hawking,
    biome: biomes.Moon,
    weatherConditions: [
      weatherConditions.extremeCold,
      weatherConditions.meteorStorms,
    ],
  },
  256: {
    name: "Диаспора X",
    sector: galaxySectors.lestrade,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  257: {
    name: "Самоцветные утесы",
    sector: galaxySectors.lestrade,
    biome: biomes.highlands,
    weatherConditions: [
      weatherConditions.thickFog,
      weatherConditions.rainstorms,
    ],
  },
  258: {
    name: "Загон-прайм",
    sector: galaxySectors.mirin,
    biome: null,
    weatherConditions: [
      weatherConditions.intenseHeat,
      weatherConditions.sandstorms,
    ],
  },
  259: {
    name: "Омикрон",
    sector: galaxySectors.lestrade,
    biome: biomes.tundra,
    weatherConditions: [],
  },
  260: {
    name: "Киберстан",
    sector: galaxySectors.valdis,
    biome: biomes.canyon,
    weatherConditions: [weatherConditions.tremors],
  },
};
