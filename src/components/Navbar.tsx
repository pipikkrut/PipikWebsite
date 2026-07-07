import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/commands", label: "Commands" },
  { to: "/invite", label: "Invite" },
  { to: "/support", label: "Support" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0e1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/pipik-logo.png"
            alt="Pipik"
            className="h-10 w-10 rounded-full ring-2 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Pipik
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-cyan-500/15 text-cyan-300"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Invite Button Desktop */}
        <a
          href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-600/25 transition-all hover:bg-cyan-500 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
        >
          Add to Discord
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-cyan-500/15 text-cyan-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://discord.com/oauth2/authorize?client_id=1237326088464629770&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-lg bg-cyan-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Add to Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
