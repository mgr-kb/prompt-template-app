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
  reference: string;
}

export function PromptCard({ id, category, title, prompt, reference }: PromptCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className="h-full flex flex-col hover:border-primary/50 transition-colors"
      >
        <CardHeader className="pb-2" onClick={() => setIsModalOpen(true)}>
          <div className="flex justify-between items-start cursor-pointer">
            <CardTitle className="text-lg">{title}</CardTitle>
            <Badge variant="outline">{category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-grow cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <p className="text-sm text-muted-foreground whitespace-pre-line line-clamp-4">
            {prompt}
          </p>
        </CardContent>
        <CardFooter className="pt-2 border-t">
          <div className="w-full flex justify-end items-center">
            {reference && (
              <a href={reference} className="text-primary underline mr-2">出典</a>
            )}
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
