import { TopImages } from "@/features/top/image/presenter/TopImages";
import { Information } from "@/features/top/information/container/Information";
import { Schedule } from "@/features/top/schedule/container/Schedule";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col pt-20">
        {/* トップ画像 */}
        <TopImages />
        {/* スケジュール */}
        <Schedule />
        {/* インフォメーション */}
        <Information />
        {/* トピックス */}
        {/* 法人の方へ */}
        {/* よくある質問 */}
        {/* アクセス */}
      </main>
    </div>
  );
}
