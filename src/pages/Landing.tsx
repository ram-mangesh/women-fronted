import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield, Radar, Siren, Mic, MapPin, Brain, Users, Zap, ChevronRight, Activity,
  Bell, Lock, Smartphone, Eye, Heart,
} from "lucide-react";
import ThreatGauge from "../components/ThreatGauge";

const features = [
  { icon: Brain, title: "AI Risk Prediction", desc: "Predicts threats BEFORE they happen using 14+ real-time signals.", tone: "pink" },
  { icon: Mic, title: "Voice + Emotion AI", desc: "Whisper speech + panic emotion detection triggers SOS instantly.", tone: "cyan" },
  { icon: Smartphone, title: "Shake & Smartwatch", desc: "Accelerometer, gyroscope, heart-rate spikes — validated by AI.", tone: "amber" },
  { icon: MapPin, title: "Safest Route AI", desc: "Not shortest — safest. Lighting, crime history, crowd density.", tone: "emerald" },
  { icon: Radar, title: "Camera Threat AI", desc: "YOLOv8 + OpenCV detect suspicious following & aggression.", tone: "violet" },
  { icon: Siren, title: "Auto Escalation", desc: "Guardian → auto-call → Police in under 90 seconds.", tone: "pink" },
  { icon: Eye, title: "Stealth Mode", desc: "Fake calculator, secret gestures, hidden PINs.", tone: "cyan" },
  { icon: Users, title: "Community Intel", desc: "Anonymous verified heatmaps of unsafe zones city-wide.", tone: "amber" },
];

const stats = [
  { k: "98.4%", v: "Prediction Accuracy" },
  { k: "< 3s", v: "Avg SOS Response" },
  { k: "48", v: "AI Threat Signals" },
  { k: "24/7", v: "Real-time Monitoring" },
];

