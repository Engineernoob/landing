"use client";

import Link from "next/link";
import { WaitlistForm } from "@/components/ui/waitlistform";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
          The Audit & Compliance Layer for AI
        </h1>
        <p className="mt-4 text-lg text-slate max-w-2xl">
          Veriscope captures every AI interaction and turns it into audit-ready
          evidence. Stay compliant with{" "}
          <Badge variant="secondary">EU AI Act</Badge> &{" "}
          <Badge variant="secondary">NIST RMF</Badge> — automatically.
        </p>
        <div className="mt-7 w-full max-w-md">
          <WaitlistForm />
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="bg-muted py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">The Problem</h2>
        <p className="text-slate max-w-2xl mx-auto mb-12">
          LLMs are powerful, but they're in black boxes. Compliance,
          auditability, and trust are afterthoughts — while regulations are
          arriving fast.
        </p>
        <h2 className="text-3xl font-semibold mb-6">The Solution</h2>
        <p className="text-slate max-w-2xl mx-auto">
          Veriscope makes compliance automatic: every log captured, every risk
          flagged, every report ready in one click.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">1. Capture Logs</h3>
            <p className="text-slate">
              Every LLM input, output, model, and cost stored securely.
            </p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">2. Flag Risks</h3>
            <p className="text-slate">
              Automatically detect <Badge variant="destructive">PII</Badge>,
              bias, toxic content, or high-risk models.
            </p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">3. Export Reports</h3>
            <p className="text-slate">
              Generate audit-ready PDF & JSON reports in one click.
            </p>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Stay Ahead of AI Compliance
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Regulations like the EU AI Act take effect in 2025. Be ready with
          Veriscope.
        </p>
        <div className="w-full max-w-md mx-auto">
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border bg-muted py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Veriscope. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-6">
          <Link
            href="mailto:hello@veriscope.app"
            className="hover:text-foreground"
          >
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  );
}
