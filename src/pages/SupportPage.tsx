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

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Support
        </h1>

        <p className="mt-3 text-slate-400">
          Support services are currently unavailable.
        </p>
      </div>

      {/* Support Unavailable */}
      <div className="rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
          <HelpCircle className="h-7 w-7" />
        </div>

        <h2 className="text-2xl font-semibold text-white mb-4">
          Support Coming Soon
        </h2>

        <p className="mx-auto max-w-xl text-slate-400 leading-7">
          Our official support server and support system are currently under
          development.
        </p>

        <p className="mx-auto mt-4 max-w-xl text-slate-400 leading-7">
          If you experience any issues while using the bot, please check back
          later. Support services will become available in a future update.
        </p>

        <p className="mt-8 text-sm text-slate-500">
          Thank you for your patience and for using <span className="text-cyan-400 font-medium">Pipik Music</span>.
        </p>
      </div>
    </div>
  );
}