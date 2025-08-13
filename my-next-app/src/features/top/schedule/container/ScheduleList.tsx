import clsx from "clsx";
import Link from "next/link";

type ScheduleItem = {
  info: string;
  uri: string;
};

/**
 * スケジュールのリスト
 * @param param0
 * @returns
 */
export const ScheduleList = ({
  schedules,
  day,
  className,
}: {
  schedules: ScheduleItem[];
  day: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "max-h-20 overflow-y-auto border border-gray-300 rounded p-4 bg-white",
        className
      )}
    >
      <ul className="space-y-2">
        {schedules.map((schedule: ScheduleItem, index: number) => (
          <li
            key={index}
            className={clsx(
              "text-gray-800 line-clamp-2",
              index !== schedules.length - 1 && "border-b border-gray-300 py-1"
            )}
          >
            {schedule.uri ? (
              <Link
                href={schedule.uri}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {schedule.info}
              </Link>
            ) : (
              schedule.info
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
