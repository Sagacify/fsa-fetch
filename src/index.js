import fetch from 'isomorphic-fetch';

export const fsaFetch = (endpoint, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(endpoint, params);
      const data = await res.json();
      res.ok ? resolve(data) : reject(data);
    } catch (e) { reject(e); }
  });
};