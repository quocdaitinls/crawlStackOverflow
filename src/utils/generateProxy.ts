import cheerio from "cheerio";
import request from "request";
import util from "util";
import {createRandomProxyUrl} from "./createUrl";

const myRequest = util.promisify(request);

export async function generateProxy() {
  let ip_addresses: string[] = [];
  let port_numbers: string[] = [];

  const html = await myRequest({
    url: "https://sslproxies.org/",
    method: "GET",
  }).then((res) => res.body);
  const $ = cheerio.load(html);

  console.log(html);

  $("td:nth-child(1)").each(function (index, value) {
    ip_addresses[index] = $(this).text();
  });

  $("td:nth-child(2)").each(function (index, value) {
    port_numbers[index] = $(this).text();
  });

  let proxyUrl = createRandomProxyUrl(ip_addresses, port_numbers);

  return proxyUrl;
}
