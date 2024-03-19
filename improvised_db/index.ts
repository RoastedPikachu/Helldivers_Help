import { Tip, Level, Rank, Stratagem } from "@/utils/generalInterfaces";

export const tips = [
  {
    id: 1,
    text: "Вы знаете, что во время переходов мы показываем советы? ",
  },
  {
    id: 2,
    text: "Управляемая демократия — краеугольный камень развитой цивилизации. ",
  },
  {
    id: 3,
    text: "Супер-Земля рекомендует на каждом задании в течение как минимум 2,4 секунды любоваться пейзажем. Счастливый Адский Десантник — смертоносный Адский Десантник. ",
  },
  {
    id: 4,
    text: "Вы элита Супер-Земли. Всегда помните об этом. ",
  },
  {
    id: 5,
    text: "«Орел» — ударный летательный аппарат быстрого реагирования, который гораздо быстрее огневой поддержки с орбиты. ",
  },
  {
    id: 6,
    text: "Галактическая война — всеобщее дело. Только работая сообща мы можем быть уверены, что планеты не попадут врагам в руки. ",
  },
  {
    id: 7,
    text: "Если не получилось с первого раза, ныряйте еще... И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще... ",
  },
  {
    id: 8,
    text: "На экране выбора заданий можно увидеть дневную и ночную сторону планеты. Выбирайте задания, которые вам по душе! ",
  },
  {
    id: 9,
    text: "Видите планету, которая вот-вот перейдет под контроль врага? Соберите своих товарищей по Адскому десанту и приступите к защите. На счету каждое задание! ",
  },
  {
    id: 10,
    text: "Когда встречаетесь с ботами, помните про УХУ: укрытие, храбрость и еще раз укрытие. ",
  },
  {
    id: 11,
    text: "Труднопроходимая местность мешает передвижению. Эксперты рекомендуют избегать снега, грязи, воды, кустарников и лавы. С полным списком можно ознакомиться в разделе D.198-2 руководства. ",
  },
  {
    id: 12,
    text: "Недовольны собой? Измените свой внешний вид, голос и характер в комнате настройки. Все проще простого! ",
  },
  {
    id: 13,
    text: "Когда у вас заканчивается выносливость, вместе с ней падают скорость бега и точность выстрелов. ",
  },
  {
    id: 14,
    text: "Не погибайте. ",
  },
  {
    id: 15,
    text: "Здесь показываются советы. ",
  },
  {
    id: 16,
    text: "Демократия не требует управления, она требует патронов и людей. ",
  },
  {
    id: 17,
    text: "Если враг пытается наладить дипломатические отношения, ПРИСТРЕЛИТЕ ЕГО. Никакого доверия лжецам! ",
  },
  {
    id: 18,
    text: "Не переживайте: если вы не выполните задачу, вас НЕ ОТПРАВЯТ в лагерь свободы. Это лишь слух, распространяемый диссидентами. ",
  },
  {
    id: 19,
    text: "Вы не сможете распространять управляемую демократию, если вы умрете уставшим. Может быть я стану предателем за свои слова, но хорошо отдохните, попейте воды и перерывы сделают вас более эффективным. ",
  },
  {
    id: 20,
    text: "Не забывайте заполнять форму допуска C-01 перед каждым актом, потенциально способным привести к зачатию. ",
  },
  {
    id: 21,
    text: "Удерживайте кнопку перезарядки, чтобы проверить запас боеприпасов. ",
  },
  {
    id: 22,
    text: "В положении лежа вы получаете меньше урона от взрыва. В случае неизбежной опасности — падайте на землю! ",
  },
  {
    id: 23,
    text: "Когда возникают сомнения, отбросьте все мысли! Просто кричите «За демократию!» и отчаянно бросайтесь на трудности. ",
  },
  {
    id: 24,
    text: "Если во время задания кто-то из отряда умирает, не забудьте подобрать образцы павшего товарища. Оплакивать беднягу будете потом! ",
  },
  {
    id: 25,
    text: "Адскими Капсулами можно управлять [немного]. Попробуйте уронить их на врагов! ",
  },
  {
    id: 26,
    text: "Огонь по своим — не лучшая идея. ",
  },
  {
    id: 27,
    text: "Отсчет до детонации гранаты начинается с момента, когда вы заносите руку для броска. Подгадайте момент для взрыва в воздухе! ",
  },
  {
    id: 28,
    text: "Если вы заметили, что боец отряда выражает симпатию врагу, сообщите об этом своему офицеру по демократии. Мыслепреступления убивают! ",
  },
  {
    id: 29,
    text: "На Супер-Земле много праздников, но самый важный из них — 26 октября. День свободы! ",
  },
  {
    id: 30,
    text: "Вы на задании в одиночестве и нуждаетесь в освободительном подкреплении? Используйте аварийный маячок, чтобы призвать товарища по Адскому Десанту. ",
  },
  {
    id: 31,
    text: "Чем дольше длится задание, тем больше становится врагов. ",
  },
  {
    id: 32,
    text: "Используйте стратагему перезарядки «Орла» в периоды боевого затишья, чтобы у вас всегда наготове были «орлиные удары». ",
  },
  {
    id: 33,
    text: "Хотите показать, как решительно поддерживаете капитализм? Тратье медали в «Заслугах»! ",
  },
  {
    id: 34,
    text: "Надоело промахиваться? Используйте режим от первого лица для стрельбы с дальних дистанций. ",
  },
  {
    id: 35,
    text: "Пистолеты и пистолеты-пулеметы можно держать одной рукой, а в другой руке нести различные предметы. ",
  },
  {
    id: 36,
    text: "Убивайте жуков, пока они не подобрались слишком близко. Ничто не защищает ваше личное пространство лучше летящих пуль. ",
  },
  {
    id: 37,
    text: "Помните: СВОБОДА! ",
  },
  {
    id: 38,
    text: "На заданиях постоянно попадаются неисследованные интересные места. Осматривайте их, ведь никогда не знаешь, что можно найти. ",
  },
  {
    id: 39,
    text: "Если враги прут без остановки, найдите, откуда именно они лезут, и устройте облаву! Улей жуков? Уничтожить! Завод ботов? Уничтожить! ",
  },
  {
    id: 40,
    text: "Не волнуйтесь, стимы не вызывают привыкания!* *Исследование оплачено «Фармадаром». «Фармадар» — доверьте нам свою жизнь. ",
  },
  {
    id: 41,
    text: "Для театра военных действий все граждане одинаково важны, но Адские Десантники — самые важные. ",
  },
  {
    id: 42,
    text: "Используйте стимы для заживления ран. ",
  },
  {
    id: 43,
    text: "Содрать панцирь с жука можно различными способами — эксперементируйте, чтобы найти лучший! ",
  },
  {
    id: 44,
    text: "Время нахождения суперэсминца на низкой орбите ограничено. Следите за таймером задания! ",
  },
  {
    id: 45,
    text: "Редкие образцы доступны только на более сложных заданиях. ",
  },
  {
    id: 46,
    text: "Тщательно подбирайте выкладку, чтобы ваш отряд был обеспечен всеми необходимыми ресурсами. От этого зависит судьба демократии! ",
  },
  {
    id: 47,
    text: "Внимательно читайте эти советы. Мы их тщательно подобрали, чтобы повысить ваши шансы на успех. ",
  },
  {
    id: 48,
    text: "У всех стратагем есть сильные и слабые свойства. Подбирайте стратагемы в сответствии с требованиями задания и составом отряда. ",
  },
  {
    id: 49,
    text: "Не паникуйте.",
  },
  {
    id: 50,
    text: "В качестве крайней меры вы можете отбиваться от врагов в ближнем бою. Помните: смерть лучше трусости.",
  },
  {
    id: 51,
    text: "У большинства врагов есть уязвимые и бронированные места. Обучающее руководство ВССЗ рекомендует целиться по уязвимым.",
  },
  {
    id: 52,
    text: "Пока есть время, гранаты с выдернутой чекой можно подбирать и отбрасывать в сторону!",
  },
  {
    id: 53,
    text: "Из бюджетных соображений Адские бомбы требуют ручного наведения. Но не стойте на месте, если только не хотите оказаться на стене мучеников.",
  },
  {
    id: 54,
    text: "Каждая фракция предлагает уникальные испытания. Сочетайте различное снаряжение и пробуйте новые тактики!",
  },
  {
    id: 55,
    text: "Собирайте медали и развивайте прогресс заслуги. Торопиться не нужно, заслуги можно завершать в любое время.",
  },
  {
    id: 56,
    text: "Сложность задания частично определяется типом врагов на территории. Убедитесь, что взяли подходящее вооружение!",
  },
  {
    id: 57,
    text: "Девять из десяти врачей считают, что ранение в области грудной клетки влечет смертельную кровопотерю, если его вовремя не заштопать.",
  },
  {
    id: 58,
    text: "Стрелять лучше по прямой. Огонь под углом может лишь задеть врага и даже срикошетить в членов вашего отряда.",
  },
] as Tip[];

