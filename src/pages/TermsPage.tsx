export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-bold text-white sm:text-4xl mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: January 1, 2025</p>

      <div className="space-y-8">
        <Section title="1. Acceptance of Terms">
          <p>
            By using the <strong>Pipik</strong> bot ("Bot") you agree to these
            Terms of Service. If you do not agree, please stop using the Bot.
          </p>
        </Section>

        <Section title="2. Description of Service">
          <p>
            Pipik is a free music bot for the Discord platform that provides
            music playback features in voice channels.
          </p>
        </Section>

        <Section title="3. Acceptable Use">
          <p>When using the Bot you must not:</p>
          <ul>
            <li>Abuse bot features (command spam, automation)</li>
            <li>
              Use the bot to violate{" "}
              <a
                href="https://discord.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                Discord's Terms of Service
              </a>
            </li>
            <li>
              Attempt to hack, reverse-engineer, or disrupt the bot's
              operation
            </li>
            <li>Use the bot to distribute illegal content</li>
          </ul>
        </Section>

        <Section title="4. Availability">
          <p>
            We strive for maximum uptime but do not guarantee uninterrupted
            service. The Bot may be unavailable due to maintenance, updates,
            or force majeure.
          </p>
        </Section>

        <Section title="5. Limitation of Liability">
          <p>
            The Bot is provided "as is". We are not liable for any direct or
            indirect damages arising from the use of the Bot.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            The Bot does not store or distribute music files. All audio is
            streamed directly from the respective platforms. Users are
            responsible for copyright compliance.
          </p>
        </Section>

        <Section title="7. Termination">
          <p>
            We reserve the right to restrict access to the Bot for users or
            servers that violate these terms.
          </p>
        </Section>

        <Section title="8. Changes to Terms">
          <p>
            We may modify these terms at any time. Continued use of the Bot
            after changes constitutes acceptance of the new terms.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            For any questions, please reach out on our{" "}
            <a
              href="https://discord.gg/YOUR_SERVER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Discord support server
            </a>
            .
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
