import { makeAutoObservable } from "mobx";

import { stratagemStore } from "@/store/StratagemStore";

import { ShipModule } from "@/utils/dataInterfaces";

class ShipModulesStore {
  shipModules = [
    {
      id: 1,
      title: "Административный центр патриотизма",
      levelImages: [
        "/static/shipModules/PatrioticAdministrationCenterLvl1.jpg",
        "/static/shipModules/PatrioticAdministrationCenterLvl2.jpg",
        "/static/shipModules/PatrioticAdministrationCenterLvl3.jpg",
      ],
      improvementTitles: [
        "Лицензия на благотворительность",
        "Упрощенная подача документов",
        "Ручные тележки",
      ],
      improvementDescriptions: [
        "Приобретает постоянный доступ к боеприпасам от благотворительного фонда «Поддержи героя», позволяющего патриотично настроенным членам семей обеспечить снабжение своих родных на поле боя.",
        "Заранее утверждает следующие справки, которые используются в процессе утверждения оружия поддержки: справка 99-С («Необходимость боеприпасов»), справка 88-1 (анкета «Вклад в демократию») и справка 104 («Отказ от рисков сопутствующих потерь»).",
        "Снабжает бойцов ручными тележками, на которых можно перемещать несколько стратагем рюкзака одновременно. Это позволяет сократить время перезарядки и избежать поясничных травм.",
      ],
      improvementEffects: [
        "Увеличивает количество магазинов, поставляемых с оружием поддержки.",
        "Сокращает время перезарядки стратагемы Оружие поддержки на 10%.",
        "Сокращает время перезарядки всех стратагем рюкзака на 10%.",
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
      },
    },
    {
      id: 2,
      title: "Орбитальные пушки",
      levelImages: [
        "/static/shipModules/OrbitalCannonLvl1.jpg",
        "/static/shipModules/OrbitalCannonLvl2.jpg",
        "/static/shipModules/OrbitalCannonLvl3.jpg",
      ],
      improvementTitles: [
        "Взрывная шрапнель",
        "Больше пушек",
        "Перезарядка в невесомости",
      ],
      improvementDescriptions: [
        "Контрольные военные группы назвали взрывную шрапнель «жестокой», «беспощадной» и «отлично подходящей» для распространения демократии.",
        "Спустя годы исследований, потраченных на улучшение эффективности и боевой мощи суперэсминца, Министерство науки сделало вывод, что нужно добавить больше пушек.",
        "Заменяет ручную перезарядку пушек со стороны дула на более быструю фронтальную загрузку.",
      ],
      improvementEffects: [
        "Уменьшает снижение урона, распространяющегося от центра взрывов орбитальных стратагем.",
        "Орбитальные залпы выстреливают дополнительно 1 шт. снарядов за каждый залп.",
        "Время перезарядки орбитальных стратагем уменьшено на 10%.",
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
      },
    },
    {
      id: 3,
      title: "Ангар",
      levelImages: [
        "/static/shipModules/HangarLvl1.jpg",
        "/static/shipModules/HangarLvl2.jpg",
        "/static/shipModules/HangarLvl3.jpg",
      ],
      improvementTitles: [
        "Жидкостная вентиляция кабины",
        "Надбавка механикам",
        "Расширенный боевой отсек",
      ],
      improvementDescriptions: [
        "Наполняет кабины перфторуглеродами, которые поглощают перегрузки и позволяют пилотам совершать более резкие маневры, не теряя при этом сознание.",
        "Официально одобренная доплата за риск позволяет механикам пополнять боезапасы «Орла» во время космических полетов.",
        "Уменьшает пространство для ног в кабине, что позволяет снарядить «Орла» дополнительным боезапасом.",
      ],
      improvementEffects: [
        "Сокращает время перезарядки стратагемы «Орла» на 50%.",
        "Сокращает время пополнения боеприпасов «Орла» на 20%.",
        "Позволяет дополнительно использовать 1 шт. стратагем «Орла» до реактивации.",
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
      },
    },
    {
      id: 4,
      title: "Мостик",
      levelImages: [
        "/static/shipModules/BridgeLvl1.jpg",
        "/static/shipModules/BridgeLvl2.jpg",
        "/static/shipModules/BridgeLvl3.jpg",
      ],
      improvementTitles: [
        "Обновление программ прицеливания",
        "Ядерный радар",
        "Усилитель руля",
      ],
      improvementDescriptions: [
        "Сокращает время, необходимое для орбитального прицеливания, благодаря обновлению программного обеспечения до премиум-версии.",
        "Увеличивает радиус действия радара Адского Десантника за счет новой мощной батареи на плутонии-210.",
        "Устанавливает электронные приводы, которые дополняют стандартный ножной способ управления Адскими Капсулами.",
      ],
      improvementEffects: [
        "Сокращает время, необходимое для запуска орбитальных ударных стратагем на 1 сек.",
        "Увеличивает дальность обнаружения врагов на мини-карте на 50м.",
        "Улучшает управление Адскими Капсулами во время сброса.",
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
      },
    },
    {
      id: 5,
      title: "Инженерный отсек",
      levelImages: [
        "/static/shipModules/EngineerBayLvl1.jpg",
        "/static/shipModules/EngineerBayLvl2.jpg",
        "/static/shipModules/EngineerBayLvl3.jpg",
      ],
      improvementTitles: [
        "Искусственное дополнение",
        "Улучшенная конструкция",
        "Система быстрого запуска",
      ],
      improvementDescriptions: [
        "Внедряет умеренные дозы амфетамина и андрогенных стероидов в рацион заряжающих. Вдобавок к прочим эффектам увеличивает их скорость, выносливость и концентрацию.",
        "Укрепляет турели и повышает их долговечность с помощью современных цианоакриловых связующих веществ.",
        "Запускает снаряды Адской Капсулы с помощью мгновенного подрыва стартового заряда.",
      ],
      improvementEffects: [
        "Сокращает время презарядки для турелей, пополнения запасов и позиционных стратагем на 10%.",
        "Увеличивает прочность стратагем турелей на 50%.",
        "Сокращает время развертывания позиционных стратагем до нуля.",
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
      },
    },
    {
      id: 6,
      title: "Роботехнический цех",
      levelImages: [
        "/static/shipModules/RoboticsWorkshopLvl1.jpg",
        "/static/shipModules/RoboticsWorkshopLvl2.jpg",
        "/static/shipModules/RoboticsWorkshopLvl3.jpg",
      ],
      improvementTitles: [
        "Динамическое отслеживание",
        "Амортизирующий гель",
        "Высококачественная смазка",
      ],
      improvementDescriptions: [
        "Модернизированная система наблюдения непрерывно отслеживает пользователя вне зависимости от того, где он находится и что делает, постоянно поддерживая турельную пушку в режиме боеготовности.",
        "Выстилает капсулы турелей амортизирующим гидрогелем, что позволяет заполнить освободившиеся от амортизаторов место дополнительным боезапасом.",
        "Наносит смазку Супержеле на станины турелей, которая практически полностью избавляет их от трения и способствует плавным механическим движениям.",
      ],
      improvementEffects: [
        "Снижает время, необходимое для запуска всех стратагем турелей.",
        "Увеличивает боезапас всех стратагем турелей на 50%.",
        "Позволяет стратагемам турелей быстрее вращаться и находить цели.",
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
      },
    },
  ] as ShipModule[];

  constructor() {
    makeAutoObservable(this);
  }
}

export const shipModulesStore = new ShipModulesStore();
