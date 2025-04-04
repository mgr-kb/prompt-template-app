"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    // イベント伝播を防止
    e.stopPropagation();
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      toast.success("コピーしました", {
        description: "プロンプトがクリップボードにコピーされました",
        richColors: true,
        duration: 2000,
      });

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("クリップボードへのコピーに失敗しました:", error);

      toast.warning("コピーに失敗しました", {
        description: "クリップボードへのアクセスが拒否されました",
        richColors: true,
        duration: 2000,
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="h-8 gap-1 cursor-pointer"
    >
      {isCopied ? (
        <>
          <Check className="h-4 w-4" />
          <span>コピー済み</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>コピー</span>
        </>
      )}
    </Button>
  );
}
