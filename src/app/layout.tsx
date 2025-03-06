import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Prompt Collector",
  description: "生成AIのためのプロンプト集",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="min-h-screen bg-background">
          <div className="container py-10 mx-auto">
            <h1 className="text-3xl font-bold text-center mb-10">
              プロンプトテンプレート
            </h1>
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
