interface SimpleDate {
  year: number;
  month: number;
  day: number;
  /**
   * 这个月一号从星期几开始
   */
  startWeek: number;
  /**
   * 这个月最后一天是几号
   */
  lastDay: number;
}

function getSimpleDate(date: Date): SimpleDate {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    startWeek: new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
    lastDay: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
  };
}

export { getSimpleDate };
