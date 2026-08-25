import { KenBurnsImage } from "./KenBurnsImage";
import type { Region } from "@/data/regions";

interface ScenePalette {
  type: "snow" | "lake" | "desert" | "hills";
  sun: readonly [string, string];
  sunX: number;
  sunY: number;
  sunR: number;
  back: string;
  mid: string;
  front: string;
  birds: boolean;
  lake?: string;
}

const PALETTE: Record<Region["key"], ScenePalette> = {
  himachal: {
    type: "snow",
    sun: ["#fff7da", "#ffe9a8"],
    sunX: 498,
    sunY: 116,
    sunR: 44,
    back: "#7ba0cd",
    mid: "#4d77ab",
    front: "#2c4f7e",
    birds: true,
  },
  uttarakhand: {
    type: "snow",
    sun: ["#fff3c0", "#ffe6a0"],
    sunX: 148,
    sunY: 108,
    sunR: 42,
    back: "#86abd2",
    mid: "#4f8f88",
    front: "#2c6a55",
    birds: true,
  },
  kashmir: {
    type: "lake",
    sun: ["#fff1c2", "#ffe2a6"],
    sunX: 472,
    sunY: 118,
    sunR: 46,
    back: "#94b4d8",
    mid: "#5c84b3",
    front: "#3a5d8d",
    lake: "#7aa4cc",
    birds: true,
  },
  rajasthan: {
    type: "desert",
    sun: ["#fff0bf", "#ffd277"],
    sunX: 466,
    sunY: 142,
    sunR: 58,
    back: "#f0bd84",
    mid: "#e3a25e",
    front: "#c67e3a",
    birds: false,
  },
  meghalaya: {
    type: "hills",
    sun: ["#f6ffea", "#dcf0c4"],
    sunX: 150,
    sunY: 120,
    sunR: 40,
    back: "#8fc6a8",
    mid: "#5fa37f",
    front: "#387a57",
    birds: false,
  },
};

function Cloud({ cx, cy, s, op, dur, delay }: { cx: number; cy: number; s: number; op: number; dur: number; delay: number }) {
  return (
    <g style={{ animation: `bt-cloud ${dur}s linear ${delay}s infinite`, opacity: op }}>
      <g transform={`translate(${cx},${cy}) scale(${s})`}>
        <rect x={-46} y={-4} width={94} height={20} rx={10} fill="#fff" />
        <ellipse cx={-22} cy={-2} rx={24} ry={17} fill="#fff" />
        <ellipse cx={14} cy={-8} rx={28} ry={20} fill="#fff" />
        <ellipse cx={40} cy={0} rx={20} ry={14} fill="#fff" />
      </g>
    </g>
  );
}

function Bird({ dur, delay, op }: { dur: number; delay: number; op: number }) {
  return (
    <g style={{ animation: `bt-bird ${dur}s linear ${delay}s infinite`, opacity: op }}>
      <path
        d="M0,0 q6,-6 12,0 q6,-6 12,0"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
  );
}

const PLANE_PATH = "M-50,372 C150,210 330,330 520,150 L710,70";

function Plane() {
  return (
    <>
      <path
        d={PLANE_PATH}
        fill="none"
        stroke="#ffffff"
        strokeWidth={2.6}
        strokeDasharray="2 11"
        strokeLinecap="round"
        opacity={0.9}
        style={{ animation: "bt-trail 5s linear infinite" }}
      />
      <g
        style={{
          offsetPath: `path('${PLANE_PATH}')`,
          offsetRotate: "auto",
          animation: "bt-plane 9s ease-in-out infinite",
        }}
      >
        <g transform="translate(-13,-13)" style={{ filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.25))" }}>
          <path d="M2 13 L24 3 L15 24 L12 15 Z" fill="#ffffff" />
          <path d="M12 15 L24 3 L15 24 Z" fill="#dfe7ef" />
        </g>
      </g>
    </>
  );
}

