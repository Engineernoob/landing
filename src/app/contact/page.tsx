"use client";

import { useState } from "react";
import { supabaseServer } from "@/lib/supabaseServer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabaseServer.from("messages").insert([
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
      ]);
      if (error) {
        throw new Error(error.message);
      }
      toast.success("✅ Message sent!", {
        description: "We’ll get back to you within 1–2 business days.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast.error("❌ Failed to send", {
        description: err?.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="rounded-lg border bg-card p-8 shadow-sm">
        {/* Tagline */}
        <div className="flex justify-center mb-4">
          <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            Get in Touch
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Contact Us
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Have questions about Veriscope? Fill out the form below and our team
          will reach out to you shortly.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              name="message"
              placeholder="How can we help you?"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </main>
  );
}
