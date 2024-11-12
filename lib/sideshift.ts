import { Coin } from "@/types";

export const getCoinData = async (): Promise<Coin[] | []> => {
  try {
    const res = await fetch("https://sideshift.ai/api/v2/coins", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Error, status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch coin data, status:", error);
    return [];
  }
};
