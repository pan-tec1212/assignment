import clsx from "clsx";
import Image from "next/image";

export const TownGuide = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex flex-col mt-40 px-5", className)}>
      <img
        src={"/top/map_img_sp.jpg"}
        width={160}
        height={90}
        className="w-full "
        alt="map_img_sp"
      />
      <button className="rounded-full px-10 border border-gray-700 self-center">
        タウンガイド
      </button>
    </div>
  );
};
