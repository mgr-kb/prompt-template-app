"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { Badge } from "@/components/ui/badge";
import { PromptModal } from "@/components/prompt-modal";

interface PromptCardProps {
  id: string;
  category: string;
  title: string;
  prompt: string;
}

export function PromptCard({ id, category, title, prompt }: PromptCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className="h-full flex flex-col hover:border-primary/50 transition-colors cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{title}</CardTitle>
            <Badge variant="outline">{category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground whitespace-pre-line line-clamp-4">
            {prompt}
          </p>
        </CardContent>
        <CardFooter className="pt-2 border-t">
          <div className="w-full flex justify-end">
            <CopyButton text={prompt} />
          </div>
        </CardFooter>
      </Card>

      <PromptModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prompt={{ id, category, title, prompt }}
      />
    </>
  );
}
