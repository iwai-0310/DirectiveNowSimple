"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const mod = (n, m) => ((n % m) + m) % m;

export default function Cardss() {
const cards = useMemo(
  () => [
    {
      id: 1,
      tag: "Paid Media",
      title: "Advertising are designed to generate quality leads, not just clicks",
      subtitle: [
        "Google Ads account setup or restructure",
        "Search Ads campaign management",
        "Keyword & competitor research ",
        "Conversion tracking (calls & forms)",
        "GA4 & Google Tag Manager setup",
        "Weekly optimization & monitoring",
        "Monthly performance report",
      ],
    },
    {
      id: 2,
      tag: "SEO",
      title: "Data-backed SEO strategies tailored to your business.",
      subtitle: [
        "Search + Performance Max campaigns",
        "Advanced conversion tracking setup",
        "Call tracking integration",
        "Landing page CRO recommendations",
        "Search term mining & intent optimization",
        "Bi-weekly optimization cycles",
        "Monthly strategy & performance call",
      ],
    },
    {
      id: 3,
      tag: "Website Optimization",
      title: "Turn your website into a conversion machine",
      subtitle: [
        "Full Google Ads ecosystem (Search, PMax, YouTube where applicable)",
        "Enhanced & offline conversion tracking",
        "Conversion-focused landing page guidance",
        "Custom Looker Studio dashboard",
        "Weekly optimisation & strategy reviews",
        "Priority support & faster testing cycles",
      ],
    },
  ],
  []
);


  // index of front card
  const [active, setActive] = useState(0);

  // swipe/drag
  const [dragX, setDragX] = useState(0);
  const startXRef = useRef(0);
  const draggingRef = useRef(false);

  // transition state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0); // -1 left, +1 right
  const [progress, setProgress] = useState(0); // 0 -> 1 during transition
  const rafRef = useRef(0);

  const swipeThreshold = 70; // px
  const durationMs = 260; // smoother than 180

  const frontIdx = active;
  const midIdx = mod(active + 1, cards.length);
  const backIdx = mod(active + 2, cards.length);

  const front = cards[frontIdx];
  const mid = cards[midIdx];
  const back = cards[backIdx];

  const stopRAF = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
  };

  const animateTo = (dir) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection(dir);
    setProgress(0);

    const start = performance.now();

    const tick = (t) => {
      const p = Math.min(1, (t - start) / durationMs);
      // easeInOutCubic
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

      setProgress(eased);

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // finalize order: next card becomes front (same for left/right)
        // (You said left-right both should cycle forward, so direction just affects visual exit)
        setActive((i) => mod(i + 1, cards.length));
        setDragX(0);
        setIsTransitioning(false);
        setDirection(0);
        setProgress(0);
        stopRAF();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => stopRAF();
  }, []);

  const onStart = (clientX) => {
    if (isTransitioning) return;
    draggingRef.current = true;
    startXRef.current = clientX;
    setDragX(0);
  };

  const onMove = (clientX) => {
    if (!draggingRef.current || isTransitioning) return;
    const dx = clientX - startXRef.current;
    // limit
    setDragX(Math.max(-200, Math.min(200, dx)));
  };

  const onEnd = () => {
    if (!draggingRef.current || isTransitioning) return;
    draggingRef.current = false;

    if (Math.abs(dragX) >= swipeThreshold) {
      const dir = dragX > 0 ? 1 : -1;
      animateTo(dir);
    } else {
      setDragX(0);
    }
  };

  /**
   * Positions for deck
   * We interpolate between:
   *  - front -> back
   *  - mid -> front
   *  - back -> mid
   */
  const layout = {
    front: { x: 0, y: 18, r: 0, s: 1, z: 3, o: 1 },
    mid: { x: 54, y: 10, r: -6, s: 0.99, z: 2, o: 0.92 },
    back: { x: 118, y: 18, r: 7, s: 0.985, z: 1, o: 0.85 },
  };

  const lerp = (a, b, p) => a + (b - a) * p;

  const interp = (from, to, p) => ({
    x: lerp(from.x, to.x, p),
    y: lerp(from.y, to.y, p),
    r: lerp(from.r, to.r, p),
    s: lerp(from.s, to.s, p),
    o: lerp(from.o, to.o, p),
    z: p < 0.5 ? from.z : to.z,
  });

  // during drag (not transitioning), move only the front slightly
  const dragInfluence = isTransitioning ? 0 : dragX;

  // during transition, progress drives everything
  const p = isTransitioning ? progress : 0;

  // front card leaves to side while also moving to back
  const frontToBack = interp(layout.front, layout.back, p);
  const leaveX = isTransitioning ? direction * lerp(0, 140, p) : 0;

  const frontStyle = {
    transform: `translate(${frontToBack.x + leaveX + dragInfluence}px, ${frontToBack.y}px)
                rotate(${frontToBack.r + (isTransitioning ? direction * lerp(0, 10, p) : dragX * 0.04)}deg)
                scale(${frontToBack.s})`,
    opacity: frontToBack.o,
    zIndex: 3,
    transition: isTransitioning ? "none" : "transform 160ms ease",
  };

  const midToFront = interp(layout.mid, layout.front, p);
  const midStyle = {
    transform: `translate(${midToFront.x}px, ${midToFront.y}px)
                rotate(${midToFront.r}deg)
                scale(${midToFront.s})`,
    opacity: midToFront.o,
    zIndex: 2,
  };

  const backToMid = interp(layout.back, layout.mid, p);
  const backStyle = {
    transform: `translate(${backToMid.x}px, ${backToMid.y}px)
                rotate(${backToMid.r}deg)
                scale(${backToMid.s})`,
    opacity: backToMid.o,
    zIndex: 1,
  };

  return (
    <section className="wrap">
      <div className="deck" aria-label="Swipe deck">
        {/* Back */}
        <div className="card back" style={backStyle} aria-hidden="true">
          <CardFace {...back} />
        </div>

        {/* Mid */}
        <div className="card mid" style={midStyle} aria-hidden="true">
          <CardFace {...mid} />
        </div>

        {/* Front (swipeable) */}
        <div
          className="card front"
          style={frontStyle}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture?.(e.pointerId);
            onStart(e.clientX);
          }}
          onPointerMove={(e) => onMove(e.clientX)}
          onPointerUp={onEnd}
          onPointerCancel={onEnd}
        >
          <CardFace {...front} />
          <div className="swipeHint">{isTransitioning ? "…" : "⇆"}</div>
        </div>
      </div>

      <style jsx>{`
        .wrap {
          padding: 24px;
        }

        .deck {
          position: relative;
    width: 460px;
    height: 420px; /* increase so longer cards fit */
    perspective: 1000px;
    user-select: none;
    touch-action: pan-y;
        }

        .card {
           position: absolute;
    top: 0;
    left: 0;
    width: 330px;

    height: auto;        /* ✅ allow content to expand */
    min-height: 220px;   /* ✅ keep base height */
    overflow: visible;   /* ✅ don’t clip the list */

    border-radius: 18px;
    padding: 18px 18px 16px;

    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.06),
        rgba(255, 255, 255, 0.02)
      ),
      #0f0f12;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.92);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
    transform-style: preserve-3d;
    will-change: transform;
        }

        .front {
          cursor: grab;
        }
        .front:active {
          cursor: grabbing;
        }

        .back,
        .mid {
          pointer-events: none;
          filter: brightness(0.96);
        }

        .swipeHint {
          position: absolute;
          right: 12px;
          bottom: 10px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.55);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 6px 10px;
          border-radius: 999px;
          pointer-events: none;
        }

        .top {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 10px;
        }

        .tag {
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
        }

        .title {
          margin: 0;
          font-size: 18px;
          letter-spacing: -0.02em;
        }

        .subtitle {
          margin: 8px 0 0;
          font-size: 13px;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.72);
          max-width: 30ch;
        }

        .footer {
          margin-top: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .btn {
          appearance: none;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.9);
          padding: 8px 12px;
          border-radius: 12px;
        }

        .hint {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.55);
        }

        @media (max-width: 520px) {
          .deck {
            width: 380px;
          }
          .card {
            width: 300px;
          }
        }
      `}</style>
    </section>
  );
}

function CardFace({ title, subtitle, tag }) {
  return (
    <>
      <div className="top">
        <span className="tag">{tag}</span>
      </div>

      <h3 className="title">{title}</h3>

      {/* LIST subtitle */}
      <ul className="subtitleList">
        {Array.isArray(subtitle) ? (
          subtitle.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <li>{subtitle}</li> // fallback if you accidentally pass a string
        )}
      </ul>

      <div className="footer">
        <button className="btn">know more</button>
        <span className="hint">...</span>
      </div>

      <style jsx>{`
        .subtitleList {
          margin: 10px 0 0;
          padding-left: 18px;
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.72);
        }

        .subtitleList li {
          margin: 6px 0;
        }
      `}</style>
    </>
  );
}

