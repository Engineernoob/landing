import { Card } from "@/components/ui/card";
import { Shield, FileText, SearchCheck } from "lucide-react";

export default function FeaturesPage() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Features</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="p-6 text-center">
          <Shield className="mx-auto h-10 w-10 text-success mb-4" />
          <h3 className="text-xl font-bold mb-2">Compliance First</h3>
          <p>
            Automatically capture every AI interaction for audit-ready logs and
            reporting.
          </p>
        </Card>
        <Card className="p-6 text-center">
          <SearchCheck className="mx-auto h-10 w-10 text-warning mb-4" />
          <h3 className="text-xl font-bold mb-2">Risk Detection</h3>
          <p>Flag sensitive content, PII, bias, and regulatory red flags.</p>
        </Card>
        <Card className="p-6 text-center">
          <FileText className="mx-auto h-10 w-10 text-info mb-4" />
          <h3 className="text-xl font-bold mb-2">One-Click Reports</h3>
          <p>
            Export professional compliance reports in PDF or JSON formats for
            audits.
          </p>
        </Card>
      </div>
    </main>
  );
}
