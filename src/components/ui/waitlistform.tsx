"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function WaitlistForm({
  variant = "default",
}: {
  variant?: "default" | "outline";
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast.success("✅ Added to waitlist", {
          description: "We’ll notify you when Veriscope launches.",
        });
        setEmail("");
      } else {
        const data = await response.json();
        const error = data?.error || "Unknown error";
        toast.error("❌ Error", { description: error });
      }
    } catch (err: any) {
      toast.error("❌ Error", {
        description: err?.message || "Network error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        required
      />
      <Button type="submit" variant={variant} disabled={loading}>
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
}