function Sun({ palette, sunId }: { palette: ScenePalette; sunId: string }) {
  return (
    <g style={{ transformOrigin: `${palette.sunX}px ${palette.sunY}px`, animation: "bt-sun 7s ease-in-out infinite" }}>
      <circle cx={palette.sunX} cy={palette.sunY} r={palette.sunR + 30} fill={`url(#glow-${sunId})`} />
      <circle cx={palette.sunX} cy={palette.sunY} r={palette.sunR} fill={`url(#sun-${sunId})`} />
    </g>
  );
}

function Terrain({ palette, sceneId }: { palette: ScenePalette; sceneId: string }) {
  switch (palette.type) {
    case "snow":
      return (
        <>
          <polygon
            points="0,300 80,238 150,288 226,196 300,262 382,176 462,250 540,196 612,256 640,228 640,520 0,520"
            fill={palette.back}
            style={{ transformOrigin: "center", animation: "bt-drift 17s ease-in-out infinite" }}
          />
          <polygon points="226,196 256,236 196,236" fill="#f3f8ff" />
          <polygon points="382,176 416,224 348,224" fill="#f3f8ff" />
          <polygon points="540,196 568,238 512,238" fill="#eef5ff" />
          <polygon
            points="0,360 100,302 182,346 264,288 360,342 460,292 560,348 640,308 640,520 0,520"
            fill={palette.mid}
            style={{ transformOrigin: "center", animation: "bt-drift-b 13s ease-in-out infinite" }}
          />
          <polygon
            points="0,424 120,380 244,418 360,374 484,418 604,378 640,398 640,520 0,520"
            fill={palette.front}
          />
        </>
      );
    case "lake":
      return (
        <>
          <polygon
            points="0,286 84,224 156,278 232,190 306,250 386,168 470,242 548,190 618,248 640,222 640,372 0,372"
            fill={palette.back}
            style={{ transformOrigin: "center", animation: "bt-drift 17s ease-in-out infinite" }}
          />
          <polygon points="232,190 262,232 202,232" fill="#f3f8ff" />
          <polygon points="386,168 420,220 352,220" fill="#eef5ff" />
          <polygon
            points="0,340 110,288 196,330 286,278 372,330 468,284 566,332 640,296 640,372 0,372"
            fill={palette.mid}
          />
          <rect x={0} y={368} width={640} height={160} fill={palette.lake} />
          <rect x={0} y={368} width={640} height={160} fill={`url(#lake-${sceneId})`} opacity={0.5} />
          <g style={{ animation: "bt-shimmer 5s ease-in-out infinite" }}>
            <line x1={60} y1={410} x2={180} y2={410} stroke="#fff" strokeWidth={3} opacity={0.5} strokeLinecap="round" />
            <line x1={360} y1={438} x2={520} y2={438} stroke="#fff" strokeWidth={3} opacity={0.45} strokeLinecap="round" />
            <line x1={220} y1={470} x2={330} y2={470} stroke="#fff" strokeWidth={2.5} opacity={0.4} strokeLinecap="round" />
          </g>
        </>
      );
    case "desert":
      return (
        <>
          <path
            d="M0,346 C120,306 230,360 350,332 C470,304 566,352 640,326 L640,520 0,520 Z"
            fill={palette.back}
            style={{ transformOrigin: "center", animation: "bt-drift 19s ease-in-out infinite" }}
          />
          <path d="M0,398 C140,356 250,402 372,378 C494,354 580,398 640,378 L640,520 0,520 Z" fill={palette.mid} />
          <g transform="translate(338,402) scale(1.05)" fill="#7a4a22" opacity={0.82}>
            <ellipse cx={22} cy={8} rx={22} ry={9} />
            <path d="M4,4 q7,-13 13,-1" />
            <path d="M20,2 q8,-14 14,1" />
            <path d="M38,7 q9,-3 7,-14 l3,0 q3,14 -7,18 z" />
            <rect x={8} y={14} width={3} height={15} />
            <rect x={18} y={15} width={3} height={14} />
            <rect x={28} y={15} width={3} height={14} />
            <rect x={37} y={14} width={3} height={15} />
          </g>
          <path
            d="M0,452 C150,420 260,456 400,436 C520,420 590,448 640,438 L640,520 0,520 Z"
            fill={palette.front}
          />
        </>
      );
    case "hills":
      return (
        <>
          <path
            d="M0,300 C110,256 210,312 330,286 C450,260 556,312 640,284 L640,520 0,520 Z"
            fill={palette.back}
            style={{ transformOrigin: "center", animation: "bt-drift 18s ease-in-out infinite" }}
          />
          <path d="M0,358 C130,316 236,366 360,340 C484,314 574,360 640,340 L640,520 0,520 Z" fill={palette.mid} />
          <g opacity={0.85}>
            <line x1={452} y1={356} x2={452} y2={452} stroke="#fff" strokeWidth={3.5} strokeDasharray="10 8" strokeLinecap="round" style={{ animation: "bt-fall 0.9s linear infinite" }} />
            <line x1={462} y1={356} x2={462} y2={456} stroke="#eef" strokeWidth={3} strokeDasharray="10 9" strokeLinecap="round" style={{ animation: "bt-fall 1.1s linear infinite" }} />
            <line x1={472} y1={356} x2={472} y2={450} stroke="#fff" strokeWidth={2.6} strokeDasharray="9 9" strokeLinecap="round" style={{ animation: "bt-fall 0.8s linear infinite" }} />
          </g>
          <path
            d="M0,430 C150,396 270,438 410,416 C520,398 592,430 640,420 L640,520 0,520 Z"
            fill={palette.front}
          />
          <g style={{ animation: "bt-cloud 30s linear -6s infinite", opacity: 0.55 }}>
            <ellipse cx={180} cy={430} rx={130} ry={20} fill="#fff" />
          </g>
          <g style={{ animation: "bt-cloud 38s linear -20s infinite", opacity: 0.4 }}>
            <ellipse cx={380} cy={468} rx={150} ry={22} fill="#fff" />
          </g>
        </>
      );
  }
}

