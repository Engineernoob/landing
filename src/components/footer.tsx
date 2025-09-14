import Link from "next/link";
import { Github, Twitter, Linkedin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/30 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Copyright */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Veriscope. All rights reserved.
        </div>

        {/* Middle - Links */}
        <div className="flex gap-6 text-sm">
          <Link
            href="mailto:hello@veriscope.app"
            className="hover:text-foreground"
          >
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </div>

        {/* Right - Social + Compliance */}
        <div className="flex items-center gap-6">
          <Link href="https://x.com/shebuildsfire" target="_blank">
            <Twitter className="h-5 w-5 hover:text-foreground" />
          </Link>
          <Link href="https://github.com/Engineernoob" target="_blank">
            <Github className="h-5 w-5 hover:text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/taahirah-denmark-4b1441196/"
            target="_blank"
          >
            <Linkedin className="h-5 w-5 hover:text-foreground" />
          </Link>
          {/* Compliance Badge */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-success" />
            GDPR & EU AI Act Ready
          </div>
        </div>
      </div>
    </footer>
  );
}
