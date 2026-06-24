# AEGIS Theme System — Integration Guide

This adds a centralized, dynamic theme engine on top of the existing app
**without touching any business logic, API calls, routing, or backend
contracts.** It only changes *how colors are sourced* (CSS variables
instead of hardcoded hex), and adds two new files + a few additive edits.

## Files added (copy as-is)

```
src/theme/themeConfig.js     ← 10 themes + token map (already generated)
src/theme/ThemeContext.jsx   ← Context, Provider, useTheme() hook
src/theme/ThemeSwitcher.jsx  ← dropdown (compact) + grid picker (full)
```

No existing file needs to be deleted or rewritten. Everything below is
additive or a 1-line color swap.

---

## 1. Wrap the app — `src/main.tsx`

```diff
 import { StrictMode } from "react";
 import { createRoot } from "react-dom/client";
 import "./index.css";
 import App from "./App";
+import { ThemeProvider } from "./theme/ThemeContext";

 createRoot(document.getElementById("root")!).render(
   <StrictMode>
-    <App />
+    <ThemeProvider>
+      <App />
+    </ThemeProvider>
   </StrictMode>
 );
```

`ThemeProvider` does nothing to routing — `<App />` (with its
`<BrowserRouter>`, all `<Route>`s, Zustand stores, API clients) is
untouched and just rendered as a child.

---

## 2. Define CSS variable defaults — `src/index.css`

Add this block near the top, right after your `:root { color-scheme: dark; ... }`
block. These are **fallback values** — `ThemeProvider` overwrites them at
runtime, but having defaults means there's no flash-of-unstyled-content
before React mounts.

```diff
 :root {
   color-scheme: dark;
   --bg: #05060f;
   --bg-2: #0a0d1f;
   --ink: #e6e9f5;
   --ink-dim: #8a90a8;
   --pink: #ff3d7f;
   --pink-2: #ff7aa8;
   --cyan: #38e8ff;
   --amber: #ffb020;
   --emerald: #2ee6a6;
   --violet: #8b5cf6;
+
+  /* ── AEGIS Theme Engine defaults (Guardian Rose) ──────────────── */
+  /* Overwritten instantly at runtime by ThemeProvider — these are   */
+  /* just first-paint fallbacks so there's no flash before React mounts. */
+  --aegis-primary: #ff3d7f;
+  --aegis-primary-hover: #ff5c91;
+  --aegis-secondary: #38e8ff;
+  --aegis-accent: #ffb020;
+  --aegis-bg: #05060f;
+  --aegis-bg-alt: #0a0d1f;
+  --aegis-surface: rgba(255,255,255,0.05);
+  --aegis-surface-alt: rgba(255,255,255,0.08);
+  --aegis-card: rgba(255,255,255,0.06);
+  --aegis-card-hover: rgba(255,255,255,0.1);
+  --aegis-text-primary: #e6e9f5;
+  --aegis-text-secondary: #a7adc4;
+  --aegis-text-muted: #6b7190;
+  --aegis-border: rgba(255,255,255,0.08);
+  --aegis-border-strong: rgba(255,255,255,0.16);
+  --aegis-success: #2ee6a6;
+  --aegis-warning: #ffb020;
+  --aegis-danger: #ff3d7f;
+  --aegis-info: #38e8ff;
+  --aegis-gradient-primary: linear-gradient(135deg, #ff3d7f 0%, #ff7aa8 100%);
+  --aegis-gradient-surface: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
+  --aegis-gradient-hero: radial-gradient(circle at 30% 20%, rgba(255,61,127,0.25), transparent 60%), radial-gradient(circle at 80% 80%, rgba(56,232,255,0.18), transparent 60%);
+  --aegis-shadow-glow-primary: 0 0 0 1px rgba(255,61,127,0.35), 0 10px 40px -10px rgba(255,61,127,0.6);
+  --aegis-shadow-glow-secondary: 0 0 0 1px rgba(56,232,255,0.35), 0 10px 40px -10px rgba(56,232,255,0.55);
+  --aegis-shadow-card: 0 8px 30px -10px rgba(0,0,0,0.5);
+  --aegis-chart-1: #ff3d7f;
+  --aegis-chart-2: #38e8ff;
+  --aegis-chart-3: #ffb020;
+  --aegis-chart-4: #2ee6a6;
+  --aegis-chart-5: #8b5cf6;
+  --aegis-chart-6: #ff8a3d;
+  --aegis-btn-primary-bg: linear-gradient(135deg, #ff3d7f, #e11d48);
+  --aegis-btn-primary-text: #ffffff;
+  --aegis-btn-secondary-bg: rgba(255,255,255,0.06);
+  --aegis-btn-secondary-text: #e6e9f5;
 }
```

