export const IMAGE_BASE_URL = "https://images.shikshik.eu";

const makeImages = (path: string, count: number): string[] =>
  Array.from(
    { length: count },
    (_, i) => `${IMAGE_BASE_URL}/${path}/${i + 1}.jpeg`
  );

export const storeImageMapping: Record<string, string[]> = {

  blagoevgrad: makeImages(
    "store-images/Blagoevgrad/Todor-Alexandrov",
    10
  ),
  Alabin: makeImages(
    "store-images/Sofia/Alabin",
    1
  ),
  Iskar: makeImages(
    "store-images/Sofia/Iskar",
    10
  ),

  Veslec: makeImages(
    "store-images/Sofia/Veslec",
    9
  ),
  JenskiPazar: makeImages(
    "store-images/Sofia/Jenski-Pazar",
    7
  ),
  Krasnoselo: makeImages(
    "store-images/Sofia/Krasno-selo",
    3
  ),
  MariaLuiza: makeImages(
    "store-images/Sofia/Maria-Luiza",
    5
  ),
  Nadejda: makeImages(
    "store-images/Sofia/Nadejda",
    8
  ),
  Ekzarh_iosif: makeImages(
    "store-images/Pazardzhik/Ekzarh-Yosif-4",
    5
  ),

  Gladstone_10: makeImages(
    "store-images/Pazardzhik/Gladstone-10",
    5
  ),

  Ivan_Vazov_12: makeImages(
    "store-images/Pazardzhik/Ivan-Vazov-12",
    8
  ),

  Targovska: makeImages(
    "store-images/Pazardzhik/Targovska-16",
    7
  ),

  Tsar_Samuil_4: makeImages(
    "store-images/Pazardzhik/Tsar-Samuil",
    6
  ),

  Tsar_Shishman_10: makeImages(
    "store-images/Pazardzhik/Tsar-Shishman-10",
    4
  ),

  razlog: makeImages(
    "store-images/Razlog/Arhitekt-Barov-8",
    4
  ),
  Montana25: makeImages(
    "store-images/Montana/25",
    2
  ),
  Montana65: makeImages(
    "store-images/Montana/65",
    3
  ),
};

export const getStoreImages = (city: string, address: string): string[] => {
  const cityLower = (city || "").toLowerCase().trim();
  const addressLower = (address || "").toLowerCase().trim();

  if (cityLower.includes("montana") || cityLower.includes("монтана")) {

    if (addressLower.includes("65"))
      return storeImageMapping.Montana65 || [];
    if (addressLower.includes("25"))
      return storeImageMapping.Montana25 || [];
  }

  if (cityLower.includes("blagoevgrad"))
    return storeImageMapping.blagoevgrad || [];

  if (cityLower.includes("razlog"))
    return storeImageMapping.razlog || [];

  if (cityLower.includes("sofia") || cityLower.includes("софия")) {

    if (addressLower.includes("alabin") || addressLower.includes("алабин"))
      return storeImageMapping.Alabin || [];

    if (addressLower.includes("4"))
      return storeImageMapping.Veslec || [];

    if (addressLower.includes("iskar") || addressLower.includes("искар"))
      return storeImageMapping.Iskar || [];

    if (addressLower.includes("jenskipazar"))
      return storeImageMapping.JenskiPazar || [];

    if (addressLower.includes("boris"))
      return storeImageMapping.Krasnoselo || [];

    if (addressLower.includes("lomsko"))
      return storeImageMapping.Nadejda || [];

    if (addressLower.includes("luiza"))
      return storeImageMapping.MariaLuiza || [];
  }

  const isPazardzhik =
    cityLower.includes("pazardjik") ||
    cityLower.includes("pazardzhik") ||
    cityLower.includes("пазарджик");

  if (isPazardzhik) {
    if (
      addressLower.includes("екзарх") ||
      addressLower.includes("йосиф") ||
      addressLower.includes("iosif") ||
      addressLower.includes("ekzarh")
    )
      return storeImageMapping.Ekzarh_iosif || [];

    if (
      addressLower.includes("гладстон") ||
      addressLower.includes("gladston") ||
      addressLower.includes("gladstone")
    )
      return storeImageMapping.Gladstone_10 || [];

    if (
      addressLower.includes("иван вазов") ||
      addressLower.includes("vazov")
    )
      return storeImageMapping.Ivan_Vazov_12 || [];

    if (
      addressLower.includes("търговска") ||
      addressLower.includes("targovska")
    )
      return storeImageMapping.Targovska || [];

    if (addressLower.includes("самуил") || addressLower.includes("samuil"))
      return storeImageMapping.Tsar_Samuil_4 || [];

    if (addressLower.includes("шишман") || addressLower.includes("shishman"))
      return storeImageMapping.Tsar_Shishman_10 || [];
  }

  return [];
};
