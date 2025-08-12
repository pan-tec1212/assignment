"use client";

import clsx from "clsx";
import { useState } from "react";

/**
 * ハンバーガーメニューのボタン
 * @returns
 */
export const HamburgerButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  /**
   * 線のベースコンポーネント
   * @param props.className
   * @returns
   */
  const Line = ({ className }: { className: string }) => {
    return (
      <span
        className={clsx(
          "block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out",
          className
        )}
      />
    );
  };
  return (
    <button
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className={clsx(
        "relative w-8 h-8 flex flex-col justify-center items-center gap-1"
      )}
    >
      <Line className={clsx(open ? "translate-y-1.5 rotate-45" : "")} />
      <Line className={clsx(open ? "opacity-0" : "opacity-100")} />
      <Line className={clsx(open ? "-translate-y-1.5 -rotate-45" : "")} />
    </button>
  );
};