Then re-point your **existing** utility classes at the new variables
instead of the hardcoded ones (this is the only place colors actually
change — every component using `.glass`, `.glass-strong`, `.glow-pink`,
etc. updates automatically, with zero per-component edits):

```diff
 .glass {
-  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
-  border: 1px solid rgba(255,255,255,0.08);
+  background: var(--aegis-gradient-surface);
+  border: 1px solid var(--aegis-border);
   backdrop-filter: blur(18px) saturate(140%);
   -webkit-backdrop-filter: blur(18px) saturate(140%);
   border-radius: 18px;
 }
 .glass-strong {
-  background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));
-  border: 1px solid rgba(255,255,255,0.12);
+  background: var(--aegis-gradient-surface);
+  border: 1px solid var(--aegis-border-strong);
   backdrop-filter: blur(22px) saturate(160%);
   border-radius: 22px;
 }
 .glass-chip {
-  background: rgba(255,255,255,0.04);
-  border: 1px solid rgba(255,255,255,0.08);
+  background: var(--aegis-surface);
+  border: 1px solid var(--aegis-border);
   backdrop-filter: blur(14px);
   border-radius: 999px;
 }

-.glow-pink { box-shadow: 0 0 0 1px rgba(255,61,127,0.35), 0 10px 40px -10px rgba(255,61,127,0.6); }
-.glow-cyan { box-shadow: 0 0 0 1px rgba(56,232,255,0.35), 0 10px 40px -10px rgba(56,232,255,0.55); }
-.glow-amber { box-shadow: 0 0 0 1px rgba(255,176,32,0.35), 0 10px 40px -10px rgba(255,176,32,0.55); }
-.text-glow-pink { text-shadow: 0 0 24px rgba(255,61,127,0.55); }
-.text-glow-cyan { text-shadow: 0 0 24px rgba(56,232,255,0.55); }
+.glow-pink { box-shadow: var(--aegis-shadow-glow-primary); }
+.glow-cyan { box-shadow: var(--aegis-shadow-glow-secondary); }
+.glow-amber { box-shadow: var(--aegis-shadow-glow-secondary); }
+.text-glow-pink { text-shadow: 0 0 24px color-mix(in srgb, var(--aegis-primary) 55%, transparent); }
+.text-glow-cyan { text-shadow: 0 0 24px color-mix(in srgb, var(--aegis-secondary) 55%, transparent); }

 .text-gradient-pink {
-  background: linear-gradient(90deg, #ff7aa8, #ff3d7f, #ff8cc8);
+  background: var(--aegis-gradient-primary);
   -webkit-background-clip: text;
   background-clip: text;
   color: transparent;
 }
 .text-gradient-cyan {
-  background: linear-gradient(90deg, #38e8ff, #7cf5ff, #a5f3fc);
+  background: linear-gradient(90deg, var(--aegis-secondary), var(--aegis-info), var(--aegis-secondary));
   -webkit-background-clip: text;
   background-clip: text;
   color: transparent;
 }

 .aurora::before {
   top: -20vmax;
   left: -20vmax;
-  background: radial-gradient(circle, #ff3d7f 0%, transparent 60%);
+  background: radial-gradient(circle, var(--aegis-primary) 0%, transparent 60%);
   animation: drift1 22s ease-in-out infinite alternate;
 }
 .aurora::after {
   bottom: -25vmax;
   right: -20vmax;
-  background: radial-gradient(circle, #38e8ff 0%, transparent 60%);
+  background: radial-gradient(circle, var(--aegis-secondary) 0%, transparent 60%);
   animation: drift2 26s ease-in-out infinite alternate;
 }

+/* Smooth, app-wide cross-fade whenever the theme changes */
+body, .glass, .glass-strong, .glass-chip, .aurora::before, .aurora::after {
+  transition: background-color 0.4s ease, border-color 0.4s ease,
+              box-shadow 0.4s ease, color 0.4s ease;
+}
```

`body` background can also switch to the var:

```diff
 html, body, #root {
   height: 100%;
-  background: var(--bg);
-  color: var(--ink);
+  background: var(--aegis-bg);
+  color: var(--aegis-text-primary);
   font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
   -webkit-font-smoothing: antialiased;
 }
```

