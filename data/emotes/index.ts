import { Emote } from "@/utils/dataInterfaces";

import { obtainingTypes } from "../obtainingTypes";

export const emotes = [
  {
    id: 1,
    videoPath: "/static/Emotes/GreetingsVideo.mp4",
    videoPreviewPath: "/static/EmotesVideoPreviews/GreetingsPreview.webp",
    price: 0,
    warbondIcon: obtainingTypes[0].icon,
  },
  {
    id: 2,
    videoPath: "/static/Emotes/ExplosiveHandshakeVideo.mp4",
    videoPreviewPath:
      "/static/EmotesVideoPreviews/ExplosiveHandshakePreview.webp",
    price: 8,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 3,
    videoPath: "/static/Emotes/HugVideo.mp4",
    videoPreviewPath: "/static/EmotesVideoPreviews/HugPreview.webp",
    price: 20,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 4,
    videoPath: "/static/Emotes/ScoutHandshakeVideo.mp4",
    videoPreviewPath: "/static/EmotesVideoPreviews/ScoutPreview.webp",
    price: 20,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 5,
    videoPath: "/static/Emotes/ScoutHandshakeVideo.mp4",
    videoPreviewPath: "/static/EmotesVideoPreviews/ScoutPreview.webp",
    price: 35,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 6,
    videoPath: "/static/Emotes/RockPaperScissorsVideo.mp4",
    videoPreviewPath:
      "/static/EmotesVideoPreviews/RockPaperScissorsPreview.webp",
    price: 50,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 7,
    videoPath: "/static/Emotes/ScoutHandshakeVideo.mp4",
    videoPreviewPath: "/static/EmotesVideoPreviews/ScoutPreview.webp",
    price: 70,
    warbondIcon: obtainingTypes[10].icon,
  },
] as Emote[];
