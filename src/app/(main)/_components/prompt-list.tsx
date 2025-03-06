import { PromptCard } from "@/app/(main)/_components/prompt-card";

interface Prompt {
  id: string;
  category: string;
  title: string;
  prompt: string;
  reference: string;
}

interface PromptListProps {
  prompts: Prompt[];
}

export function PromptList({ prompts }: PromptListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          id={prompt.id}
          category={prompt.category}
          title={prompt.title}
          prompt={prompt.prompt}
          reference={prompt.reference}
        />
      ))}
    </div>
  );
}
