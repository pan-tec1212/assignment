import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export const TopImages = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("", className)}>
      <Image
        src={"/top/main/kv_img-01.jpg"}
        width={300}
        height={300}
        className="w-full px-2 object-cover"
        alt="kv_img-01"
      />
      <div className="bg-white relative -top-10 left-10 z-10">
        <Image
          src={"/top/main/kv_img-02.jpg"}
          width={300}
          height={300}
          className="w-full relative top-3 right-3"
          alt="kv_img-01"
        />
        <Image
          src={"/top/main/kv_img-03.jpg"}
          width={300}
          height={300}
          className="w-full relative top-10 right-3"
          alt="kv_img-01"
        />
      </div>
    </div>
  );
};
