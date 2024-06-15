import { obtainingTypes } from "../obtainingTypes";

import { Emote } from "@/utils/dataInterfaces";

export const emotes = [
  {
    id: 1,
    name: "Обычное приветствие",
    videoPath: "/static/Emotes/GreetingsVideo.mp4",
    videoPreviewPath: "/static/EmotesVideoPreviews/GreetingsPreview.png",
    price: 0,
    warbondIcon: obtainingTypes[0].icon,
  },
  {
    id: 2,
    name: "Взрывное рукопожатие",
    videoPath: "/static/Emotes/ExplosiveHandshakeVideo.mp4",
    videoPreviewPath:
      "/static/EmotesVideoPreviews/ExplosiveHandshakePreview.png",
    price: 8,
    warbondIcon: obtainingTypes[1].icon,
  },
  {
    id: 3,
    name: "Обнять",
    videoPath: "/static/Emotes/HugVideo.mp4",
    videoPreviewPath: "/static/EmotesVideoPreviews/HugPreview.png",
    price: 20,
    warbondIcon: obtainingTypes[1].icon,
  },
  {
    id: 4,
    name: "Дать пять",
    videoPath: "/static/Emotes/ScoutHandshakeVideo.mp4",
    videoPreviewPath: "/static/EmotesVideoPreviews/ScoutPreview.png",
    price: 20,
    warbondIcon: obtainingTypes[1].icon,
  },
  {
    id: 5,
    name: "Рукопожатие разведчика",
    videoPath: "/static/Emotes/ScoutHandshakeVideo.mp4",
    videoPreviewPath: "/static/EmotesVideoPreviews/ScoutPreview.png",
    price: 35,
    warbondIcon: obtainingTypes[1].icon,
  },
  {
    id: 6,
    name: "Камень-ножницы-бумага",
    videoPath: "/static/Emotes/RockPaperScissorsVideo.mp4",
    videoPreviewPath:
      "/static/EmotesVideoPreviews/RockPaperScissorsPreview.png",
    price: 50,
    warbondIcon: obtainingTypes[1].icon,
  },
] as Emote[];
