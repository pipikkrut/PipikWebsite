import { Link } from "react-router-dom";
import {
  Music,
  Zap,
  Shield,
  Users,
  Headphones,
  ListMusic,
  Volume2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Music className="h-6 w-6" />,
    title: "Crystal Clear Audio",
    desc: "Enjoy lossless quality up to 320 kbps. Hear every beat exactly the way it was meant to sound.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    desc: "Instant connection and playback. No lag, no buffering — just pure music.",
  },
  {
    icon: <ListMusic className="h-6 w-6" />,
    title: "Queues & Playlists",
    desc: "Manage your queue, load playlists, and keep the music going non-stop.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "24/7 Uptime",
    desc: "Always online with 99.9 % uptime so the party never stops.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Easy for Everyone",
    desc: "Simple slash commands anyone can use. Zero configuration required.",
  },
  {
    icon: <Volume2 className="h-6 w-6" />,
    title: "Multiple Sources",
    desc: "YouTube, Spotify, SoundCloud, direct links and many more platforms.",
  },
];

const stats = [
  { value: "1+", label: "Servers" },
  { value: "10+", label: "Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export default function HomePage() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/50 via-[#0a0e1a]/80 to-[#0a0e1a]" />
        </div>

        {/* Decorative glow blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[720px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-40 -right-40 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-4 pb-24 pt-20 sm:px-6 sm:pb-36 sm:pt-32 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-300">
            <Sparkles className="h-4 w-4" />
            <span>Free Discord Music Bot</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            <span className="block text-white">Your Music.</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Your Discord.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed">
            <strong className="text-white">Pipik</strong> is a powerful,
            free-to-use music bot for Discord. Play your favourite tracks in
            voice channels with friends — simple, fast & high quality.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1237326088464629770&permissions=139623517248&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-cyan-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyan-600/25 transition-all hover:bg-cyan-500 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              <Headphones className="h-5 w-5 transition-transform group-hover:scale-110" />
              Add to Discord
            </a>
            <Link
              to="/commands"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-slate-300 backdrop-blur transition-all hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
            >
              View Commands
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Stats ───── */}
      <section className="border-y border-white/5 bg-[#060a14]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why choose{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Pipik
              </span>
              ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Everything you need for the perfect music experience on Discord.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/20 hover:bg-cyan-500/[0.04]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Quick Start ───── */}
      <section className="border-t border-white/5 bg-[#060a14] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Get started in{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                3 steps
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Invite the Bot",
                desc: 'Click "Add to Discord" and select your server.',
              },
              {
                step: "02",
                title: "Join a Voice Channel",
                desc: "Hop into any voice channel on your server.",
              },
              {
                step: "03",
                title: "Play Music",
                desc: "Type /play and the track name. That's it! 🎶",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-lg shadow-cyan-600/20">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="relative rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 via-[#0a0e1a] to-blue-600/10 p-10 sm:p-14 overflow-hidden">
            {/* glow */}
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

            <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
              Ready to listen?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-slate-400">
              Join thousands of servers already using Pipik to enjoy music
              together.
            </p>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1237326088464629770&permissions=139623517248&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyan-600/25 transition-all hover:bg-cyan-500 hover:-translate-y-0.5"
            >
              <Headphones className="h-5 w-5" />
              Add Pipik — It's Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
