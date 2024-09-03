import { getSimpleDate } from "@/libs/dateutil";
export default function CalendarView() {
  const weekHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = getSimpleDate(new Date());
  const array = Array.from({ length: d.lastDay + d.startWeek }, (_, i) => {
    return i - d.startWeek + 1;
  });
  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg">
      <p className="text-center text-xl p-2">{`${d.year}年${d.month}月`}</p>
      <div className="grid-cols-7 grid gap-2 text-center">
        {weekHeaders.map((header) => (
          <p key={header} className="min-w-10 pb-2">
            {header}
          </p>
        ))}
      </div>
      <div className="grid-cols-7 grid gap-2">
        {array.map((dayNum) => (
          <p
            key={dayNum}
            className={`p-2 rounded-lg min-w-10 text-center ${
              dayNum < 1
                ? ""
                : dayNum === d.day
                ? "bg-blue-500 text-white "
                : "bg-gray-200 text-black"
            }`}
          >
            {dayNum <= 0 ? "" : dayNum}
          </p>
        ))}
      </div>
    </div>
  );
}
