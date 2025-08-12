import clsx from "clsx";
import Image from "next/image";
import { HamburgerButton } from "./HamburgerButton";

/**
 * ヘッダーコンポーネント
 * @param param0
 * @returns
 */
export const Header = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "absolute w-full",
        "flex items-center justify-between h-15 pl-4 pr-5 shadow-lg",
        className
      )}
    >
      {/* ロゴ */}
      <Image
        className=""
        src={"/brandLogo/grand_green_osaka_logo.png"}
        width={145}
        height={24.5}
        alt="grand_green_osaka_logo"
      />

      <div className="flex items-center">
        {/* 検索 */}
        <Image
          className="mr-3 ml-4"
          src={"/icon/icon_search.png"}
          width={16}
          height={16}
          style={{ width: 16, height: 16 }} // 最適化により高さが異なるためStyleで設定
          alt="icon_search"
        />
        <span className="border-l border-black h-4 mr-3" />
        {/* 言語 */}
        <Image
          className=" mr-1"
          src={"/header/icon_global.png"}
          width={16}
          height={16}
          style={{ width: 16, height: 16 }} // 最適化により高さが異なるためStyleで設定
          alt="icon_global"
        />
        <span className="font-bold">LANGUAGE</span>
        {/* ハンバーガーメニュー */}
        <HamburgerButton className="ml-8" />
      </div>
    </div>
  );
};
