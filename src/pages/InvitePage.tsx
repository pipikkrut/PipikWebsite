import { Headphones, CheckCircle, ExternalLink } from "lucide-react";

const permissions = [
  "Connect to voice channels",
  "Speak in voice channels",
  "Read messages",
  "Send messages",
  "Embed links",
  "Add reactions",
  "Use slash commands",
];

export default function InvitePage() {
  const inviteUrl =
    "https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands";

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-600/30">
          <Headphones className="h-10 w-10 text-white" />
        </div>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Invite{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Pipik
          </span>
        </h1>
        <p className="mt-3 text-slate-400">
          Add Pipik to your server and start listening to music right now!
        </p>
      </div>

      {/* Permissions */}
      <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Required Permissions
        </h2>
        <ul className="space-y-3">
          {permissions.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
              <span className="text-sm text-slate-400">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-8 text-center">
        <a
          href={inviteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-xl bg-cyan-600 px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-cyan-600/25 transition-all hover:bg-cyan-500 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
        >
          <Headphones className="h-5 w-5 transition-transform group-hover:scale-110" />
          Add to Discord
          <ExternalLink className="h-4 w-4 opacity-50" />
        </a>
        <p className="mt-4 text-xs text-slate-600">
          You will be redirected to the Discord website
        </p>
      </div>

      {/* Tip */}
      <div className="mt-10 rounded-xl border border-sky-500/10 bg-sky-500/5 p-5">
        <p className="text-sm text-sky-200/70">
          <strong className="text-sky-200">💡 Tip:</strong> You need
          Administrator or "Manage Server" permissions on the target server to
          add the bot.
        </p>
      </div>
    </div>
  );
}