export function RegionScene({ region }: { region: Region }) {
  const palette = PALETTE[region.key];
  const birds = palette.birds ? (
    <>
      <Bird dur={15} delay={0} op={0.55} />
      <Bird dur={19} delay={-5} op={0.4} />
      <Bird dur={17} delay={-11} op={0.35} />
    </>
  ) : null;

  return (
    <div role="img" aria-label={`${region.name} animated scene`} className="absolute inset-0 overflow-hidden">
      <KenBurnsImage src={region.image} alt={region.name} duration={28} sizes="(max-width: 1024px) 100vw, 45vw" />
      <svg
        viewBox="0 0 640 520"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full pointer-events-none"
      >
        <defs>
          <radialGradient id={`sun-${region.key}`}>
            <stop offset="0%" stopColor={palette.sun[0]} />
            <stop offset="100%" stopColor={palette.sun[1]} />
          </radialGradient>
          <radialGradient id={`glow-${region.key}`}>
            <stop offset="0%" stopColor={palette.sun[1]} stopOpacity={0.55} />
            <stop offset="100%" stopColor={palette.sun[1]} stopOpacity={0} />
          </radialGradient>
          {palette.lake && (
            <linearGradient id={`lake-${region.key}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.35} />
              <stop offset="55%" stopColor="#ffffff" stopOpacity={0} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0.15} />
            </linearGradient>
          )}
        </defs>
        <Sun palette={palette} sunId={region.key} />
        <Terrain palette={palette} sceneId={region.key} />
        <Cloud cx={120} cy={70} s={0.8} op={0.5} dur={54} delay={0} />
        <Cloud cx={430} cy={108} s={0.6} op={0.36} dur={70} delay={-26} />
        {birds}
        <Plane />
      </svg>
    </div>
  );
}
