"use client";
import { apiResult } from "@/test/mock/apiResult";
import * as dateUtil from "@/utils/dateUtil";
import clsx from "clsx";
import Link from "next/link";
import { ScheduleList } from "./ScheduleList";
import React, { useState } from "react";
import Image from "next/image";

/**
 * スケジュール
 * @param props.className
 * @returns
 */
export const Schedule = ({ className }: { className?: string }) => {
  const year = dateUtil.getYearString();
  const month = dateUtil.getMonthString();
  const day = dateUtil.getDayString();
  const dayAndWeekDays = dateUtil.getWeekdaysAndDays();
  const [selected, setSelected] = useState<string>(day);

  /**
   * 日付ボタンクリックハンドラ
   * @param e
   */
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value);
  };
  return (
    <div
      className={clsx("flex flex-row w-full justify-end mt-10 pr-2", className)}
    >
      <div className="relative bg-green-100 w-full max-w-144 py-2 px-5 h-56">
        {/* 年　月 */}
        <div className="font-bold">
          {year}/<span className="text-3xl">{month}</span>月
        </div>
        {/* 日　曜日 */}
        <div className="grid grid-cols-7 gap-1 mt-1">
          {dayAndWeekDays?.map((item) => {
            return (
              <button
                key={item.day}
                value={item.day}
                onClick={handleClick}
                className={clsx(
                  "py-1 px-3 justify-center text-center",
                  String(item.day) === selected
                    ? "bg-amber-300 text-red-500"
                    : "bg-white"
                )}
              >
                <div className="font-medium text-3xl">{item.day}</div>
                <div className="font-normal">{item.weekday}</div>
              </button>
            );
          })}
        </div>
        {/* スケジュール */}
        <ScheduleList
          schedules={apiResult.schedule}
          day={selected}
          className="mt-4 max-w-105"
        />
        <div className="absolute right-5 top-2 font-bold text-xl flex">
          <Link href={""}>MORE</Link>
          <Image
            src={"/arrow/icon_arrow.png"}
            alt="icon_arrow.png"
            width={24}
            height={12}
            className="w-6 h-3 self-center ml-2"
          />
        </div>
      </div>
    </div>
  );
};
