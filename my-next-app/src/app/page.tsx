import { TopImages } from "@/features/top/image/presenter/TopImages";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col pt-20">
        {/* トップ画像 */}
        <TopImages />
        {/* スケジュール */}
        {/* インフォメーション */}
        {/* トピックス */}
        {/* 法人の方へ */}
        {/* よくある質問 */}
        {/* アクセス */}
      </main>
    </div>
  );
}
