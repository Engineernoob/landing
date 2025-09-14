"use client";

import Link from "next/link";
import { WaitlistForm } from "@/components/ui/waitlistform";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, AlertTriangle, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center bg-gradient-to-b from-white to-slate-50">
        <Badge variant="outline" className="mb-4">
          Trusted by compliance-first AI teams
        </Badge>
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
        <div className="max-w-3xl mx-auto rounded-lg shadow-sm bg-white/80 p-8">
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
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-3">
              <ClipboardList className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Capture Logs</h3>
            <p className="text-slate">
              Every LLM input, output, model, and cost stored securely.
            </p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-3">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Flag Risks</h3>
            <p className="text-slate">
              Automatically detect <Badge variant="destructive">PII</Badge>,
              bias, toxic content, or high-risk models.
            </p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-3">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Export Reports</h3>
            <p className="text-slate">
              Generate audit-ready PDF & JSON reports in one click.
            </p>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What People Are Saying
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="p-6 rounded-lg shadow-md">
            <p className="text-slate italic">
              "Veriscope transformed our compliance process. It's seamless and
              reliable."
            </p>
            <p className="font-semibold mt-4">– Alex Johnson</p>
          </Card>
          <Card className="p-6 rounded-lg shadow-md">
            <p className="text-slate italic">
              "The audit-ready reports saved us countless hours and gave us
              peace of mind."
            </p>
            <p className="font-semibold mt-4">– Priya Singh</p>
          </Card>
          <Card className="p-6 rounded-lg shadow-md">
            <p className="text-slate italic">
              "A must-have tool for any AI-driven company aiming for
              compliance."
            </p>
            <p className="font-semibold mt-4">– Michael Lee</p>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-black via-slate-900 to-black text-primary-foreground py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Stay Ahead of AI Compliance
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Regulations like the EU AI Act take effect in 2025. Be ready with
          Veriscope.
        </p>
        <div className="w-full max-w-md mx-auto">
          <WaitlistForm variant="outline" />
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          Have questions about Veriscope? Get in touch with our team using the form below.
        </p>
        <div className="max-w-xl mx-auto">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
