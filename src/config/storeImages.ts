// Mapping of stores to their image paths in public/images
export const storeImageMapping: Record<string, string[]> = {
  // Blagoevgrad store
  'blagoevgrad': [
    '/images/Blagoevgrad/IMG_4778.JPG',
    '/images/Blagoevgrad/IMG_4779.JPG',
    '/images/Blagoevgrad/IMG_4780.JPG',
    '/images/Blagoevgrad/IMG_4781.JPG',
    '/images/Blagoevgrad/IMG_4782.JPG',
    '/images/Blagoevgrad/IMG_4783.JPG',
    '/images/Blagoevgrad/IMG_4784.JPG',
    '/images/Blagoevgrad/IMG_4785.JPG',
    '/images/Blagoevgrad/IMG_4786.JPG',
    '/images/Blagoevgrad/IMG_4787.JPG',
  ],
  
  // Pazardjik stores - mapped by address/name
  'pazardjik_ekzarh_iosif': [
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4778.JPG',
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4779.JPG',
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4780.JPG',
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4781.JPG',
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4782.JPG',
    '/images/Pazardjik/Ekzarh_Iosif/IMG_4783.JPG',
  ],
  'pazardjik_gladstone_10': [
    '/images/Pazardjik/Gladstone_10/IMG_4778.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4779.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4780.JPG',
    '/images/Pazardjik/Gladstone_10/IMG_4781.JPG',
  ],
  'pazardjik_ivan_vazov_12': [
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4778.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4779.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4780.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4781.JPG',
    '/images/Pazardjik/Ivan_Vazov_12/IMG_4782.JPG',
  ],
  'pazardjik_targovska': [
    '/images/Pazardjik/Targovska/IMG_4778.JPG',
    '/images/Pazardjik/Targovska/IMG_4779.JPG',
    '/images/Pazardjik/Targovska/IMG_4780.JPG',
    '/images/Pazardjik/Targovska/IMG_4781.JPG',
    '/images/Pazardjik/Targovska/IMG_4782.JPG',
    '/images/Pazardjik/Targovska/IMG_4783.JPG',
  ],
  'pazardjik_tsar_samuil_4': [
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4778.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4779.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4780.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4781.JPG',
    '/images/Pazardjik/Tsar_Samuil_4/IMG_4782.JPG',
  ],
  'pazardjik_tsar_shishman_10': [
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4778.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4779.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4780.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4781.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4782.JPG',
    '/images/Pazardjik/Tsar_Shishman_10/IMG_4783.JPG',
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
