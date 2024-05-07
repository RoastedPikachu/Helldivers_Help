import { makeAutoObservable } from "mobx";

import { stratagemStore } from "@/store/StratagemStore";

import { ShipModule } from "@/utils/dataInterfaces";

class ShipModulesStore {
  shipModules = [
    {
      id: 1,
      title: "Административный центр патриотизма",
      levelImages: [
        "/static/ShipModules/PatrioticAdministrationCenterLvl1.webp",
        "/static/ShipModules/PatrioticAdministrationCenterLvl2.webp",
        "/static/ShipModules/PatrioticAdministrationCenterLvl3.webp",
        "/static/ShipModules/PatrioticAdministrationCenterLvl4.webp",
      ],
      improvementTitles: [
        "ЛИЦЕНЗИЯ НА БЛАГОТВОРИТЕЛЬНОСТЬ",
        "УПРОЩЕННАЯ ПОДАЧА ДОКУМЕНТОВ",
        "РУЧНЫЕ ТЕЛЕЖКИ",
        "ПЕРЕДОВЫЕ МЕТОДЫ УПАКОВКИ",
      ],
      improvementDescriptions: [
        "Приобретает постоянный доступ к боеприпасам от благотворительного фонда «Поддержи героя», позволяющего патриотично настроенным членам семей обеспечить снабжение своих родных на поле боя.",
        "Заранее утверждает следующие справки, которые используются в процессе утверждения оружия поддержки: справка 99-С («Необходимость боеприпасов»), справка 88-1 (анкета «Вклад в демократию») и справка 104 («Отказ от рисков сопутствующих потерь»).",
        "Снабжает бойцов ручными тележками, на которых можно перемещать несколько стратагем рюкзака одновременно. Это позволяет сократить время перезарядки и избежать поясничных травм.",
        "Санкционирует проведение 8-недельного курса обучения команды передовым методам упаковки (ПМУ), в результате чего увеличивается вместимость ящиков с припасами.",
      ],
      improvementEffects: [
        "Увеличивает количество магазинов, поставляемых с оружием поддержки.",
        "Сокращает время перезарядки стратагемы Оружие поддержки на 10%.",
        "Сокращает время перезарядки всех стратагем рюкзака на 10%.",
        "Ящики с припасами восполняют запас магазинов для оружия поддержки до максимума.",
      ],
      improvementPrices: [
        {
          commonSampleCount: 60,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 40,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 60,
          superSampleCount: 5,
        },
        {
          commonSampleCount: 150,
          rareSampleCount: 150,
          superSampleCount: 15,
          requisites: 20000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[8],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[3],
          stratagemStore.stratagems.engineerBay[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[0],
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.patrioticAdministrationCenter[1],
        ],
        secondLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[6],
          stratagemStore.stratagems.patrioticAdministrationCenter[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[8],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[3],
          stratagemStore.stratagems.engineerBay[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[0],
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.patrioticAdministrationCenter[4],
          stratagemStore.stratagems.patrioticAdministrationCenter[1],
          stratagemStore.stratagems.patrioticAdministrationCenter[3],
          stratagemStore.stratagems.engineerBay[8],
        ],
        thirdLevel: [
          stratagemStore.stratagems.engineerBay[9],
          stratagemStore.stratagems.roboticsWorkshop[3],
          stratagemStore.stratagems.engineerBay[6],
          stratagemStore.stratagems.engineerBay[1],
          stratagemStore.stratagems.hangar[4],
          stratagemStore.stratagems.engineerBay[5],
        ],
        fourthLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[6],
          stratagemStore.stratagems.patrioticAdministrationCenter[7],
          stratagemStore.stratagems.patrioticAdministrationCenter[8],
          stratagemStore.stratagems.engineerBay[3],
          stratagemStore.stratagems.patrioticAdministrationCenter[9],
          stratagemStore.stratagems.engineerBay[2],
          stratagemStore.stratagems.patrioticAdministrationCenter[0],
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.patrioticAdministrationCenter[4],
          stratagemStore.stratagems.patrioticAdministrationCenter[1],
        ],
      },
    },
    {
      id: 2,
      title: "Орбитальные пушки",
      levelImages: [
        "/static/ShipModules/OrbitalCannonLvl1.webp",
        "/static/ShipModules/OrbitalCannonLvl2.webp",
        "/static/ShipModules/OrbitalCannonLvl3.webp",
        "/static/ShipModules/OrbitalCannonLvl4.webp",
      ],
      improvementTitles: [
        "ВЗРЫВНАЯ ШРАПНЕЛЬ",
        "БОЛЬШЕ ПУШЕК",
        "ПЕРЕЗАРЯДКА В НЕВЕСОМОСТИ",
        "МОНИТОРИНГ АТМОСФЕРЫ",
      ],
      improvementDescriptions: [
        "Контрольные военные группы назвали взрывную шрапнель «жестокой», «беспощадной» и «отлично подходящей» для распространения демократии.",
        "Спустя годы исследований, потраченных на улучшение эффективности и боевой мощи суперэсминца, Министерство науки сделало вывод, что нужно добавить больше пушек.",
        "Заменяет ручную перезарядку пушек со стороны дула на более быструю фронтальную загрузку.",
        "Дает подписку на прямой эфир сводок погоды, что позволяет повысить точность орбитального прицеливания.",
      ],
      improvementEffects: [
        "Уменьшает снижение урона, распространяющегося от центра взрывов орбитальных стратагем.",
        "Орбитальные залпы выстреливают дополнительно 1 шт. снарядов за каждый залп.",
        "Время перезарядки орбитальных стратагем уменьшено на 10%.",
        "Разброс орбитального залпа ОФ уменьшен на 15%.",
      ],
      improvementPrices: [
        {
          commonSampleCount: 100,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 60,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 200,
          rareSampleCount: 150,
          superSampleCount: 15,
          requisites: 25000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.orbitalCannon[4],
          stratagemStore.stratagems.orbitalCannon[6],
          stratagemStore.stratagems.orbitalCannon[1],
          stratagemStore.stratagems.bridge[0],
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
        secondLevel: [
          stratagemStore.stratagems.orbitalCannon[0],
          stratagemStore.stratagems.orbitalCannon[4],
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
        thirdLevel: [
          stratagemStore.stratagems.orbitalCannon[0],
          stratagemStore.stratagems.orbitalCannon[4],
          stratagemStore.stratagems.bridge[2],
          stratagemStore.stratagems.orbitalCannon[6],
          stratagemStore.stratagems.bridge[3],
          stratagemStore.stratagems.orbitalCannon[1],
          stratagemStore.stratagems.orbitalCannon[5],
          stratagemStore.stratagems.bridge[0],
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
        fourthLevel: [
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
      },
    },
    {
      id: 3,
      title: "Ангар",
      levelImages: [
        "/static/ShipModules/HangarLvl1.webp",
        "/static/ShipModules/HangarLvl2.webp",
        "/static/ShipModules/HangarLvl3.webp",
        "/static/ShipModules/HangarLvl4.webp",
      ],
      improvementTitles: [
        "ЖИДКОСТНАЯ ВЕНТИЛЯЦИЯ КАБИНЫ",
        "НАДБАВКА МЕХАНИКАМ",
        "РАСШИРЕННЫЙ БОЕВОЙ ОТСЕК",
        "БОЕВОЙ ОТСЕК XXL",
      ],
      improvementDescriptions: [
        "Наполняет кабины перфторуглеродами, которые поглощают перегрузки и позволяют пилотам совершать более резкие маневры, не теряя при этом сознание.",
        "Официально одобренная доплата за риск позволяет механикам пополнять боезапасы «Орла» во время космических полетов.",
        "Уменьшает пространство для ног в кабине, что позволяет снарядить «Орла» дополнительным боезапасом.",
        "Еще больше увеличивает вместимость боевого отсека «Орла», исключая из конструкции лишние элементы, например, системы пожаротушения и катапультирования, а также воздушные подушки.",
      ],
      improvementEffects: [
        "Сокращает время перезарядки стратагемы «Орла» на 50%.",
        "Сокращает время пополнения боеприпасов «Орла» на 20%.",
        "Позволяет дополнительно использовать 1 шт. стратагем «Орла» до реактивации.",
        "Стратагемы «Орла», сбрасывающие по несколько бомб, сбрасывают дополнительные бомбы (1).",
      ],
      improvementPrices: [
        {
          commonSampleCount: 80,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 40,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 150,
          rareSampleCount: 150,
          superSampleCount: 15,
          requisites: 25000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.hangar[7],
          stratagemStore.stratagems.hangar[1],
          stratagemStore.stratagems.hangar[0],
          stratagemStore.stratagems.hangar[5],
          stratagemStore.stratagems.hangar[3],
          stratagemStore.stratagems.hangar[2],
          stratagemStore.stratagems.hangar[6],
        ],
        secondLevel: [],
        thirdLevel: [
          stratagemStore.stratagems.hangar[7],
          stratagemStore.stratagems.hangar[1],
          stratagemStore.stratagems.hangar[0],
          stratagemStore.stratagems.hangar[5],
          stratagemStore.stratagems.hangar[3],
          stratagemStore.stratagems.hangar[2],
          stratagemStore.stratagems.hangar[6],
        ],
        fourthLevel: [
          stratagemStore.stratagems.hangar[1],
          stratagemStore.stratagems.hangar[5],
          stratagemStore.stratagems.hangar[3],
          stratagemStore.stratagems.hangar[2],
        ],
      },
    },
    {
      id: 4,
      title: "Мостик",
      levelImages: [
        "/static/ShipModules/BridgeLvl1.webp",
        "/static/ShipModules/BridgeLvl2.webp",
        "/static/ShipModules/BridgeLvl3.webp",
        "/static/ShipModules/BridgeLvl4.webp",
      ],
      improvementTitles: [
        "ОБНОВЛЕНИЕ ПРОГРАММ ПРИЦЕЛИВАНИЯ",
        "ЯДЕРНЫЙ РАДАР",
        "УСИЛИТЕЛЬ РУЛЯ",
        "ИНТЕНСИВНОЕ ГОРЕНИЕ",
      ],
      improvementDescriptions: [
        "Сокращает время, необходимое для орбитального прицеливания, благодаря обновлению программного обеспечения до премиум-версии.",
        "Увеличивает радиус действия радара Адского Десантника за счет новой мощной батареи на плутонии-210.",
        "Устанавливает электронные приводы, которые дополняют стандартный ножной способ управления Адскими Капсулами.",
        "Повышает температуру пламени зажигательного оружия, обогащая горючее точно рассчитанным составом из термита, белого фосфора, капсаицина, аллилгорчичного масла и еще 19 горючих веществ.",
      ],
      improvementEffects: [
        "Сокращает время, необходимое для запуска орбитальных ударных стратагем на 1 сек.",
        "Увеличивает дальность обнаружения врагов на мини-карте на 50м.",
        "Улучшает управление Адскими Капсулами во время сброса.",
        "Огненный урон стратагем увеличен на 25%.",
      ],
      improvementPrices: [
        {
          commonSampleCount: 60,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 40,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 200,
          rareSampleCount: 150,
          superSampleCount: 15,
          requisites: 25000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.orbitalCannon[0],
          stratagemStore.stratagems.orbitalCannon[4],
          stratagemStore.stratagems.bridge[2],
          stratagemStore.stratagems.bridge[1],
          stratagemStore.stratagems.orbitalCannon[6],
          stratagemStore.stratagems.bridge[3],
          stratagemStore.stratagems.orbitalCannon[1],
          stratagemStore.stratagems.orbitalCannon[5],
          stratagemStore.stratagems.bridge[0],
          stratagemStore.stratagems.orbitalCannon[3],
          stratagemStore.stratagems.orbitalCannon[2],
        ],
        secondLevel: [],
        thirdLevel: [],
        fourthLevel: [
          stratagemStore.stratagems.patrioticAdministrationCenter[5],
          stratagemStore.stratagems.hangar[3],
          stratagemStore.stratagems.engineerBay[4],
        ],
      },
    },
    {
      id: 5,
      title: "Инженерный отсек",
      levelImages: [
        "/static/ShipModules/EngineerBayLvl1.webp",
        "/static/ShipModules/EngineerBayLvl2.webp",
        "/static/ShipModules/EngineerBayLvl3.webp",
        "/static/ShipModules/EngineerBayLvl4.webp",
      ],
      improvementTitles: [
        "ИСКУССТВЕННОЕ ДОПОЛНЕНИЕ",
        "УЛУЧШЕННАЯ КОНСТРУКЦИЯ",
        "СИСТЕМА БЫСТРОГО ЗАПУСКА",
        "УДЛИНЕННАЯ ЦЕПЬ",
      ],
      improvementDescriptions: [
        "Внедряет умеренные дозы амфетамина и андрогенных стероидов в рацион заряжающих. Вдобавок к прочим эффектам увеличивает их скорость, выносливость и концентрацию.",
        "Укрепляет турели и повышает их долговечность с помощью современных цианоакриловых связующих веществ.",
        "Запускает снаряды Адской Капсулы с помощью мгновенного подрыва стартового заряда.",
        "Повышает мощность электрического оружия, надежно соединяя множество внутренних удлинителей дуговых устройств в одну длинную линейную цепь.",
      ],
      improvementEffects: [
        "Сокращает время презарядки для турелей, пополнения запасов и позиционных стратагем на 10%.",
        "Увеличивает прочность стратагем турелей на 50%.",
        "Сокращает время развертывания позиционных стратагем до нуля.",
        "Электрические дуги из оружия и турелей поражают на одного врага больше.",
      ],
      improvementPrices: [
        {
          commonSampleCount: 60,
          rareSampleCount: 10,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 60,
          superSampleCount: 5,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 200,
          rareSampleCount: 150,
          superSampleCount: 20,
          requisites: 20000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.bridge[5],
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.bridge[6],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.engineerBay[0],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
          stratagemStore.stratagems.engineerBay[4],
          stratagemStore.stratagems.bridge[4],
        ],
        secondLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.bridge[6],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
        thirdLevel: [
          stratagemStore.stratagems.bridge[5],
          stratagemStore.stratagems.bridge[6],
          stratagemStore.stratagems.engineerBay[0],
          stratagemStore.stratagems.engineerBay[4],
          stratagemStore.stratagems.bridge[4],
        ],
        fourthLevel: [
          stratagemStore.stratagems.engineerBay[7],
          stratagemStore.stratagems.bridge[6],
        ],
      },
    },
    {
      id: 6,
      title: "Роботехнический цех",
      levelImages: [
        "/static/ShipModules/RoboticsWorkshopLvl1.webp",
        "/static/ShipModules/RoboticsWorkshopLvl2.webp",
        "/static/ShipModules/RoboticsWorkshopLvl3.webp",
        "/static/ShipModules/RoboticsWorkshopLvl4.webp",
      ],
      improvementTitles: [
        "ДИНАМИЧЕСКОЕ ОТСЛЕЖИВАНИЕ",
        "АМОРТИЗИРУЮЩИЙ ГЕЛЬ",
        "ВЫСОКОКАЧЕСТВЕННАЯ СМАЗКА",
        "ПОГЛОЩЕННЫЙ ВЗРЫВ",
      ],
      improvementDescriptions: [
        "Модернизированная система наблюдения непрерывно отслеживает пользователя вне зависимости от того, где он находится и что делает, постоянно поддерживая турельную пушку в режиме боеготовности.",
        "Выстилает капсулы турелей амортизирующим гидрогелем, что позволяет заполнить освободившиеся от амортизаторов место дополнительным боезапасом.",
        "Наносит смазку Супержеле на станины турелей, которая практически полностью избавляет их от трения и способствует плавным механическим движениям.",
        "Укрепляет турели щитками из полистирола в форме восьмерки. Щитки поглощают термическую энергию и энергию взрыва.",
      ],
      improvementEffects: [
        "Снижает время, необходимое для запуска всех стратагем турелей.",
        "Увеличивает боезапас всех стратагем турелей на 50%.",
        "Позволяет стратагемам турелей быстрее вращаться и находить цели.",
        "Турели получают на 50% меньше урона от взрывов.",
      ],
      improvementPrices: [
        {
          commonSampleCount: 60,
          rareSampleCount: 20,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 40,
          superSampleCount: 5,
        },
        {
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
        {
          commonSampleCount: 150,
          rareSampleCount: 150,
          superSampleCount: 20,
          requisites: 25000,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
        secondLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
        thirdLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
        fourthLevel: [
          stratagemStore.stratagems.roboticsWorkshop[6],
          stratagemStore.stratagems.roboticsWorkshop[5],
          stratagemStore.stratagems.roboticsWorkshop[1],
          stratagemStore.stratagems.bridge[6],
          stratagemStore.stratagems.roboticsWorkshop[2],
          stratagemStore.stratagems.roboticsWorkshop[0],
          stratagemStore.stratagems.roboticsWorkshop[4],
        ],
      },
    },
  ] as ShipModule[];

  constructor() {
    makeAutoObservable(this);
  }
}

export const shipModulesStore = new ShipModulesStore();
