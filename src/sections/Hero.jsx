import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const GITHUB_USER = "SanoRod00";
const CACHE_KEY = "hero:gh:v2";
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours

// Last known-good values, read from the GitHub API on 2026-08-30. These ship as
// the permanent fallback: if the request fails, is rate limited, or the visitor
// is offline, the strip renders these instead, with no error text and no
// difference in layout. `year` travels with the count so the label can never
// claim a year the number does not describe.
const FALLBACK = {
  repos: 67,
  pushedThisYear: 17,
  year: 2026,
  stars: 21,
  lastPush: "2026-09-04T18:12:43Z",
};

// Orbit geometry. Angles are degrees counter-clockwise from the positive x
// axis; the tier multiplies --orbit-r for depth. Left and right mirror each
// other, so no pill is placed by eye.
const ORBIT = [
  { name: "React", angle: 160, tier: 1, tone: "dark" },
  { name: "Node.js", angle: 185, tier: 0.94, tone: "light" },
  { name: "PostgreSQL", angle: 210, tier: 1.06, tone: "light" },
  { name: "Odoo ERP", angle: 20, tier: 1, tone: "light" },
  { name: "REST APIs", angle: -5, tier: 0.94, tone: "dark" },
  { name: "AWS", angle: -30, tier: 1.06, tone: "light" },
];

const MARQUEE = [
  "Fullstack Development",
  "Odoo ERP",
  "API Design",
  "Data Migration",
  "React Interfaces",
];

const SOCIALS = [
  { href: `https://github.com/${GITHUB_USER}`, label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/rodrigue-sano-ab3849331",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const orbitStyle = ({ angle, tier }, index) => {
  const rad = (angle * Math.PI) / 180;
  return {
    "--ox": `calc(var(--orbit-r) * ${(Math.cos(rad) * tier).toFixed(4)})`,
    "--oy": `calc(var(--orbit-r) * ${(-Math.sin(rad) * tier).toFixed(4)})`,
    "--float-duration": `${6.5 + index * 0.35}s`,
    "--float-delay": `-${index * 1.1}s`,
  };
};

const ToolboxIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M3 12h18" />
    <path d="M10.5 12v1.5h3V12" />
  </svg>
);

const readCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null; // private mode or blocked storage
  }
};

const writeCache = (entry) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    /* storage can be blocked; the numbers still render */
  }
};

