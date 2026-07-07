import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060a14]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/pipik-logo.png`}
                alt="Pipik"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-lg font-bold text-white">Pipik</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              The best free music bot for Discord. Listen to your favourite
              tracks with friends right inside a voice channel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/commands", label: "Commands" },
                { to: "/invite", label: "Invite" },
                { to: "/support", label: "Support" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Pipik Bot. All rights reserved. Not
            affiliated with Discord Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
