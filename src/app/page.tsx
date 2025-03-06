import { PromptList } from "@/app/(main)/_components/prompt-list";
import promptsData from "@/data/prompts.json";

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">プロンプト一覧</h2>
        <p className="text-muted-foreground mb-6">
          コピーボタンでプロンプトを簡単にコピーできます。
        </p>
        <PromptList prompts={promptsData} />
      </section>
    </div>
  );
}
