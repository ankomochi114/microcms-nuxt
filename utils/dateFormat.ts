import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const dateFormat = (date: string, template: string = "YYYY/MM/DD") =>
  dayjs.utc(date).tz("Asia/Tokyo").format(template);
