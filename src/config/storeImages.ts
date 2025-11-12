export const storeImageMapping: Record<string, string[]> = {
  // Blagoevgrad store
  blagoevgrad: [
    '/images/blagoevgrad/IMG_4786.JPG',
    '/images/blagoevgrad/IMG_4778.JPG',
    '/images/blagoevgrad/IMG_4779.JPG',
    '/images/blagoevgrad/IMG_4780.JPG',
    '/images/blagoevgrad/IMG_4781.JPG',
    '/images/blagoevgrad/IMG_4782.JPG',
    '/images/blagoevgrad/IMG_4783.JPG',
    '/images/blagoevgrad/IMG_4784.JPG',
    '/images/blagoevgrad/IMG_4785.JPG',
    '/images/blagoevgrad/IMG_4787.JPG',
  ],

  // Pazardjik stores (match your folders exactly)
  Ekzarh_iosif: [
    '/images/Pazardjik/Ekzarh_iosif/IMG_4701.JPG',
    '/images/Pazardjik/Ekzarh_iosif/IMG_4702.JPG',
    '/images/Pazardjik/Ekzarh_iosif/IMG_4703.JPG',
    '/images/Pazardjik/Ekzarh_iosif/IMG_4704.JPG',
    '/images/Pazardjik/Ekzarh_iosif/IMG_4705.JPG',
  ],
  Gladstone_10: [
    '/images/Pazardjik/Gladstone_10/IMG_4733.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4729.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4730.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4731.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4732.JPG',
  ],
  Ivan_Vazov_12: [
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4713.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4712.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4715.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4716.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4717.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4718.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4719.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4720.JPG',
  ],
  Targovska: [
    '/images/Pazardjik/Targovska/IMG_4727.JPG',
    '/images/Pazardjik/Targovska/IMG_4721.JPG',
    '/images/Pazardjik/Targovska/IMG_4722.JPG',
    '/images/Pazardjik/Targovska/IMG_4723.JPG',
    '/images/Pazardjik/Targovska/IMG_4724.JPG',
    '/images/Pazardjik/Targovska/IMG_4725.JPG',
    '/images/Pazardjik/Targovska/IMG_4726.JPG',
  ],
  Tsar_Samuil_4: [
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4708.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4706.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4707.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4709.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4710.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4711.JPG',
  ],
  Tsar_Shishman_10: [
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4697.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4698.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4699.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4700.JPG',
  ],

  // Razlog store (your working example)
  razlog: [
    '/images/Razlog/IMG_4746.jpeg',
    '/images/Razlog/IMG_4747.jpeg',
    '/images/Razlog/IMG_4748.jpeg',
    '/images/Razlog/IMG_4749.jpeg',
  ],
};

// Helper function to get store images based on city and address
export const getStoreImages = (city: string, address: string): string[] => {
  const cityLower = (city || '').toLowerCase().trim();
  const addressLower = (address || '').toLowerCase().trim();

  // Cities
  if (cityLower === 'blagoevgrad') return storeImageMapping.blagoevgrad || [];
  if (cityLower === 'razlog') return storeImageMapping.razlog || [];

  // Accept common variants for Pazardjik
  const isPazardzhik =
    cityLower === 'pazardjik' ||
    cityLower === 'pazardzhik' ||
    cityLower === 'пазарджик';

  if (isPazardzhik) {
    if (
      addressLower.includes('екзарх') ||
      addressLower.includes('йосиф') ||
      addressLower.includes('iosif') ||
      addressLower.includes('ekzarh')
    ) return storeImageMapping.Ekzarh_iosif || [];

    if (addressLower.includes('гладстон') || addressLower.includes('gladston') || addressLower.includes('gladstone'))
      return storeImageMapping.Gladstone_10 || [];

    if (addressLower.includes('иван вазов') || addressLower.includes('vazov'))
      return storeImageMapping.Ivan_Vazov_12 || [];

    if (addressLower.includes('търговска') || addressLower.includes('targovska'))
      return storeImageMapping.Targovska || [];

    if (addressLower.includes('самуил') || addressLower.includes('samuil'))
      return storeImageMapping.Tsar_Samuil_4 || [];

    if (addressLower.includes('шишман') || addressLower.includes('shishman'))
      return storeImageMapping.Tsar_Shishman_10 || [];
  }

  return [];
};
