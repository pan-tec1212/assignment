import { apiResult } from "@/test/mock/apiResult";
import clsx from "clsx";
import Link from "next/link";

/**
 * インフォメーション
 * @param props.className
 * @returns
 */
export const Information = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex flex-col mt-10 pl-4", className)}>
      <div className="text-5xl font-normal">INFORMATION</div>
      <div className="text-md font-semibold mb-10">
        お知らせ・プレスリリース
      </div>
      {/* リスト */}
      {apiResult.information.map((info, index) => {
        return index < 2 ? (
          <div key={index} className="border-b border-gray-400 py-8">
            <div className="flex gap-1.5 mb-3">
              <div className="text-gray-500">{info.eventDate}</div>
              <div className="bg-gray-700 text-white px-1">{info.tag1}</div>
              <div className="border px-1 font-medium">{info.tag2}</div>
            </div>
            <div className="">{info.info}</div>
          </div>
        ) : null;
      })}
      {/* もっと見る */}
      <Link href={""} className="self-center">
        <div
          className={clsx(
            "relative bg-gray-300 w-fit mt-10 px-20 py-2 rounded-full font-semibold"
          )}
        >
          MORE
        </div>
      </Link>
    </div>
  );
};
