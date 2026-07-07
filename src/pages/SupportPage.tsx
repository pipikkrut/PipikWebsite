import {
  MessageCircle,
  ExternalLink,
  Bug,
  Lightbulb,
  HelpCircle,
} from "lucide-react";

const helpItems = [
  {
    icon: <Bug className="h-5 w-5" />,
    title: "Report a Bug",
    desc: "Found a bug? Let us know in the #bug-reports channel on our server.",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Suggest a Feature",
    desc: "Have an idea for a new feature? Share it in #suggestions.",
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    title: "Get Help",
    desc: "Need help with setup? Ask a question in #help and we'll respond.",
  },
];

const faq = [
  {
    q: "The bot won't connect to a voice channel",
    a: "Make sure the bot has permission to connect and speak in the voice channel, and that you are already in a voice channel yourself.",
  },
  {
    q: "No audio during playback",
    a: "Check that the bot volume isn't set to 0 (/volume 50). Also make sure the bot isn't server-muted in the channel settings.",
  },
  {
    q: "The bot doesn't respond to commands",
    a: "Verify the bot has Read Messages and Send Messages permissions in the current channel. Try /help to test.",
  },
  {
    q: "Is the bot free to use?",
    a: "Yes! Pipik is completely free for all Discord servers with no hidden fees.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-600/20">
          <MessageCircle className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Support</h1>
        <p className="mt-3 text-slate-400">Need help? We've got you covered!</p>
      </div>

      {/* Join Server */}
      <div className="rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 p-8 text-center mb-12">
        <h2 className="text-xl font-semibold text-white mb-3">
          Discord Support Server
        </h2>
        <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
          Join our Discord server to get help, report bugs, and hang out with
          the community.
        </p>
        <a
          href="https://discord.gg/YOUR_SERVER"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-xl bg-[#5865F2] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#5865F2]/25 transition-all hover:bg-[#4752C4] hover:-translate-y-0.5"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Join the Server
          <ExternalLink className="h-4 w-4 opacity-50" />
        </a>
      </div>

      {/* Help cards */}
      <div className="grid gap-4 sm:grid-cols-3 mb-14">
        {helpItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold text-white mb-1.5">
              {item.title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
            >
              <h3 className="font-semibold text-white mb-2 flex items-start gap-2">
                <span className="text-cyan-400 shrink-0">Q:</span>
                {item.q}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
