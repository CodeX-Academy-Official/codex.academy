import axios from "axios";

export async function sendToApi(url: string, payload: any) {
  const q = Object.keys(payload)
    .map((k) => `${k}=${encodeURI(payload[k])}`)
    .join("&");
  const result = await axios.get(`${url}?${q}`);
  return result;
}
