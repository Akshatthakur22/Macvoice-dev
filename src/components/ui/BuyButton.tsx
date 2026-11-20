"use client";

import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** Starts hosted checkout directly. Every Buy button on the site uses this. */
export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const start = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Couldn't start checkout.");
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      throw new Error("Couldn't start checkout.");
    } catch (err) {
      console.error("Checkout initiation error:", err);
      setError(err instanceof Error ? err.message : "Couldn't start checkout. Please try again.");
      setLoading(false);
    }
  };

  return { start, loading, error };
}

export function CheckoutError({ message, className }: { message: string | null; className?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className={cn("flex items-center gap-2 text-caption text-red-700", className)}>
      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      {message} You can also email akshatthakur22@gmail.com.
    </p>
  );
}

export function BuyButton({
  children = "Buy MacVoice",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { start, loading, error } = useCheckout();
  return (
    <>
      <Button
        type="button"
        onClick={start}
        isLoading={loading}
        variant="primary"
        size="lg"
        arrow={!loading}
        className={className}
      >
        {children}
      </Button>
      <CheckoutError message={error} className="mt-3" />
    </>
  );
}
