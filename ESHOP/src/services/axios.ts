// src/utils/apiClient.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Setup interceptors once
 */
const runInterceptor = () => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      console.log("Axios Error:", JSON.stringify(error));
      return Promise.reject(error.response ?? error);
    }
  );
};

// Call interceptor once when module loads
runInterceptor();

/**
 * POST request with JSON
 */
export const axiosPost = async <T>(
  url: string,
  payload: unknown
): Promise<AxiosResponse<T> | void> => {
  try {
    return await axios.post<T>(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.error("[POST URL] [ERROR]", JSON.stringify(error));
  }
};

/**
 * GET request
 */
export const axiosGet = async <T>(
  url: string
): Promise<AxiosResponse<T> | void> => {
  try {
    return await axios.get<T>(url);
  } catch (error) {
    console.error(`[GET URL] [ERROR]: ${url}\n${error}`);
  }
};

/**
 * POST upload image (with custom config)
 */
export const axiosPostUploadImage = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T> | void> => {
  try {
    return await axios<T>(config);
  } catch (error) {
    console.error(`[Upload Image] [ERROR]: ${config.url}\n${error}`);
  }
};

/**
 * POST form-data
 */
export const axiosPostFormData = async <T>(
  url: string,
  payload: FormData
): Promise<AxiosResponse<T> | void> => {
  try {
    return await axios.post<T>(url, payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.error("[POST Form Data URL] [ERROR]", JSON.stringify(error));
  }
};

/**
 * GET form-data
 */
export const axiosGetFormData = async <T>(
  url: string
): Promise<AxiosResponse<T> | void> => {
  try {
    return await axios.get<T>(url, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.error("[GET Form Data URL] [ERROR]", JSON.stringify(error));
  }
};

/**
 * POST application/x-www-form-urlencoded
 */
export const postFormUrlEncoded = async <T>(
  url: string,
  payload: URLSearchParams
): Promise<AxiosResponse<T> | void> => {
  try {
    return await axios.post<T>(url, payload, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  } catch (error) {
    console.error("[POST Form URL Encoded] [ERROR]", JSON.stringify(error));
  }
};

/**
 * GET application/x-www-form-urlencoded (actually POST with encoded payload)
 */
export const getFormUrlEncoded = async <T>(
  url: string,
  payload: URLSearchParams
): Promise<AxiosResponse<T> | void> => {
  try {
    return await axios.post<T>(url, payload, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  } catch (error) {
    console.error("[GET Form URL Encoded] [ERROR]", JSON.stringify(error));
  }
};
