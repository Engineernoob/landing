import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
          Questions & Answers
        </span>
      </div>
      <h1 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <div className="rounded-lg border bg-white/90 backdrop-blur p-4 shadow-sm hover:shadow-md transition-all">
            <AccordionTrigger className="text-lg font-semibold">What is Veriscope?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Veriscope is the audit & compliance layer for AI. It helps companies
              stay compliant with regulations like the EU AI Act by automatically
              logging and flagging AI interactions.
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem value="item-2">
          <div className="rounded-lg border bg-white/90 backdrop-blur p-4 shadow-sm hover:shadow-md transition-all">
            <AccordionTrigger className="text-lg font-semibold">Who is Veriscope for?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Veriscope is designed for enterprises, startups, and government
              agencies who need trustworthy AI usage and compliance.
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem value="item-3">
          <div className="rounded-lg border bg-white/90 backdrop-blur p-4 shadow-sm hover:shadow-md transition-all">
            <AccordionTrigger className="text-lg font-semibold">Is my data safe?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes. All logs are stored securely with industry-standard encryption
              and never shared with third parties.
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
