"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    let pressedOutside = false;

    const isClickOutside = (e: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      return (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      );
    };

    const handlePointerDown = (e: MouseEvent) => {
      pressedOutside = isClickOutside(e);
    };

    const handlePointerUp = (e: MouseEvent) => {
      if (pressedOutside && isClickOutside(e)) {
        onClose();
      }
      pressedOutside = false;
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("pointerdown", handlePointerDown);
    dialog.addEventListener("pointerup", handlePointerUp);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("pointerdown", handlePointerDown);
      dialog.removeEventListener("pointerup", handlePointerUp);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={title ? "dialog-title" : undefined}
      aria-describedby={description ? "dialog-desc" : undefined}
      className={cn(
        "fixed inset-0 m-auto p-0 rounded-3xl bg-[#FFFFFF] border border-[#E8E8ED] text-[#1D1D1F] shadow-2xl backdrop:bg-black/30 max-w-lg w-[calc(100%-2rem)] z-50",
        className
      )}
    >
      <div className="p-8 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {title ? (
          <h2 id="dialog-title" className="text-xl font-bold text-[#1D1D1F] mb-1.5 pr-8 tracking-tight">
            {title}
          </h2>
        ) : null}

        {description ? (
          <p id="dialog-desc" className="text-sm text-[#6E6E73] mb-6">
            {description}
          </p>
        ) : null}

        <div>{children}</div>
      </div>
    </dialog>
  );
}
