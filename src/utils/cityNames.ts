const cityNameMap: Record<string, string> = {
  'Sofia': 'София',
  'Pazardzhik': 'Пазарджик',
  'Montana': 'Монтана',
  'Blagoevgrad': 'Благоевград',
  'Razlog': 'Разлог'
};

export function getCityNameInBulgarian(cityName: string): string {
  return cityNameMap[cityName] || cityName;
}

export function normalizeCityName(cityName: string): string {
  return cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
}
