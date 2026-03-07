import type { DataRangeType } from "./trades.types";

export function validateDateRange(dateRange: DataRangeType): string | null {
  const { year, month, day } = dateRange;

  if (!year.from || !year.to) return "Year range is required";
  if (!month.from || !month.to) return "Month range is required";
  if (!day.from || !day.to) return "Day range is required";

  const yf = Number(year.from), yt = Number(year.to);
  const mf = Number(month.from), mt = Number(month.to);
  const df = Number(day.from), dt = Number(day.to);

  if (yf < 2000 || yt > 2099) return "Year must be between 2000–2099";
  if (mf < 1 || mf > 12 || mt < 1 || mt > 12) return "Month must be between 1–12";
  if (df < 1 || df > 31 || dt < 1 || dt > 31) return "Day must be between 1–31";
  if (yf > yt) return "Year 'from' cannot exceed 'to'";
  if (yf === yt && mf > mt) return "Month 'from' cannot exceed 'to'";

  return null;
}
