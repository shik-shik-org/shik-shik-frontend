const cyrillicToLatin: Record<string, string> = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
  'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
  'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
  'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sht', 'ъ': 'a', 'ь': 'y',
  'ю': 'yu', 'я': 'ya',
  'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ж': 'Zh',
  'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
  'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F',
  'Х': 'H', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sht', 'Ъ': 'A', 'Ь': 'Y',
  'Ю': 'Yu', 'Я': 'Ya'
};

const latinToCyrillic: Record<string, string[]> = {
  'a': ['а', 'ъ'], 'b': ['б'], 'v': ['в'], 'g': ['г'], 'd': ['д'], 'e': ['е'],
  'z': ['з'], 'i': ['и'], 'y': ['й', 'ь'], 'k': ['к'], 'l': ['л'], 'm': ['м'],
  'n': ['н'], 'o': ['о'], 'p': ['п'], 'r': ['р'], 's': ['с'], 't': ['т'],
  'u': ['у'], 'f': ['ф'], 'h': ['х', 'ж'],
};

export function transliterateCyrillicToLatin(text: string): string {
  return text.split('').map(char => cyrillicToLatin[char] || char).join('');
}

function transliterateLatinToCyrillic(text: string): string {
  let result = text.toLowerCase();
  
  result = result.replace(/sht/g, 'щ').replace(/sh/g, 'ш')
    .replace(/ch/g, 'ч').replace(/zh/g, 'ж')
    .replace(/ts/g, 'ц').replace(/yu/g, 'ю')
    .replace(/ya/g, 'я');
  
  const map: Record<string, string> = {
    'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
    'e': 'е', 'z': 'з', 'i': 'и', 'y': 'й', 'k': 'к',
    'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
    'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
    'h': 'х'
  };
  
  return result.split('').map(char => map[char] || char).join('');
}

export function matchesBilingual(text: string, query: string): boolean {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  if (lowerText.includes(lowerQuery)) {
    return true;
  }
  
  const transliteratedText = transliterateCyrillicToLatin(lowerText);
  if (transliteratedText.includes(lowerQuery)) {
    return true;
  }
  
  const transliteratedQuery = transliterateLatinToCyrillic(lowerQuery);
  if (lowerText.includes(transliteratedQuery)) {
    return true;
  }
  
  return false;
}