export const ranks = [
  {
    id: 1,
    iconPath: "/static/ranks/CadetIcon.svg",
    title: "Кадет",
    fromLevel: 0,
    xpCount: 0,
  },
  {
    id: 2,
    iconPath: "/static/ranks/SpaceCadetIcon.svg",
    title: "Космический кадет",
    fromLevel: 5,
    xpCount: 1600,
  },
  {
    id: 3,
    iconPath: "/static/ranks/SergeantIcon.svg",
    title: "Сержант",
    fromLevel: 10,
    xpCount: 7100,
  },
  {
    id: 4,
    iconPath: "/static/ranks/MasterSergeantIcon.svg",
    title: "Мастер-сержант",
    fromLevel: 15,
    xpCount: 14400,
  },
  {
    id: 5,
    iconPath: "/static/ranks/ChiefIcon.svg",
    title: "Мичман",
    fromLevel: 20,
    xpCount: 23900,
  },
  {
    id: 6,
    iconPath: "/static/ranks/SpaceChiefPrimeIcon.svg",
    title: "Главный космический мичман",
    fromLevel: 25,
    xpCount: 35900,
  },
  {
    id: 7,
    iconPath: "/static/ranks/DeathCaptainIcon.svg",
    title: "Капитан смерть",
    fromLevel: 30,
    xpCount: 50400,
  },
  {
    id: 8,
    iconPath: "/static/ranks/MarshalIcon.svg",
    title: "Маршал",
    fromLevel: 35,
    xpCount: 67400,
  },
  {
    id: 9,
    iconPath: "/static/ranks/StarMarshalIcon.svg",
    title: "Космический маршал",
    fromLevel: 40,
    xpCount: 87000,
  },
  {
    id: 10,
    iconPath: "/static/ranks/AdmiralIcon.svg",
    title: "Адмирал",
    fromLevel: 45,
    xpCount: 108900,
  },
  {
    id: 11,
    iconPath: "/static/ranks/SkullAdmiralIcon.svg",
    title: "Адмирал Череп",
    fromLevel: 50,
    xpCount: 133400,
  },
  {
    id: 12,
    iconPath: "/static/ranks/SuperCitizenIcon.svg",
    title: "Супер гражданин",
    fromLevel: "Super Citizen издание",
    xpCount: 0,
  },
] as Rank[];

