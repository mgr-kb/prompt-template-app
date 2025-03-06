"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/app/(main)/_components/copy-button";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: {
    id: string;
    category: string;
    title: string;
    prompt: string;
  } | null;
}

export function PromptModal({ isOpen, onClose, prompt }: PromptModalProps) {
  if (!prompt) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <div className="mt-4 flex items-center justify-between gap-2">
            <DialogTitle className="text-xl">{prompt.title}</DialogTitle>
            <Badge variant="outline">{prompt.category}</Badge>
          </div>
          <DialogDescription className="pt-2">
            プロンプトの全文を確認し、必要に応じて使用してください。
          </DialogDescription>
        </DialogHeader>

        {/* スクロール可能なコンテンツエリア */}
        <div className="flex-1 overflow-y-auto my-4">
          <div className="bg-muted p-4 rounded-md whitespace-pre-line text-sm">
            {prompt.prompt}
          </div>
        </div>

        <div className="flex justify-end mt-2 pt-2 border-t">
          <CopyButton text={prompt.prompt} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