export default function Landing() {
  return (
    <div className="relative min-h-screen">
      <div className="aurora" />
      <div className="grid-overlay" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 grid place-items-center glow-pink">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-wider">AEGIS</div>
            <div className="text-[10px] text-slate-400 -mt-0.5">AI Women Safety Intelligence</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
          <a href="#features" className="hover:text-white">Platform</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#stack" className="hover:text-white">Architecture</a>
          <a href="#trust" className="hover:text-white">Trust</a>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/login" className="text-sm px-4 py-2 rounded-full glass-chip hover:bg-white/10">Sign in</Link>
          <Link to="/register" className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 font-semibold hover:brightness-110 glow-pink">Create Account</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 lg:px-12 pt-8 lg:pt-16 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 glass-chip px-3 py-1.5 text-[11px] tracking-widest text-slate-300 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink" />
              AI RISK ENGINE v4.2 • LIVE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.02]"
            >
              Safety that <span className="text-gradient-pink text-glow-pink">predicts</span>,
              <br />not just <span className="text-slate-500 line-through decoration-pink-400/60">reacts</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              AEGIS is a <span className="text-white font-semibold">proactive AI safety ecosystem</span> for women — fusing real-time threat intelligence, voice emotion AI, predictive navigation, and automated emergency escalation into a single hackathon-winning platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/login" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 font-semibold glow-pink hover:brightness-110">
                Enter Command Deck <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <a href="#how" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-chip hover:bg-white/10">
                <Activity className="w-4 h-4" /> Watch it work
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.v} className="glass p-4 rounded-2xl">
                  <div className="text-2xl font-bold tabular text-gradient-cyan">{s.k}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual: threat radar */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative glass-strong p-6 rounded-3xl glow-pink"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-400">AI Threat Scanner</div>
                  <div className="text-sm text-white font-semibold">Real-time risk radar</div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink" /> ACTIVE
                </span>
              </div>

              <div className="relative aspect-square grid place-items-center">
                {/* Radar rings */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="absolute rounded-full border border-cyan-400/20" style={{ inset: `${i * 12}%` }} />
                ))}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 radar-sweep" style={{
                    background: "conic-gradient(from 0deg, transparent 0%, rgba(56,232,255,0.25) 10%, transparent 30%)",
                  }} />
                </div>
                {/* Dots */}
                {[
                  { top: "22%", left: "30%", c: "#2ee6a6" },
                  { top: "38%", left: "68%", c: "#ffb020" },
                  { top: "65%", left: "22%", c: "#38e8ff" },
                  { top: "70%", left: "72%", c: "#ff3d7f" },
                  { top: "50%", left: "50%", c: "#ff7aa8" },
                ].map((d, i) => (
                  <div key={i} className="absolute w-2.5 h-2.5 rounded-full" style={{ top: d.top, left: d.left, background: d.c, boxShadow: `0 0 12px ${d.c}` }} />
                ))}
                <ThreatGauge score={64} confidence={91} size={150} />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
                <div className="glass p-2 rounded-xl"><div className="text-slate-400">Area</div><div className="font-semibold">Connaught Pl.</div></div>
                <div className="glass p-2 rounded-xl"><div className="text-slate-400">Lighting</div><div className="font-semibold">Moderate</div></div>
                <div className="glass p-2 rounded-xl"><div className="text-slate-400">Crowd</div><div className="font-semibold">Sparse</div></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 lg:px-12 py-16">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-pink-300">Capabilities</div>
          <h2 className="text-3xl lg:text-5xl font-black mt-2">Eight layers of proactive protection</h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Every module is engineered to detect, predict, and respond — before harm reaches you.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass p-5 rounded-2xl hover:-translate-y-1 transition"
            >
              <div className={`w-10 h-10 rounded-xl grid place-items-center mb-3 ${
                f.tone === "pink" ? "bg-pink-500/20 text-pink-300"
                : f.tone === "cyan" ? "bg-cyan-500/20 text-cyan-300"
                : f.tone === "amber" ? "bg-amber-500/20 text-amber-300"
                : f.tone === "emerald" ? "bg-emerald-500/20 text-emerald-300"
                : "bg-violet-500/20 text-violet-300"
              }`}>
                <f.icon className="w-5 h-5" />
              </div>
              <div className="font-bold">{f.title}</div>
              <p className="text-sm text-slate-400 mt-1 leading-snug">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How */}
      <section id="how" className="relative z-10 px-6 lg:px-12 py-16">
        <div className="glass-strong p-8 lg:p-12 rounded-3xl">
          <div className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">How it works</div>
          <h2 className="text-3xl lg:text-4xl font-black mt-2">From signal to safety in under 3 seconds</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { n: "01", t: "Detect", d: "Voice, shake, heart-rate, camera, location — 48 signals streamed live.", i: Radar },
              { n: "02", t: "Predict", d: "FastAPI AI fuses signals into a 0–100 risk score with confidence %.", i: Brain },
              { n: "03", t: "Warn", d: "Safer route + haptic + voice warning + flashlight SOS Morse.", i: Bell },
              { n: "04", t: "Respond", d: "Auto-SOS → Guardian → Twilio voice → Police via WebSocket.", i: Siren },
            ].map((s) => (
              <div key={s.n} className="relative">
                <div className="text-5xl font-black text-gradient-pink">{s.n}</div>
                <div className="flex items-center gap-2 mt-2">
                  <s.i className="w-4 h-4 text-cyan-300" />
                  <div className="font-bold">{s.t}</div>
                </div>
                <p className="text-sm text-slate-400 mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="relative z-10 px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-strong p-8 rounded-3xl">
            <div className="text-[11px] uppercase tracking-[0.3em] text-amber-300">Architecture</div>
            <h3 className="text-2xl font-black mt-2">Enterprise microservices, hackathon-fast</h3>
            <div className="mt-5 space-y-2 text-sm">
              {[
                ["Frontend", "React 19 • Vite • Tailwind • Framer Motion • Recharts • Leaflet"],
                ["State", "Zustand • React Query • WebSocket (STOMP over SockJS)"],
                ["Backend", "Spring Boot 3 • Spring Security • JWT • PostgreSQL"],
                ["AI Services", "FastAPI • Whisper • YOLOv8 • OpenCV • Emotion CNN"],
                ["Comms", "Twilio SMS • Voice • WhatsApp • Firebase Cloud Messaging"],
                ["DevOps", "Docker • Kubernetes • NGINX • GitHub Actions CI/CD"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 items-start">
                  <span className="shrink-0 w-28 text-slate-400">{k}</span>
                  <span className="text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-strong p-8 rounded-3xl relative overflow-hidden">
            <div className="text-[11px] uppercase tracking-[0.3em] text-emerald-300">Trust & Privacy</div>
            <h3 className="text-2xl font-black mt-2">Your safety. Your data. Your control.</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { i: Lock, t: "AES-256 Vault", d: "Evidence encrypted at rest" },
                { i: Eye, t: "Zero-knowledge logs", d: "Optional private mode" },
                { i: Shield, t: "SOC-2 aligned", d: "Role-based access" },
                { i: Heart, t: "Survivor-first", d: "Trauma-informed UX" },
              ].map((b) => (
                <div key={b.t} className="glass p-4 rounded-2xl">
                  <b.i className="w-5 h-5 text-emerald-300" />
                  <div className="font-semibold mt-2">{b.t}</div>
                  <div className="text-xs text-slate-400">{b.d}</div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="glass-strong p-10 lg:p-16 rounded-3xl text-center glow-cyan relative overflow-hidden">
          <Zap className="w-10 h-10 text-amber-300 mx-auto" />
          <h2 className="mt-4 text-3xl lg:text-5xl font-black">Ready to see it live?</h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Enter the Command Deck — explore real-time SOS, AI risk prediction, heatmaps, and guardian tracking.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/login" className="px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 font-semibold glow-pink hover:brightness-110">Launch Platform</Link>
            <a href="#features" className="px-7 py-3 rounded-full glass-chip hover:bg-white/10">Explore features</a>
          </div>
          <div className="absolute inset-0 scan-line opacity-40" />
        </div>
      </section>

      <footer className="relative z-10 px-6 lg:px-12 py-10 border-t border-white/5 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-3">
        <div>© 2026 AEGIS • AI Women Safety Intelligence Platform</div>
        <div className="flex gap-4">
          <span>Spring Boot</span><span>FastAPI</span><span>PostgreSQL</span><span>Twilio</span><span>Google Maps</span>
        </div>
      </footer>
    </div>
  );
}
