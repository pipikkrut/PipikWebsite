export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-bold text-white sm:text-4xl mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: July 8, 2026</p>

      <div className="space-y-8">
        <Section title="1. Information We Collect">
          <p>The Bot may collect and process the following information:</p>

          <ul>
            <li>Discord User IDs</li>
            <li>Discord Server (Guild) IDs</li>
            <li>Voice Channel IDs</li>
            <li>Text Channel IDs</li>
            <li>Command usage</li>
            <li>Playback settings</li>
            <li>Queue information</li>
            <li>Error logs and diagnostic information</li>
          </ul>

          <p>
            The Bot does <strong>not</strong> intentionally collect passwords,
            payment information, email addresses, or private Discord messages.
          </p>
        </Section>

        <Section title="2. How Information Is Used">
          <ul>
            <li>Provide music playback features.</li>
            <li>Store server-specific settings.</li>
            <li>Maintain music queues.</li>
            <li>Improve stability and performance.</li>
            <li>Detect abuse or misuse.</li>
            <li>Troubleshoot technical issues.</li>
          </ul>
        </Section>

        <Section title="3. Data Sharing">
          <p>
            We do not sell, rent, or trade your information.
          </p>

          <p>Your information may only be shared when:</p>

          <ul>
            <li>Required by applicable law.</li>
            <li>Necessary to protect the integrity of the Bot.</li>
            <li>Required by trusted infrastructure providers.</li>
          </ul>
        </Section>

        <Section title="4. Data Retention">
          <p>
            Data is retained only for as long as necessary to provide the Bot's
            functionality or comply with legal obligations. Temporary playback data
            is automatically removed when no longer needed.
          </p>
        </Section>

        <Section title="5. Security">
          <p>
            Reasonable technical and organizational measures are implemented to
            protect stored information. However, no online service can guarantee
            absolute security.
          </p>
        </Section>

        <Section title="6. Third-Party Services">
          <p>
            The Bot interacts with Discord and external audio providers. Their
            services are governed by their own privacy policies and terms.
          </p>
        </Section>

        <Section title="7. User Rights">
          <p>You may request:</p>

          <ul>
            <li>Information about stored data.</li>
            <li>Deletion of eligible stored data.</li>
            <li>Correction of inaccurate stored information.</li>
          </ul>

          <p>
            Support services are currently unavailable. Data request procedures will
            become available once the official support system launches.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            The Bot is not intended for individuals who are not permitted to use
            Discord under Discord's Terms of Service.
          </p>
        </Section>

        <Section title="9. Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. Continued use of the
            Bot after changes become effective constitutes acceptance of the revised
            policy.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Support services are currently unavailable. Contact information will be
            published once our official support system becomes available.
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
