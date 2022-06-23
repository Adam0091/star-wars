import { HTTP, HTTPS } from "@constants/api";

/**
 * Изменяет url с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url c HTTPS
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

/**
 * Отправлет запрос fetch принимает url
 * @param {String} url - для запроса
 * @returns {Promise} - Promise результатом запроса
 */

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Could not fetch", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("Could not fetch", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (urls) => {
  console.log(urls);
  const res = await Promise.all(
    urls.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );

  if (!res.ok) {
    console.error("Could not fetch", res.status);
    return false;
  }

  return res;
};
