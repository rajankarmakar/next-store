import { api_base_url } from "../config";

export const getProductDetails = async (pathName) => {
  try {
    console.log("aaabb", `${api_base_url}/get-product-details?${pathName}`);
    const response = await fetch(
      `https://v3.nagadhat.com/api/get-product-details?${pathName}`,
      {
        next: { revalidate: 1 },
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching Flash Sale Product data");
    console.info(error);
  }
};