export const levels = [
  {
    id: 1,
    xpRequired: 0,
    xpTotal: 0,
  },
  {
    id: 2,
    xpRequired: 100,
    xpTotal: 100,
  },
  {
    id: 3,
    xpRequired: 250,
    xpTotal: 350,
  },
  {
    id: 4,
    xpRequired: 500,
    xpTotal: 850,
  },
  {
    id: 5,
    xpRequired: 750,
    xpTotal: 1600,
  },
  {
    id: 6,
    xpRequired: 1000,
    xpTotal: 2600,
  },
  {
    id: 7,
    xpRequired: 1000,
    xpTotal: 3600,
  },
  {
    id: 8,
    xpRequired: 1000,
    xpTotal: 4600,
  },
  {
    id: 9,
    xpRequired: 1250,
    xpTotal: 5850,
  },
  {
    id: 10,
    xpRequired: 1250,
    xpTotal: 7100,
  },
  {
    id: 11,
    xpRequired: 1300,
    xpTotal: 8400,
  },
  {
    id: 12,
    xpRequired: 1500,
    xpTotal: 9900,
  },
  {
    id: 13,
    xpRequired: 1500,
    xpTotal: 11400,
  },
  {
    id: 14,
    xpRequired: 1500,
    xpTotal: 12900,
  },
  {
    id: 15,
    xpRequired: 1500,
    xpTotal: 14400,
  },
  {
    id: 16,
    xpRequired: 1500,
    xpTotal: 15900,
  },
  {
    id: 17,
    xpRequired: 2000,
    xpTotal: 17900,
  },
  {
    id: 18,
    xpRequired: 2000,
    xpTotal: 19900,
  },
  {
    id: 19,
    xpRequired: 2000,
    xpTotal: 21900,
  },
  {
    id: 20,
    xpRequired: 2000,
    xpTotal: 23900,
  },
  {
    id: 21,
    xpRequired: 2000,
    xpTotal: 25900,
  },
  {
    id: 22,
    xpRequired: 2500,
    xpTotal: 28400,
  },
  {
    id: 23,
    xpRequired: 2500,
    xpTotal: 30900,
  },
  {
    id: 24,
    xpRequired: 2500,
    xpTotal: 33400,
  },
  {
    id: 25,
    xpRequired: 2500,
    xpTotal: 35900,
  },
  {
    id: 26,
    xpRequired: 2500,
    xpTotal: 38400,
  },
  {
    id: 27,
    xpRequired: 3000,
    xpTotal: 41400,
  },
  {
    id: 28,
    xpRequired: 3000,
    xpTotal: 44400,
  },
  {
    id: 29,
    xpRequired: 3000,
    xpTotal: 47400,
  },
  {
    id: 30,
    xpRequired: 3000,
    xpTotal: 50400,
  },
  {
    id: 31,
    xpRequired: 3000,
    xpTotal: 53400,
  },
  {
    id: 32,
    xpRequired: 3500,
    xpTotal: 56900,
  },
  {
    id: 33,
    xpRequired: 3500,
    xpTotal: 60400,
  },
  {
    id: 34,
    xpRequired: 3500,
    xpTotal: 63900,
  },
  {
    id: 35,
    xpRequired: 3500,
    xpTotal: 67400,
  },
  {
    id: 36,
    xpRequired: 3500,
    xpTotal: 70900,
  },
  {
    id: 37,
    xpRequired: 4000,
    xpTotal: 74900,
  },
  {
    id: 38,
    xpRequired: 4000,
    xpTotal: 78900,
  },
  {
    id: 39,
    xpRequired: 4000,
    xpTotal: 82900,
  },
  {
    id: 40,
    xpRequired: 4000,
    xpTotal: 86900,
  },
  {
    id: 41,
    xpRequired: 4000,
    xpTotal: 90900,
  },
  {
    id: 42,
    xpRequired: 4500,
    xpTotal: 95400,
  },
  {
    id: 43,
    xpRequired: 4500,
    xpTotal: 99900,
  },
  {
    id: 44,
    xpRequired: 4500,
    xpTotal: 104400,
  },
  {
    id: 45,
    xpRequired: 4500,
    xpTotal: 108900,
  },
  {
    id: 46,
    xpRequired: 4500,
    xpTotal: 113400,
  },
  {
    id: 47,
    xpRequired: 5000,
    xpTotal: 118400,
  },
  {
    id: 48,
    xpRequired: 5000,
    xpTotal: 123400,
  },
  {
    id: 49,
    xpRequired: 5000,
    xpTotal: 128400,
  },
  {
    id: 50,
    xpRequired: 5000,
    xpTotal: 133400,
  },
] as Level[];

