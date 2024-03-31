import { IResource } from "@/utils/generalInterfaces";

export const resources = [
  {
    id: 1,
    iconPath: "/static/Resources/CommonSampleIcon.svg",
    title: "Обычные образцы",
    difficulties: "На всех сложностях",
    obtainingMethod:
      "Нахождение на точках интереса, аванпостах терминидов и автоматонов",
    applicationScope: "Улучшение 1, 2 и 3 уровня модулей корабля",
    maxAmount: "500 единиц",
    isDependsOnDifficulty: true,
  },
  {
    id: 2,
    iconPath: "/static/Resources/RareSampleIcon.svg",
    title: "Редкие образцы",
    difficulties: "Этот вид образцов встречается начиная с 4 уровня сложности",
    obtainingMethod:
      "Нахождение на точках интереса, аванпостах терминидов и автоматонов, также в дикой природе, в форме цветка",
    applicationScope: "Улучшение 1, 2 и 3 уровня модулей корабля",
    maxAmount: "250 единиц",
    isDependsOnDifficulty: true,
  },
  {
    id: 3,
    iconPath: "/static/Resources/UltraRareSampleIcon.svg",
    title: "Суперобразцы",
    difficulties: "Этот вид образцов встречается начиная с 7 уровня сложности",
    obtainingMethod: "Нахождение на точке интереса с камнем",
    applicationScope: "Улучшение 2 и 3 уровня модулей корабля",
    maxAmount: "100 единиц",
    isDependsOnDifficulty: true,
  },
  {
    id: 4,
    iconPath: "/static/Resources/SuperCreditIcon.svg",
    title: "Супер кредиты",
    difficulties: "На всех сложностях",
    prices: ["$1.99", "$4.99", "$9.99", "$19.99"],
    obtainingMethod:
      "Покупка внутриигровом магазине или нахождение на точках интереса",
    applicationScope: "Покупка предметов в супер-магазине или боевого пропуска",
    maxAmount: "Зависит от размеров кошелька или вашего времени",
    isDependsOnDifficulty: false,
  },
  {
    id: 5,
    iconPath: "/static/Resources/MedalIcon.svg",
    title: "Медали",
    difficulties: "На всех сложностях",
    obtainingMethod:
      "Завершение заданий, нахождение на точках интереса, выполнение приказов с Супер-Земли",
    applicationScope: "Покупка содержимого боевого пропуска",
    maxAmount: "250 единиц",
    isDependsOnDifficulty: true,
  },
  {
    id: 6,
    iconPath: "/static/Resources/RequisitesIcon.svg",
    title: "Реквизиты",
    difficulties: "На всех сложностях",
    obtainingMethod:
      "Завершение заданий, успешная эвакуация с задания, нахождение на точках интереса",
    applicationScope: "Покупка стратагем",
    maxAmount: "50000 единиц",
    isDependsOnDifficulty: false,
  },
] as IResource[];
