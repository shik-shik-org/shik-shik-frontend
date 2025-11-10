export const formatHours = (hours: string): { day: string; time: string }[] => {
  const dayMap: Record<string, string> = {
    Mon: 'Понеделник',
    Tue: 'Вторник',
    Wed: 'Сряда',
    Thu: 'Четвъртък',
    Fri: 'Петък',
    Sat: 'Събота',
    Sun: 'Неделя',
  };

  return hours.split(';').map((entry) => {
    const [day, time] = entry.trim().split(' ', 2);
    return {
      day: dayMap[day] || day,
      time: time === 'Closed' ? 'Затворено' : time,
    };
  });
};