const useGithubStats = () => {
  // Seed from cache at any age. A stale real number beats the fallback, and
  // rendering it immediately means the live response never shifts the layout.
  const [stats, setStats] = useState(() => readCache()?.data ?? null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const cached = readCache();

      // Fresh cache: a returning visitor inside the TTL does not re-fetch.
      if (cached?.at && Date.now() - cached.at < CACHE_TTL) return;

      // Rate limited earlier: stay quiet until GitHub's reset time passes.
      if (cached?.rateLimitedUntil && Date.now() < cached.rateLimitedUntil) return;

      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed&direction=desc`
          ),
        ]);

        // 403/429 with no remaining quota is the documented unauthenticated
        // rate limit (60/hr per IP). Back off until the reset instead of
        // retrying on every mount, and keep whatever data we already have.
        const limited = [userRes, repoRes].find(
          (res) =>
            (res.status === 403 || res.status === 429) &&
            res.headers.get("x-ratelimit-remaining") === "0"
        );
        if (limited) {
          const reset = Number(limited.headers.get("x-ratelimit-reset"));
          writeCache({
            ...(cached ?? {}),
            rateLimitedUntil: Number.isFinite(reset)
              ? reset * 1000
              : Date.now() + 60 * 60 * 1000,
          });
          return;
        }

        if (!userRes.ok || !repoRes.ok) throw new Error("github request failed");

        const user = await userRes.json();
        const repos = await repoRes.json();
        if (!Array.isArray(repos)) throw new Error("unexpected repo payload");

        const year = new Date().getUTCFullYear();
        const data = {
          repos: user.public_repos,
          pushedThisYear: repos.filter(
            (repo) => new Date(repo.pushed_at).getUTCFullYear() === year
          ).length,
          year,
          stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
          lastPush: repos[0] ? repos[0].pushed_at : null,
        };

        if (cancelled) return;
        setStats(data);
        writeCache({ at: Date.now(), data });
      } catch {
        // Offline, DNS failure, CORS, malformed payload: say nothing and let
        // the fallback stand.
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return stats ?? FALLBACK;
};

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const Counter = ({ value }) => {
  const ref = useRef(null);
  const [reduced] = useState(prefersReducedMotion);
  const [progress, setProgress] = useState(null);
  const [finished, setFinished] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (reduced || started.current || !node) return undefined;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const begin = performance.now();
        const tick = (now) => {
          const t = Math.min((now - begin) / 900, 1);
          setProgress(t);
          if (t < 1) frame = requestAnimationFrame(tick);
          else setFinished(true);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  // Derived at render, so a value arriving from the network after the count
  // has finished simply replaces it rather than replaying the animation.
  const shown =
    reduced || finished
      ? value
      : progress === null
        ? 0
        : Math.round(easeOut(progress) * value);

  return (
    <span ref={ref} aria-live="off">
      <span aria-hidden="true">{shown}</span>
      <span className="hero__srOnly">{value}</span>
    </span>
  );
};

const relativeDay = (iso) => {
  if (!iso) return null;
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.round(days / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
};

const MarqueeRun = () => (
  <div className="hero__trackRun">
    {MARQUEE.map((item) => (
      <span key={item}>
        {item}
        <span className="hero__star"> ✳</span>
      </span>
    ))}
  </div>
);

export const Hero = () => {
  const stats = useGithubStats();
  const lastPush = relativeDay(stats.lastPush);

  const figures = [
    { value: stats.repos, label: "public repos" },
    { value: stats.pushedThisYear, label: `repos pushed in ${stats.year}` },
    { value: stats.stars, label: "stars earned" },
  ];

  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="hero__grid">
        <div className="hero__col">
          <p className="hero__eyebrow" data-reveal style={{ animationDelay: "60ms" }}>
            <span className="hero__dash" aria-hidden="true" />
            Hello there!
          </p>

          <h1
            id="hero-name"
            className="hero__title"
            data-reveal
            style={{ animationDelay: "140ms" }}
          >
            I&apos;m <em>Sano Rodrigue</em>
          </h1>

          <p className="hero__subline" data-reveal style={{ animationDelay: "220ms" }}>
            Fullstack engineer based in Kigali, Rwanda
          </p>

          <div className="hero__stage" data-reveal style={{ animationDelay: "300ms" }}>
            <span className="hero__arc hero__arc--2" aria-hidden="true" />
            <span className="hero__arc hero__arc--1" aria-hidden="true" />
            <span className="hero__circle" aria-hidden="true" />

            <div className="hero__photo">
              <img
                src="/hero-profile.jpg"
                alt="Sano Rodrigue"
                width="920"
                height="1150"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            <ul className="hero__orbit">
              {ORBIT.map((item, index) => (
                <li
                  key={item.name}
                  className="hero__orbitItem"
                  style={orbitStyle(item, index)}
                >
                  <span className={`hero__pill hero__pill--${item.tone}`}>
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>

            <div className="hero__badge" role="img" aria-label="Open to work">
              <svg
                className="hero__badgeRing"
                viewBox="0 0 120 120"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <path
                    id="hero-badge-path"
                    d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                    fill="none"
                  />
                </defs>
                <text>
                  <textPath href="#hero-badge-path">
                    OPEN TO WORK · OPEN TO WORK · OPEN TO WORK ·
                  </textPath>
                </text>
              </svg>
              <span className="hero__badgeCore" aria-hidden="true">
                <ToolboxIcon />
              </span>
            </div>
          </div>

          <ul className="hero__pillRow">
            {ORBIT.map((item) => (
              <li key={item.name}>
                <span className={`hero__pill hero__pill--${item.tone}`}>{item.name}</span>
              </li>
            ))}
          </ul>

          <div className="hero__actions" data-reveal style={{ animationDelay: "380ms" }}>
            <a href="/projects" className="hero__btn hero__btn--primary">
              View projects
              <span className="hero__btnArrow" aria-hidden="true">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a href="/#contact" className="hero__btn hero__btn--ghost">
              Hire me
            </a>
          </div>
        </div>

        <div className="hero__footer" data-reveal style={{ animationDelay: "460ms" }}>
          <dl className="hero__stats">
            {figures.map((figure) => (
              <div key={figure.label} className="hero__stat">
                <dt className="hero__statLabel">{figure.label}</dt>
                <dd className="hero__statValue">
                  <Counter value={figure.value} />
                </dd>
              </div>
            ))}
          </dl>

          <ul className="hero__socials">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="hero__social"
                >
                  <social.Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <p className="hero__statNote">github · last push {lastPush}</p>
        </div>
      </div>

      {/* The visible track is duplicated for a seamless loop, so it is hidden
          from assistive tech and the sr-only line carries the real content. */}
      <div className="hero__marquee">
        <p className="hero__srOnly">What I work on: {MARQUEE.join(", ")}.</p>
        <div className="hero__track" aria-hidden="true">
          <MarqueeRun />
          <MarqueeRun />
        </div>
      </div>
    </section>
  );
};
