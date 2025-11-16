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
};

export const getStoreImages = (city: string, address: string): string[] => {
  const cityLower = (city || "").toLowerCase().trim();
  const addressLower = (address || "").toLowerCase().trim();

  if (cityLower.includes("blagoevgrad"))
    return storeImageMapping.blagoevgrad || [];

  if (cityLower.includes("razlog"))
    return storeImageMapping.razlog || [];

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
