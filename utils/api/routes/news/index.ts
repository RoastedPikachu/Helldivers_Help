import { apiInstance } from "@/utils/api";

export const getGameNews = async () => {
  const res = await apiInstance.get(`/news`);

  console.log(res);

  return res.data;
};

export const createNewsItem = async (
  ruTitle: string,
  enTitle: string,
  cover: string,
  ruContent: string,
  enContent: string,
) => {
  try {
    const response = await apiInstance.post("/news", {
      ruTitle: ruTitle,
      enTitle: enTitle,
      cover: cover,
      ruContent: ruContent,
      enContent: enContent,
    });

    if (response.status === 201) {
      return { success: true, data: response.data };
    } else {
      return {
        success: false,
        error: `Неожиданный код статуса: ${response.status}`,
      };
    }
  } catch (e: any) {
    if (e.response) {
      return {
        success: false,
        error: e.response.data.e || e.message,
      };
    } else if (e.request) {
      return { success: false, e: "Ответ от сервера не был получен" };
    } else {
      return { success: false, error: e.message };
    }
  }
};
