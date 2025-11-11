// Mapping of stores to their image paths in public/images
export const storeImageMapping: Record<string, string[]> = {
  // Blagoevgrad store
  'blagoevgrad': [
    '/images/blagoevgrad/IMG_4778.JPG',
    '/images/blagoevgrad/IMG_4779.JPG',
    '/images/blagoevgrad/IMG_4780.JPG',
    '/images/blagoevgrad/IMG_4781.JPG',
    '/images/blagoevgrad/IMG_4782.JPG',
    '/images/blagoevgrad/IMG_4783.JPG',
    '/images/blagoevgrad/IMG_4784.JPG',
    '/images/blagoevgrad/IMG_4785.JPG',
    '/images/blagoevgrad/IMG_4786.JPG',
    '/images/blagoevgrad/IMG_4787.JPG',
  ],
  
  // Pazardjik stores - mapped by address/name
  'pazardjik_ekzarh_iosif': [
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4701.JPG',
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4702.JPG',
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4703.JPG',
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4704.JPG',
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4705.JPG',
  ],
  'pazardjik_gladstone_10': [
    '/images/Pazardjik/Gladstone_10/IMG_4729.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4730.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4731.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4732.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4733.JPG',
  ],
  'pazardjik_ivan_vazov_12': [
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4712.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4713.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4715.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4716.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4717.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4718.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4719.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4720.JPG',
  ],
  'pazardjik_targovska': [
    '/images/Pazardjik/Targovska/IMG_4721.JPG',
    '/images/Pazardjik/Targovska/IMG_4722.JPG',
    '/images/Pazardjik/Targovska/IMG_4723.JPG',
    '/images/Pazardjik/Targovska/IMG_4724.JPG',
    '/images/Pazardjik/Targovska/IMG_4725.JPG',
    '/images/Pazardjik/Targovska/IMG_4726.JPG',
    '/images/Pazardjik/Targovska/IMG_4727.JPG',
  ],
  'pazardjik_tsar_samuil_4': [
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4706.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4707.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4708.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4709.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4710.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4711.JPG',
  ],
  'pazardjik_tsar_shishman_10': [
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4697.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4698.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4699.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4700.JPG',
  ],
  
  // Razlog store
  'razlog': [
    '/images/Razlog/IMG_4746.jpeg',
    '/images/Razlog/IMG_4747.jpeg',
    '/images/Razlog/IMG_4748.jpeg',
    '/images/Razlog/IMG_4749.jpeg',
  ],
};

// Helper function to get store images based on city and address
export const getStoreImages = (city: string, address: string): string[] => {
  const cityLower = city.toLowerCase();
  
  // Blagoevgrad
  if (cityLower === 'blagoevgrad') {
    return storeImageMapping['blagoevgrad'] || [];
  }
  
  // Razlog
  if (cityLower === 'razlog') {
    return storeImageMapping['razlog'] || [];
  }
  
  // Pazardjik stores - match by address
  if (cityLower === 'pazardjik') {
    const addressLower = address.toLowerCase();
    
    if (addressLower.includes('екзарх йосиф') || addressLower.includes('ekzarh')) {
      return storeImageMapping['pazardjik_ekzarh_iosif'] || [];
    }
    if (addressLower.includes('гладстон') || addressLower.includes('gladstone')) {
      return storeImageMapping['pazardjik_gladstone_10'] || [];
    }
    if (addressLower.includes('иван вазов') || addressLower.includes('vazov')) {
      return storeImageMapping['pazardjik_ivan_vazov_12'] || [];
    }
    if (addressLower.includes('търговска') || addressLower.includes('targovska')) {
      return storeImageMapping['pazardjik_targovska'] || [];
    }
    if (addressLower.includes('цар самуил') || addressLower.includes('samuil')) {
      return storeImageMapping['pazardjik_tsar_samuil_4'] || [];
    }
    if (addressLower.includes('цар шишман') || addressLower.includes('shishman')) {
      return storeImageMapping['pazardjik_tsar_shishman_10'] || [];
    }
  }
  
  // Return empty array if no match (will use default images)
  return [];
};
