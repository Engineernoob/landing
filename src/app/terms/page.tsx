export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <div className="rounded-lg border bg-card p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Table of Contents */}
        <nav className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <a href="#use" className="hover:text-primary">
                Use of Service
              </a>
            </li>
            <li>
              <a href="#waitlist" className="hover:text-primary">
                Waitlist
              </a>
            </li>
            <li>
              <a href="#liability" className="hover:text-primary">
                Limitation of Liability
              </a>
            </li>
            <li>
              <a href="#law" className="hover:text-primary">
                Governing Law
              </a>
            </li>
          </ul>
        </nav>

        <section className="space-y-6">
          <p>
            Welcome to <strong>Veriscope</strong>. By accessing or using our
            services, you agree to the following terms.
          </p>

          <div id="use">
            <h2 className="text-xl font-semibold">Use of Service</h2>
            <p>
              Veriscope is provided as-is, without warranty. You agree not to
              misuse the platform or attempt to disrupt service availability.
            </p>
          </div>

          <div id="waitlist">
            <h2 className="text-xl font-semibold">Waitlist</h2>
            <p>
              Joining the waitlist does not guarantee access to future products
              or services. We may contact you via the email provided.
            </p>
          </div>

          <div id="liability">
            <h2 className="text-xl font-semibold">Limitation of Liability</h2>
            <p>
              Veriscope is not liable for damages arising from use or inability
              to use the service.
            </p>
          </div>

          <div id="law">
            <h2 className="text-xl font-semibold">Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United States. By
              using our services, you agree to these terms.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
