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
        "Лицензия на благотворительность",
        "Упрощенная подача документов",
        "Ручные тележки",
        "Передовые методы упаковки",
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
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems[2],
          stratagemStore.stratagems[6],
          stratagemStore.stratagems[31],
          stratagemStore.stratagems[30],
          stratagemStore.stratagems[0],
          stratagemStore.stratagems[4],
          stratagemStore.stratagems[1],
        ],
        secondLevel: [
          stratagemStore.stratagems[2],
          stratagemStore.stratagems[5],
          stratagemStore.stratagems[6],
          stratagemStore.stratagems[31],
          stratagemStore.stratagems[35],
          stratagemStore.stratagems[7],
          stratagemStore.stratagems[30],
          stratagemStore.stratagems[0],
          stratagemStore.stratagems[4],
          stratagemStore.stratagems[1],
          stratagemStore.stratagems[3],
        ],
        thirdLevel: [
          stratagemStore.stratagems[36],
          stratagemStore.stratagems[40],
          stratagemStore.stratagems[34],
          stratagemStore.stratagems[29],
          stratagemStore.stratagems[33],
          stratagemStore.stratagems[28],
        ],
        fourthLevel: [],
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
        "Взрывная шрапнель",
        "Больше пушек",
        "Перезарядка в невесомости",
        "Мониторинг атмосферы",
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
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems[12],
          stratagemStore.stratagems[14],
          stratagemStore.stratagems[9],
          stratagemStore.stratagems[22],
          stratagemStore.stratagems[11],
          stratagemStore.stratagems[10],
        ],
        secondLevel: [
          stratagemStore.stratagems[8],
          stratagemStore.stratagems[12],
          stratagemStore.stratagems[11],
          stratagemStore.stratagems[10],
        ],
        thirdLevel: [
          stratagemStore.stratagems[8],
          stratagemStore.stratagems[12],
          stratagemStore.stratagems[23],
          stratagemStore.stratagems[22],
          stratagemStore.stratagems[14],
          stratagemStore.stratagems[24],
          stratagemStore.stratagems[9],
          stratagemStore.stratagems[13],
          stratagemStore.stratagems[22],
          stratagemStore.stratagems[11],
          stratagemStore.stratagems[10],
        ],
        fourthLevel: [],
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
        "Жидкостная вентиляция кабины",
        "Надбавка механикам",
        "Расширенный боевой отсек",
        "Боевой отсек XXL",
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
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems[21],
          stratagemStore.stratagems[16],
          stratagemStore.stratagems[15],
          stratagemStore.stratagems[19],
          stratagemStore.stratagems[17],
          stratagemStore.stratagems[20],
        ],
        secondLevel: [],
        thirdLevel: [
          stratagemStore.stratagems[21],
          stratagemStore.stratagems[16],
          stratagemStore.stratagems[15],
          stratagemStore.stratagems[19],
          stratagemStore.stratagems[17],
          stratagemStore.stratagems[20],
        ],
        fourthLevel: [],
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
        "Обновление программ прицеливания",
        "Ядерный радар",
        "Усилитель руля",
        "Интенсивное горение",
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
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems[8],
          stratagemStore.stratagems[12],
          stratagemStore.stratagems[23],
          stratagemStore.stratagems[22],
          stratagemStore.stratagems[14],
          stratagemStore.stratagems[24],
          stratagemStore.stratagems[9],
          stratagemStore.stratagems[13],
          stratagemStore.stratagems[22],
          stratagemStore.stratagems[11],
          stratagemStore.stratagems[10],
        ],
        secondLevel: [],
        thirdLevel: [],
        fourthLevel: [],
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
        "Искусственное дополнение",
        "Улучшенная конструкция",
        "Система быстрого запуска",
        "Удлиненная цепь",
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
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems[26],
          stratagemStore.stratagems[43],
          stratagemStore.stratagems[42],
          stratagemStore.stratagems[38],
          stratagemStore.stratagems[27],
          stratagemStore.stratagems[39],
          stratagemStore.stratagems[28],
          stratagemStore.stratagems[37],
          stratagemStore.stratagems[41],
          stratagemStore.stratagems[32],
          stratagemStore.stratagems[25],
        ],
        secondLevel: [
          stratagemStore.stratagems[43],
          stratagemStore.stratagems[42],
          stratagemStore.stratagems[38],
          stratagemStore.stratagems[27],
          stratagemStore.stratagems[39],
          stratagemStore.stratagems[37],
          stratagemStore.stratagems[41],
        ],
        thirdLevel: [
          stratagemStore.stratagems[26],
          stratagemStore.stratagems[27],
          stratagemStore.stratagems[28],
          stratagemStore.stratagems[32],
          stratagemStore.stratagems[25],
        ],
        fourthLevel: [
          stratagemStore.stratagems[39],
          stratagemStore.stratagems[31],
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
        "Динамическое отслеживание",
        "Амортизирующий гель",
        "Высококачественная смазка",
        "Поглощенный взрыв",
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
          commonSampleCount: 80,
          rareSampleCount: 80,
          superSampleCount: 10,
        },
      ],
      improvementAffectedStratagems: {
        firstLevel: [
          stratagemStore.stratagems[43],
          stratagemStore.stratagems[42],
          stratagemStore.stratagems[38],
          stratagemStore.stratagems[39],
          stratagemStore.stratagems[37],
          stratagemStore.stratagems[41],
        ],
        secondLevel: [
          stratagemStore.stratagems[43],
          stratagemStore.stratagems[42],
          stratagemStore.stratagems[38],
          stratagemStore.stratagems[39],
          stratagemStore.stratagems[37],
          stratagemStore.stratagems[41],
        ],
        thirdLevel: [
          stratagemStore.stratagems[43],
          stratagemStore.stratagems[42],
          stratagemStore.stratagems[38],
          stratagemStore.stratagems[39],
          stratagemStore.stratagems[37],
          stratagemStore.stratagems[41],
        ],
        fourthLevel: [
          stratagemStore.stratagems[43],
          stratagemStore.stratagems[42],
          stratagemStore.stratagems[38],
          stratagemStore.stratagems[39],
          stratagemStore.stratagems[37],
          stratagemStore.stratagems[41],
        ],
      },
    },
  ] as ShipModule[];

  constructor() {
    makeAutoObservable(this);
  }
}

export const shipModulesStore = new ShipModulesStore();
