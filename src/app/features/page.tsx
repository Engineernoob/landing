import { Card } from "@/components/ui/card";
import { Shield, FileText, SearchCheck } from "lucide-react";

export default function FeaturesPage() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
          Why Teams Choose Veriscope
        </span>
      </div>
      <h1 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Features</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="p-6 text-center rounded-lg shadow-sm hover:shadow-lg transition-all bg-white/90 backdrop-blur">
          <div className="group">
            <Shield className="mx-auto h-10 w-10 text-success mb-4 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-2">Compliance First</h3>
            <p className="text-muted-foreground">
              Automatically capture every AI interaction for audit-ready logs and
              reporting.
            </p>
          </div>
        </Card>
        <Card className="p-6 text-center rounded-lg shadow-sm hover:shadow-lg transition-all bg-white/90 backdrop-blur">
          <div className="group">
            <SearchCheck className="mx-auto h-10 w-10 text-success mb-4 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-2">Risk Detection</h3>
            <p className="text-muted-foreground">Flag sensitive content, PII, bias, and regulatory red flags.</p>
          </div>
        </Card>
        <Card className="p-6 text-center rounded-lg shadow-sm hover:shadow-lg transition-all bg-white/90 backdrop-blur">
          <div className="group">
            <FileText className="mx-auto h-10 w-10 text-success mb-4 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-2">One-Click Reports</h3>
            <p className="text-muted-foreground">
              Export professional compliance reports in PDF or JSON formats for
              audits.
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}
