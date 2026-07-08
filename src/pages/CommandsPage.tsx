import {
  Play,
  Pause,
  SkipForward,
  Square,
  ListMusic,
  Repeat,
  Shuffle,
  Volume2,
  Search,
  Clock,
  Trash2,
  ArrowRightLeft,
  Info,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

type Category = "music" | "queue" | "utility";

interface Command {
  name: string;
  description: string;
  usage: string;
  icon: React.ReactNode;
  category: Category;
}

const commands: Command[] = [
  {
    name: "!play",
    description: "Play a track by name or URL",
    usage: "!play <name or URL>",
    icon: <Play className="h-4 w-4" />,
    category: "music",
  },
  {
    name: "!pause",
    description: "Pause the current playback",
    usage: "!pause",
    icon: <Pause className="h-4 w-4" />,
    category: "music",
  },
  {
    name: "!resume",
    description: "Resume paused playback",
    usage: "!resume",
    icon: <Play className="h-4 w-4" />,
    category: "music",
  },
  {
    name: "!skip",
    description: "Skip to the next track in the queue",
    usage: "!skip",
    icon: <SkipForward className="h-4 w-4" />,
    category: "music",
  },
  {
    name: "!stop",
    description: "Stop playback and clear the queue",
    usage: "!stop",
    icon: <Square className="h-4 w-4" />,
    category: "music",
  },
  {
    name: "!volume",
    description: "Adjust playback volume (0–100)",
    usage: "!volume <number>",
    icon: <Volume2 className="h-4 w-4" />,
    category: "music",
  },
  {
    name: "!nowplaying",
    description: "Show info about the current track",
    usage: "!nowplaying",
    icon: <Info className="h-4 w-4" />,
    category: "music",
  },
  {
    name: "!queue",
    description: "Display the current track queue",
    usage: "!queue",
    icon: <ListMusic className="h-4 w-4" />,
    category: "queue",
  },
  {
    name: "!clear",
    description: "Clear the entire queue",
    usage: "!clear",
    icon: <Trash2 className="h-4 w-4" />,
    category: "queue",
  },
  {
    name: "/help",
    description: "Show the full list of commands",
    usage: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
    category: "utility",
  },
  {
    name: "!ping",
    description: "Check the bot's latency",
    usage: "!ping",
    icon: <Info className="h-4 w-4" />,
    category: "utility",
  },
  {
    name: "!invite",
    description: "Get the bot invite link",
    usage: "!invite",
    icon: <Info className="h-4 w-4" />,
    category: "utility",
  },
];

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "music", label: "Music", emoji: "🎵" },
  { key: "queue", label: "Queue", emoji: "📋" },
  { key: "utility", label: "Utility", emoji: "⚙️" },
];

export default function CommandsPage() {
  const [active, setActive] = useState<Category>("music");

  const filtered = commands.filter((c) => c.category === active);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Pipik
          </span>{" "}
          Commands
        </h1>
        <p className="mt-3 text-slate-500">
          All slash commands for controlling music playback
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
              active === cat.key
                ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/20"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Command List */}
      <div className="space-y-3">
        {filtered.map((cmd) => (
          <div
            key={cmd.name}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-cyan-500/20 hover:bg-cyan-500/[0.04]"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                {cmd.icon}
              </div>
              <div className="flex-1 min-w-0">
                <code className="text-base font-semibold text-white">
                  {cmd.name}
                </code>
                <p className="mt-1 text-sm text-slate-500">
                  {cmd.description}
                </p>
                <div className="mt-2">
                  <code className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-400 border border-white/5">
                    {cmd.usage}
                  </code>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
