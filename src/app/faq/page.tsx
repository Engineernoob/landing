import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Veriscope?</AccordionTrigger>
          <AccordionContent>
            Veriscope is the audit & compliance layer for AI. It helps companies
            stay compliant with regulations like the EU AI Act by automatically
            logging and flagging AI interactions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Who is Veriscope for?</AccordionTrigger>
          <AccordionContent>
            Veriscope is designed for enterprises, startups, and government
            agencies who need trustworthy AI usage and compliance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is my data safe?</AccordionTrigger>
          <AccordionContent>
            Yes. All logs are stored securely with industry-standard encryption
            and never shared with third parties.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
