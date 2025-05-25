import axios from "axios";
import { Picture } from "./types";

const API_KEY = "JpQ7Zjb3OXgB8XBQH4PzqhCDLnhV6FKEv-Y_401W7VU";
const BASE_URL = "https://api.unsplash.com";

export const getPictures = async (
  query: string,
  page: number = 1,
  per_page: number = 12
): Promise<Picture[]> => {
  const response = await axios.get<{ results: Picture[] }>(
    `${BASE_URL}/search/photos`,
    {
      params: {
        query,
        page,
        per_page,
        client_id: API_KEY,
      },
    }
  );
  return response.data.results;
};