> Tailwind utility classes like `bg-pink-500/20`, `text-cyan-300` used
> directly in JSX (e.g. `Pill`, `StatCard`, feature pages) are **left
> exactly as-is** — those are intentionally per-feature accent colors
> (e.g. "Bystander Beacon" amber card, "Blockchain" pink card) and are
> NOT meant to be re-themed; only the *global chrome* (glass panels,
> glows, gradients, hero background) reflects the active theme. This
> matches "preserve all existing functionality" — feature pages keep
> their distinct visual identity, only the app-wide shell reflows.

---

## 3. Add the switcher to the topbar — `src/components/Layout.jsx`

Only an additive import + one JSX insertion in the header row. Nothing
else in `Layout.jsx` (nav arrays, `GlobalBeaconWatcher`, auth, etc.)
changes.

```diff
 import { useEffect, useState, useRef, useCallback } from "react";
 import { useAuthStore } from "../store/authStore";
 import { useSafetyStore } from "../store/safetyStore";
 import { sosApi } from "../api/endpoints";
+import ThemeSwitcher from "../theme/ThemeSwitcher";
```

```diff
               <div className="hidden md:flex items-center gap-2 glass-chip px-3 py-1.5 text-xs tabular">
                 <Zap className="w-3.5 h-3.5 text-amber-300" />
                 {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
               </div>

+              <ThemeSwitcher variant="compact" />
+
               <button className="relative p-2 glass-chip">
                 <Bell className="w-4 h-4" />
                 {sosActive && <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-400 blink" />}
               </button>
```

---

## 4. Add the full picker to a Settings page

Drop this into any existing settings route (User/Guardian/Admin
settings — they all currently render placeholder components reusing
`GuardianPortal` / `AdminCommandCenter`). Simplest: create one new
small settings section component, or inline it. Example for a
dedicated panel:

```jsx
// Anywhere inside an existing settings page component:
import ThemeSwitcher from "../theme/ThemeSwitcher";

// ... inside the page's JSX, alongside other settings cards:
<ThemeSwitcher variant="full" />
```

This does not require a new route — it's just a card you place inside
whichever settings page component already exists in your router.

---

## 5. Using theme tokens in components that need raw values

Most components don't need to do anything (CSS vars cascade
automatically). If a specific component wants the active theme's raw
hex (e.g. to pass into a `recharts` `stroke` prop, or `MapView`
marker colors), use the hook:

```jsx
import { useTheme } from "../theme/ThemeContext";

function MyChart() {
  const { theme } = useTheme();
  return (
    <LineChart data={data}>
      <Line dataKey="risk" stroke={theme.chart.c1} strokeWidth={2.5} />
      <Line dataKey="safe" stroke={theme.chart.c2} strokeWidth={2} />
    </LineChart>
  );
}
```

Example for `ThreatGauge.jsx` (optional — current gradient-by-score
logic can stay; this just shows how to theme it if desired):

```diff
+import { useTheme } from "../theme/ThemeContext";

 export default function ThreatGauge({ score, confidence, size = 220 }) {
+  const { theme } = useTheme();
   const radius = size / 2 - 18;
   ...
   const gradient = useMemo(() => {
-    if (score >= 80) return { a: "#ff3d7f", b: "#ff8a3d" };
-    if (score >= 60) return { a: "#ff8a3d", b: "#ffb020" };
-    if (score >= 35) return { a: "#ffb020", b: "#38e8ff" };
-    return { a: "#2ee6a6", b: "#38e8ff" };
-  }, [score]);
+    if (score >= 80) return { a: theme.danger, b: theme.accent };
+    if (score >= 60) return { a: theme.accent, b: theme.warning };
+    if (score >= 35) return { a: theme.warning, b: theme.secondary };
+    return { a: theme.success, b: theme.secondary };
+  }, [score, theme]);
```

This is **entirely optional polish** — risk-level semantic colors
(danger=high risk, success=safe) can stay hardcoded if you'd rather
keep SOS-related colors universally recognizable regardless of theme
(common UX practice for safety apps — red always means danger). The
guide above shows how to do it either way.

---

## What is explicitly NOT touched

- `src/api/*` — all axios clients, endpoints, journeyApi, ws client: **unchanged**
- `src/store/*` — authStore, safetyStore, journeyStore: **unchanged**
- `src/App.tsx` routing table: **unchanged**
- Any backend contract / DTO shape: **unchanged**
- Feature-page-specific accent colors (Pill tones, StatCard tones,
  per-feature gradients like Bystander's amber, Blockchain's pink):
  **unchanged** — these are deliberate per-feature branding, not
  global theme, and stay exactly as designed.

## Adding an 11th theme later

Open `src/theme/themeConfig.js`, copy any existing block inside the
`themes = { ... }` object, rename the key, change values. It
automatically appears in both `ThemeSwitcher` variants — no other file
needs editing.