/*
  С 1 по 8: стратагемы оружия поддержки;
  С 9 по 15: стратагемы орбитальных ударов;
  С 16 по 22: стратагемы ангара;
  С 23 по 28: страгемы капитанского мостика;
  С 29 по 37: стратагемы инженерии;
  С 38 по 45: стратагемы производственного цеха;
  С 45 по 52: стратагемы миссий;
*/

export const stratagems = [
  {
    id: 1,
    name: "Пулемет",
    image: "/static/stratagems/MachineGunIcon.png",
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
    image: "/static/stratagems/AntiMaterialRifleIcon.png",
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
    image: "/static/stratagems/StalwartIcon.png",
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
    image: "/static/stratagems/ExpendableAntiTankIcon.png",
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
    image: "/static/stratagems/FlamethrowerIcon.png",
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
    image: "/static/stratagems/AutocannonIcon.png",
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
    image: "/static/stratagems/RailgunIcon.png",
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
    image: "/static/stratagems/SpearIcon.png",
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
    image: "/static/stratagems/OrbitalGatlingBarrageIcon.png",
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
    image: "/static/stratagems/OrbitalAirburstStrikeIcon.png",
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
    image: "/static/stratagems/Orbital120mmHEBarrageIcon.png",
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
    image: "/static/stratagems/Orbital380mmHEBarrageIcon.png",
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
    image: "/static/stratagems/OrbitalWalkingBarrageIcon.png",
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
    image: "/static/stratagems/OrbitalLaserIcon.png",
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
    image: "/static/stratagems/OrbitalRailcannonStrikeIcon.png",
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
    image: "/static/stratagems/EagleStrafingRunIcon.png",
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
    image: "/static/stratagems/EagleAirstrikeIcon.png",
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
    image: "/static/stratagems/EagleClusterBombIcon.png",
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
    image: "/static/stratagems/JumpPackIcon.png",
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
    image: "/static/stratagems/EagleSmokeStrikeIcon.png",
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
    image: "/static/stratagems/Eagle110mmRocketPodIcon.png",
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
    image: "/static/stratagems/Eagle500kgBombIcon.png",
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
    image: "/static/stratagems/OrbitalPrecisionStrikeIcon.png",
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
    image: "/static/stratagems/OrbitalGasStrikeIcon.png",
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
    image: "/static/stratagems/OrbitalEMSStrikeIcon.png",
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
    image: "/static/stratagems/OrbitalSmokeStrikeIcon.png",
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
    image: "/static/stratagems/HMGEmplacementIcon.png",
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
    image: "/static/stratagems/ShieldGeneratorRelayIcon.png",
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
    image: "/static/stratagems/TeslaTowerIcon.png",
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
    image: "/static/stratagems/AntiPersonnelMinefieldIcon.png",
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
    image: "/static/stratagems/SupplyPackIcon.png",
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
    image: "/static/stratagems/GrenadeLauncherIcon.png",
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
    image: "/static/stratagems/LaserCannonIcon.png",
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
    image: "/static/stratagems/IncendiaryMinesIcon.png",
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
    image: "/static/stratagems/GuardDogRoverIcon.png",
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
    image: "/static/stratagems/BallisticShieldBackpackIcon.png",
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
    image: "/static/stratagems/ArcThrowerIcon.png",
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
    image: "/static/stratagems/ShieldGeneratorPackIcon.png",
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
    image: "/static/stratagems/MachineGunSentryIcon.png",
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
    image: "/static/stratagems/GatlingSentryIcon.png",
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
    image: "/static/stratagems/MortarSentryIcon.png",
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
    image: "/static/stratagems/GuardDogIcon.png",
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
    image: "/static/stratagems/AutocannonSentryIcon.png",
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
    image: "/static/stratagems/RocketSentryIcon.png",
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
    image: "/static/stratagems/EMSMortarSentryIcon.png",
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
    image: "/static/stratagems/PatriotExosuitIcon.png",
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
    image: "/static/stratagems/ReinforceIcon.png",
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
    image: "/static/stratagems/SOSBeaconIcon.png",
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
    image: "/static/stratagems/ResupplyIcon.png",
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
    image: "/static/stratagems/SuperEarthFlagIcon.png",
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
    image: "/static/stratagems/UploadDataIcon.png",
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
    image: "/static/stratagems/HellbombIcon.png",
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
    image: "/static/stratagems/SEAFArtilleryIcon.png",
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
