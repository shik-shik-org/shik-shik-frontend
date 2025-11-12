// Map for converting Bulgarian Cyrillic to Latin (transliteration)
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

// Map for converting Latin to Bulgarian Cyrillic (reverse transliteration)
const latinToCyrillic: Record<string, string[]> = {
  'a': ['а', 'ъ'], 'b': ['б'], 'v': ['в'], 'g': ['г'], 'd': ['д'], 'e': ['е'],
  'z': ['з'], 'i': ['и'], 'y': ['й', 'ь'], 'k': ['к'], 'l': ['л'], 'm': ['м'],
  'n': ['н'], 'o': ['о'], 'p': ['п'], 'r': ['р'], 's': ['с'], 't': ['т'],
  'u': ['у'], 'f': ['ф'], 'h': ['х', 'ж'],
};

/**
 * Transliterate Cyrillic text to Latin
 */
export function transliterateCyrillicToLatin(text: string): string {
  return text.split('').map(char => cyrillicToLatin[char] || char).join('');
}

/**
 * Check if text matches query in both Cyrillic and Latin
 */
export function matchesBilingual(text: string, query: string): boolean {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  // Direct match
  if (lowerText.includes(lowerQuery)) {
    return true;
  }
  
  // Transliterate text to Latin and check
  const transliteratedText = transliterateCyrillicToLatin(lowerText);
  if (transliteratedText.includes(lowerQuery)) {
    return true;
  }
  
  // Check if query is Latin and text is Cyrillic
  // For example: "sofia" should match "София"
  const queryChars = lowerQuery.split('');
  let textIndex = 0;
  let queryIndex = 0;
  
  while (textIndex < lowerText.length && queryIndex < queryChars.length) {
    const textChar = lowerText[textIndex];
    const queryChar = queryChars[queryIndex];
    
    // Direct character match
    if (textChar === queryChar) {
      textIndex++;
      queryIndex++;
      continue;
    }
    
    // Try transliteration match
    const transliterated = cyrillicToLatin[textChar];
    if (transliterated && lowerQuery.substring(queryIndex).startsWith(transliterated.toLowerCase())) {
      textIndex++;
      queryIndex += transliterated.length;
      continue;
    }
    
    textIndex++;
  }
  
  return queryIndex === queryChars.length;
}
