export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <div className="rounded-lg border bg-card p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Table of Contents */}
        <nav className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <a href="#info" className="hover:text-primary">
                Information We Collect
              </a>
            </li>
            <li>
              <a href="#use" className="hover:text-primary">
                How We Use Information
              </a>
            </li>
            <li>
              <a href="#protection" className="hover:text-primary">
                Data Protection
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <section className="space-y-6">
          <p>
            At <strong>Veriscope</strong>, your privacy is our priority. This
            Privacy Policy explains how we collect, use, and protect your
            information when you use our service.
          </p>

          <div id="info">
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <p>
              We collect only the information you provide directly, such as your
              email address when you join the waitlist.
            </p>
          </div>

          <div id="use">
            <h2 className="text-xl font-semibold">How We Use Information</h2>
            <p>
              We use your information solely to notify you about updates,
              product launches, and compliance news related to Veriscope.
            </p>
          </div>

          <div id="protection">
            <h2 className="text-xl font-semibold">Data Protection</h2>
            <p>
              All information is stored securely using industry-standard
              encryption. We will never sell or share your personal information.
            </p>
          </div>

          <div id="contact">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p>
              If you have any questions about this policy, contact us at{" "}
              <a
                href="mailto:hello@veriscope.app"
                className="text-primary underline"
              >
                hello@veriscope.app
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
