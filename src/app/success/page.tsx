import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SuccessContent } from "./SuccessContent";

export const metadata: Metadata = {
  title: "Purchase Successful — Download MacVoice.dmg",
  description:
    "Your MacVoice license is active. Download MacVoice.dmg (784 KB) and complete the 3-step setup.",
};

export default function SuccessPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="narrow">
        <Suspense
          fallback={
            <div className="text-center py-20 text-slate-400">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent mb-4" />
              <p>Loading your verified order...</p>
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </Container>
    </div>
  );
}
