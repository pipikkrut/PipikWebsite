export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-bold text-white sm:text-4xl mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: July 8, 2026</p>

      <div className="space-y-8">
        <Section title="1. Eligibility">
          <p>
            By inviting or using <strong>Pipik</strong> ("the Bot"), you agree to
            these Terms of Service. You must also comply with Discord's Terms of
            Service and Community Guidelines while using the Bot.
          </p>
        </Section>

        <Section title="2. Description of the Service">
          <p>
            Pipik provides music playback and related features within Discord
            servers. Features may be modified, expanded, or discontinued at any
            time without prior notice.
          </p>
        </Section>

        <Section title="3. Acceptable Use">
          <p>You agree not to:</p>
          <ul>
            <li>Use the Bot for any unlawful purpose.</li>
            <li>Spam commands or intentionally overload the Bot.</li>
            <li>Exploit bugs or attempt to interfere with the Bot's operation.</li>
            <li>Circumvent technical restrictions or rate limits.</li>
            <li>Use the Bot in violation of Discord's Terms of Service.</li>
            <li>Distribute or promote copyrighted content without authorization.</li>
          </ul>
        </Section>

        <Section title="4. Availability">
          <p>
            The Bot is provided on an <strong>"as is"</strong> and{" "}
            <strong>"as available"</strong> basis. We do not guarantee uninterrupted
            availability, uptime, or error-free operation.
          </p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>
            The Bot relies on third-party services such as Discord and external audio
            providers. We are not responsible for their availability, content, or
            policies.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            The Bot, including its code, branding, and original content, remains the
            property of its developer(s). All trademarks and copyrights belong to
            their respective owners.
          </p>
        </Section>

        <Section title="7. Termination">
          <p>
            We reserve the right to suspend or terminate access to the Bot at any
            time, with or without notice, if these Terms are violated.
          </p>
        </Section>

        <Section title="8. Disclaimer of Warranties">
          <p>
            The Bot is provided without warranties of any kind, whether express or
            implied, including fitness for a particular purpose or uninterrupted
            service.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, the developer(s) shall not be
            liable for any indirect, incidental, or consequential damages arising
            from the use or inability to use the Bot.
          </p>
        </Section>

        <Section title="10. Changes to These Terms">
          <p>
            We may update these Terms at any time. Continued use of the Bot after
            changes become effective constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Support services are currently unavailable. Contact information will be
            provided once the official support system becomes available.
          </p>
        </Section>
        </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <div className="text-sm leading-relaxed text-slate-400 space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-slate-200">
        {children}
      </div>
    </section>
  );
}
