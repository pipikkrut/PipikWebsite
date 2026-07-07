export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-bold text-white sm:text-4xl mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: January 1, 2025</p>

      <div className="space-y-8">
        <Section title="1. Introduction">
          <p>
            This Privacy Policy explains what data the <strong>Pipik</strong>{" "}
            bot ("Bot", "we", "our") collects, how we use it, and what rights
            users have.
          </p>
        </Section>

        <Section title="2. Data We Collect">
          <p>The Bot may process the following information:</p>
          <ul>
            <li>Discord server ID (Guild ID)</li>
            <li>Voice and text channel IDs</li>
            <li>User IDs of those who invoke commands</li>
            <li>Command content (e.g., music search queries)</li>
          </ul>
          <p>
            We do <strong>not</strong> collect private messages, passwords,
            email addresses, or payment information.
          </p>
        </Section>

        <Section title="3. How We Use Data">
          <ul>
            <li>To play and manage music playback</li>
            <li>To apply per-server bot settings</li>
            <li>To diagnose errors and improve service quality</li>
          </ul>
        </Section>

        <Section title="4. Data Storage">
          <p>
            Temporary data (playback queue, current track) is held in memory
            and deleted when the bot restarts. Server settings may be stored
            in a database and can be deleted upon request from a server
            administrator.
          </p>
        </Section>

        <Section title="5. Third-Party Sharing">
          <p>
            We do not sell or share your data with third parties. Data may
            only be disclosed if required by law.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>You may request:</p>
          <ul>
            <li>Deletion of all data related to your server</li>
            <li>Information about stored data</li>
          </ul>
          <p>
            To make a request, contact us on our{" "}
            <a
              href="https://discord.gg/YOUR_SERVER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              support server
            </a>
            .
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>
            We may update this policy at any time. The current version is
            always available on this page.
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
