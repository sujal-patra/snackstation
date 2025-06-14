import { apiEndpoints, Service } from "../constants/appContants";
import { getApiClient } from "../utils/axiosClient";

const service = Service.PRODUCT;

export const getProductList = async () => {
  const apiClient = getApiClient({ auth: false, service });
  const response = await apiClient.get(apiEndpoints.GET_PRODUCTS);
  // transform logic -> create data from api response consumable by UI component
  return response.data;
};