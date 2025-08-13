/**
 * 年取得
 * @param date
 * @returns
 */
export const getYearString = (date: Date = new Date()) => {
  return String(date.getFullYear());
};

/**
 * 月取得
 * @param date
 * @returns
 */
export const getMonthString = (date: Date = new Date()) => {
  return String(date.getMonth() + 1).padStart(2, "0");
};

/**
 * 日取得
 * @param date
 * @returns
 */
export const getDayString = (date: Date = new Date()) => {
  return String(date.getDate()).padStart(2, "0");
};

export const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
/**
 * 曜日取得（3文字大文字）
 * @param date
 * @returns
 */
export const getWeekdayString = (date: Date = new Date()): string => {
  return WEEK_DAYS[date.getDay()];
};

/**
 * 今日から1週間分の曜日と日付を取得
 * @param startDate 開始日（省略で今日）
 * @returns {Array<{ weekday: string; day: string }>}
 */
export const getWeekdaysAndDays = (startDate: Date = new Date()) => {
  const result = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    console.log("test", d);
    const weekday = getWeekdayString(d);
    const day = getDayString(d);
    console.log("weekday", weekday);
    console.log("day", day);
    result.push({ weekday, day });
  }

  return result;
};
