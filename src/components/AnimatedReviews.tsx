'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { useMotionValue, animate } from "framer-motion"

// ─── Types ────────────────────────────────────────────────────────────────────
interface Review {
  id: number
  fullName: string
  businessName: string
  city: string
  content: string
  before?: string
  solution?: string
  result: string
  rating: number
  website?: string
  image?: string
  industry: string
  metric: string
  metricLabel: string
  tag: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const reviews: Review[] = [
  {
    id: 1,
    fullName: "Saif",
    businessName: "CrystalKnot Films",
    city: "Bangalore",
    industry: "Wedding Films",
    tag: "Film & Photography",
    website: "https://crystalknotfilms.com/",
    content: "The team transformed our online presence into something that truly matches the quality of our films. The improved visibility and structure brought us steady, serious client leads we hadn't seen before.",
    result: "Booked 4 wedding projects within the first month of launching the new website.",
    metric: "4×",
    metricLabel: "Bookings in month one",
    rating: 5,
    image: "/img/boy.jpg",
  },
  {
    id: 2,
    fullName: "Vipin Mohan",
    businessName: "BuilDwellz",
    city: "Varkala",
    industry: "Architecture",
    tag: "Architecture & Design",
    website: "https://www.buildwellz.in/",
    content: "The team understood our brand and translated it into a clean, high-end digital presence. We started attracting more serious residential clients shortly after launch.",
    result: "Increased direct client inquiries by 2.5× compared to before the website launch.",
    metric: "2.5×",
    metricLabel: "Inquiry growth",
    rating: 4.5,
    image: "/img/boy.jpg",
  },
  {
    id: 3,
    fullName: "Abhishek",
    businessName: "Squeeze Berriez",
    city: "Thrissur",
    industry: "F&B",
    tag: "Food & Beverage",
    website: "https://www.squeezeberriez.in/",
    content: "The new website perfectly captures our Kerala roots and premium beverage quality. It helped us build stronger brand trust and attract new retail partnership inquiries.",
    result: "Received 4 new retail partnership discussions in the first month.",
    metric: "4",
    metricLabel: "Retail partnerships",
    rating: 4.5,
    image: "/img/boy.jpg",
  },
  {
    id: 4,
    fullName: "Aromal VG",
    businessName: "Kerala Sellers",
    city: "Trivandrum",
    industry: "Marketplace",
    tag: "E-Commerce Platform",
    website: "https://www.keralasellers.in/",
    content: "Kerala Sellers was built to empower local businesses with a powerful yet simple digital marketplace. From listings to payments and automation — everything was designed for real-world execution.",
    before: "Local businesses relied on Instagram and WhatsApp with no central platform.",
    solution: "Full-featured marketplace with listings, orders, and payments via a simple dashboard.",
    result: "Successfully launched and onboarded sellers from multiple districts in the first phase.",
    metric: "6+",
    metricLabel: "Districts onboarded",
    rating: 5,
    image: "/img/boy.jpg",
  },
  {
    id: 5,
    fullName: "Anvar Riyas",
    businessName: "Lemon Caters",
    city: "Kochi",
    industry: "Catering",
    tag: "Hospitality",
    website: "https://lemoncaters.in",
    content: "Digital Product rebuilt our catering website and optimized our Google presence. We went from zero digital footprint to a steady stream of real catering inquiries within just ten days.",
    before: "No website — depended entirely on WhatsApp inquiries.",
    solution: "Fast catering website with menu showcase and WhatsApp booking integration.",
    result: "Received 11 catering inquiries in the first 10 days.",
    metric: "11",
    metricLabel: "Leads in 10 days",
    rating: 4.5,
    image: "/img/boy.jpg",
  },
]





// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const full = i < Math.floor(rating)
        const half = !full && i < rating
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id={`sg${i}${size}`} x1="0" x2="1">
                <stop offset="50%" stopColor="#C4882A" />
                <stop offset="50%" stopColor="#E8D9B8" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.1 6.6L12 17.1l-5.8 3.1 1.1-6.6L2.5 9l6.6-.9z"
              fill={full ? '#C4882A' : half ? `url(#sg${i}${size})` : '#E8D9B8'}
            />
          </svg>
        )
      })}
    </div>
  )
}

// ─── Single expandable card ───────────────────────────────────────────────────
function TestimonialCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = useState(false)

  // Stagger initial appear
  const appearDelay = index * 0.07

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: appearDelay, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: '100%' }}
    >
      <motion.div
        layout
        onClick={() => setExpanded(v => !v)}
        style={{
          background: '#FFFFFF',
          borderRadius: '4px',
          cursor: 'pointer',
          boxShadow: expanded
            ? '0 20px 60px rgba(28,22,14,0.13), 0 4px 16px rgba(28,22,14,0.07), inset 0 0 0 1.5px rgba(196,136,42,0.28)'
            : '0 2px 16px rgba(28,22,14,0.07), 0 1px 3px rgba(28,22,14,0.04), inset 0 0 0 1px rgba(28,22,14,0.07)',
          transition: 'box-shadow 0.35s ease',
          overflow: 'hidden',
          position: 'relative',
          userSelect: 'none',
        }}
        whileHover={!expanded ? {
          boxShadow: '0 8px 32px rgba(28,22,14,0.1), 0 2px 8px rgba(28,22,14,0.06), inset 0 0 0 1px rgba(196,136,42,0.18)',
          y: -2,
        } : {}}
      >
        {/* Gold top bar — visible when expanded */}
        <motion.div
          animate={{ scaleX: expanded ? 1 : 0, opacity: expanded ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '2.5px',
            background: 'linear-gradient(90deg, #C4882A 0%, #E8C46A 50%, #C4882A 100%)',
            transformOrigin: 'left',
          }}
        />

        {/* ══ COLLAPSED CONTENT (always visible) ══ */}
        <div
          className="et-expanded-row"
          style={{
            padding: '0 clamp(1.2rem, 2.5vw, 2rem) clamp(1.4rem, 2.5vw, 2rem)',
            paddingTop: '1.4rem',
          }}
        >
          {/* Avatar */}
          <div style={{
            width: '46px', height: '46px',
            borderRadius: '50%',
            flexShrink: 0,
            background: 'linear-gradient(135deg, #F0E6D0, #DFC898)',
            border: '1.5px solid rgba(196,136,42,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(196,136,42,0.12)',
          }}>
            {review.image ? (
              <img src={review.image} alt={review.fullName}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span style={{
                fontFamily: "'Literata', serif",
                fontSize: '1.1rem', fontWeight: 700,
                color: '#A8720E',
              }}>{review.fullName[0]}</span>
            )}
          </div>

          {/* Middle: name + business + quote */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Top row: business name + rating */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem', flexWrap: 'wrap',
              marginBottom: '0.22rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.88rem', fontWeight: 700,
                  letterSpacing: '0.01em',
                  color: '#1C160E',
                }}>{review.businessName}</span>
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.6rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#B5A898',
                }}>· {review.city}</span>
              </div>
              <Stars rating={review.rating} size={11} />
            </div>

            {/* Tag chip */}
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'rgba(196,136,42,0.07)',
              border: '1px solid rgba(196,136,42,0.18)',
              borderRadius: '2px',
              padding: '0.14rem 0.55rem',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.5rem', fontWeight: 600,
              letterSpacing: '0.17em', textTransform: 'uppercase',
              color: '#A8720E',
              marginBottom: '0.65rem',
            }}>{review.tag}</span>

            {/* Quote — always visible, truncated when collapsed */}
            <p style={{
              fontFamily: "'Literata', serif",
              fontSize: '0.88rem', fontStyle: 'italic', fontWeight: 400,
              lineHeight: 1.72,
              color: '#3C3028',
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: expanded ? undefined : 2,
              WebkitBoxOrient: 'vertical',
              overflow: expanded ? 'visible' : 'hidden',
            }}>
              "{review.content}"
            </p>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ flexShrink: 0, marginTop: '2px', color: '#C4882A', opacity: 0.7 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>

        {/* ══ EXPANDED CONTENT ══ */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                borderTop: '1px solid rgba(196,136,42,0.1)',
                margin: '0 clamp(1.2rem, 2.5vw, 2rem)',
              }} />

              <div style={{
                padding: '0 clamp(1.2rem, 2.5vw, 2rem) clamp(1.4rem, 2.5vw, 2rem)',
                paddingTop: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}>

                {/* ── Left: all detail content ── */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

                  {/* Before / Solution */}
                  {(review.before || review.solution) && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: review.before && review.solution ? '1fr 1fr' : '1fr',
                        gap: '0.75rem',
                      }}
                    >
                      {review.before && (
                        <div style={{
                          background: '#FAF8F4',
                          border: '1px solid rgba(28,22,14,0.07)',
                          borderRadius: '3px',
                          padding: '0.85rem 1rem',
                        }}>
                          <p style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '0.5rem', fontWeight: 700,
                            letterSpacing: '0.2em', textTransform: 'uppercase',
                            color: '#B5A898', marginBottom: '0.4rem',
                          }}>Before</p>
                          <p style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '0.73rem', lineHeight: 1.65,
                            color: '#7A6E63',
                          }}>{review.before}</p>
                        </div>
                      )}
                      {review.solution && (
                        <div style={{
                          background: '#FAF8F4',
                          border: '1px solid rgba(28,22,14,0.07)',
                          borderRadius: '3px',
                          padding: '0.85rem 1rem',
                        }}>
                          <p style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '0.5rem', fontWeight: 700,
                            letterSpacing: '0.2em', textTransform: 'uppercase',
                            color: '#B5A898', marginBottom: '0.4rem',
                          }}>Solution</p>
                          <p style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '0.73rem', lineHeight: 1.65,
                            color: '#7A6E63',
                          }}>{review.solution}</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Result callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.7rem',
                      background: 'linear-gradient(90deg, rgba(196,136,42,0.07), rgba(196,136,42,0.02))',
                      border: '1px solid rgba(196,136,42,0.15)',
                      borderLeft: '3px solid #C4882A',
                      padding: '0.75rem 1rem',
                      borderRadius: '0 3px 3px 0',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="22 7 13 16 8 11 1 18" stroke="#C4882A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="15 7 22 7 22 14" stroke="#C4882A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '0.75rem', fontWeight: 500,
                      lineHeight: 1.6, color: '#5C4A1E',
                    }}>{review.result}</p>
                  </motion.div>

                  {/* Author + website row */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', flexWrap: 'wrap',
                      gap: '0.6rem',
                      paddingTop: '0.6rem',
                      borderTop: '1px solid rgba(28,22,14,0.06)',
                    }}
                  >
                    <div>
                      <p style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.78rem', fontWeight: 600,
                        color: '#1C160E', letterSpacing: '0.01em',
                        marginBottom: '0.12rem',
                      }}>{review.fullName}</p>
                      <p style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.62rem', fontWeight: 400,
                        color: '#A0978E', letterSpacing: '0.04em',
                      }}>{review.businessName} · {review.industry}</p>
                    </div>
                    {review.website && (
                      <a
                        href={review.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: '0.62rem', fontWeight: 600,
                          letterSpacing: '0.14em', textTransform: 'uppercase',
                          color: '#C4882A', textDecoration: 'none',
                          border: '1px solid rgba(196,136,42,0.25)',
                          padding: '0.4rem 0.85rem',
                          borderRadius: '2px',
                          background: 'rgba(196,136,42,0.04)',
                          transition: 'background 0.2s',
                        }}
                      >
                        Visit Site
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* ── Right: metric box ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    flexShrink: 0,
                    width: '100%',
                    maxWidth: '140px',
                    alignSelf: 'flex-start',
                    background: 'linear-gradient(160deg, #FAF7F2, #F0E8D6)',
                    border: '1px solid rgba(196,136,42,0.18)',
                    borderRadius: '3px',
                    padding: '1.4rem 0.8rem',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '0.35rem', position: 'relative', overflow: 'hidden',
                  }}
                >
                  {/* Corner marks */}
                  {[
                    { top: '7px', left: '7px', borderTop: '1.5px solid rgba(196,136,42,0.35)', borderLeft: '1.5px solid rgba(196,136,42,0.35)' },
                    { top: '7px', right: '7px', borderTop: '1.5px solid rgba(196,136,42,0.35)', borderRight: '1.5px solid rgba(196,136,42,0.35)' },
                    { bottom: '7px', left: '7px', borderBottom: '1.5px solid rgba(196,136,42,0.35)', borderLeft: '1.5px solid rgba(196,136,42,0.35)' },
                    { bottom: '7px', right: '7px', borderBottom: '1.5px solid rgba(196,136,42,0.35)', borderRight: '1.5px solid rgba(196,136,42,0.35)' },
                  ].map((s, i) => (
                    <div key={i} style={{ position: 'absolute', width: '9px', height: '9px', ...s }} />
                  ))}

                  {/* Ghost index */}
                  <span style={{
                    position: 'absolute', bottom: '-8px', right: '2px',
                    fontFamily: "'Literata', serif",
                    fontSize: '4.5rem', fontWeight: 900, fontStyle: 'italic',
                    color: 'rgba(196,136,42,0.07)',
                    lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span style={{
                    fontFamily: "'Literata', serif",
                    fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                    fontWeight: 900, fontStyle: 'italic',
                    color: '#C4882A', lineHeight: 1,
                    letterSpacing: '-0.02em',
                    position: 'relative', zIndex: 1,
                    textAlign: 'center',
                  }}>{review.metric}</span>

                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.5rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: '#A07830',
                    textAlign: 'center', lineHeight: 1.5,
                    position: 'relative', zIndex: 1,
                    maxWidth: '85px',
                  }}>{review.metricLabel}</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function ExpandableTestimonials() {

  const [paused, setPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const controls = useRef<any>(null)
  const positionRef = useRef(0)

  const handleMouseEnter = () => {
    controls.current?.pause()
  }

  const handleMouseLeave = () => {
    controls.current?.play()
  }

  useEffect(() => {
    controls.current = animate(x, [-0, -1000], {
      duration: 40, // ⬅️ slower movement
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      onUpdate: (latest) => {
        positionRef.current = latest
      },
    })

    return () => controls.current?.stop()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;0,7..72,700;1,7..72,400;1,7..72,600;1,7..72,700&family=Outfit:wght@300;400;500;600;700&display=swap');

        .et-root *, .et-root *::before, .et-root *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }
        .et-root {
          position: relative;
          overflow: hidden;
          padding: 5rem 0 6rem;
          font-family: 'Outfit', sans-serif;
        }
        /* Dot texture */
        .et-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(168,114,14,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
          pointer-events: none;
        }

        .et-inner {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative; z-index: 1;
        }

        /* Heading */
        .et-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
                  .et-card {
          min-width: 85vw;
          max-width: 85vw;
        }

        @media (min-width: 768px) {
          .et-card {
            min-width: calc(40vw - 1rem);
            max-width: calc(40vw - 1rem);
          }
        }
        .et-eyebrow {
          display: inline-flex; align-items: center; gap: 0.7rem;
          margin-bottom: 1.1rem;
        }
        .et-eyebrow-dash {
          width: 1.8rem; height: 1.5px;
          background: linear-gradient(to right, #C4882A, transparent);
          display: block;
        }
        .et-eyebrow-dash-r {
          width: 1.8rem; height: 1.5px;
          background: linear-gradient(to left, #C4882A, transparent);
          display: block;
        }
        .et-eyebrow-text {
          font-size: 0.57rem; font-weight: 700;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #C4882A;
        }
          .et-expanded-row {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .et-expanded-row {
    flex-direction: row;
    align-items: flex-start;
  }
}
/* Base = clean black */
.et-title {
  font-family: 'Literata', serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: #111111;
}

/* Blue gradient for "Results" */
.et-result {
  background: linear-gradient(120deg, #2563EB, #60A5FA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Slightly deeper blue for "Businesses" */
.et-business {
  background: linear-gradient(120deg, #1D4ED8, #3B82F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Keep "Real" simple + elegant */
.et-title em {
  font-style: italic;
  color: #111111;
}

        .et-subtitle {
          font-size: 0.8rem; font-weight: 400;
          line-height: 1.85; color: #8A7E74;
          max-width: 440px; margin: 0 auto;
        }

        /* Cards list */
        .et-list {
          display: flex; flex-direction: column;
          gap: 0.75rem;
        }

        /* Bottom micro stats */
        .et-footer {
          margin-top: 3rem;
          display: flex; justify-content: center;
          gap: clamp(1.5rem, 4vw, 3.5rem);
          padding-top: 2.5rem;
          border-top: 1px solid rgba(196,136,42,0.15);
        }
        .et-footer-item {
          display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
          cursor: default;
        }
        .et-footer-num {
          font-family: 'Literata', serif;
          font-size: 1.8rem; font-weight: 700; font-style: italic;
          color: #1C160E; line-height: 1; letter-spacing: -0.03em;
        }
        .et-footer-lbl {
          font-size: 0.55rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #B5A898;
        }
        .et-footer-sep {
          width: 1px; background: rgba(196,136,42,0.18);
          align-self: stretch;
        }

        /* Click hint */
        .et-hint {
          text-align: center;
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(196,136,42,0.55);
          margin-bottom: 1.5rem;
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
        }
        .et-hint-line {
          width: 2rem; height: 1px;
          background: rgba(196,136,42,0.22);
        }
      `}</style>

      <section className="et-root">
        <div className="et-inner">

          {/* ── Header ────────────────────────────────────────────────────── */}
          <motion.div
            className="et-header"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >

            <h2 className="et-title">
              Real <span className="et-result">Results</span> from<br />
              <em>Real</em> <span className="et-business">Businesses</span>
            </h2>

          </motion.div>

          {/* ── Click hint ────────────────────────────────────────────────── */}
          <motion.div
            className="et-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="et-hint-line" />
            Click any card to read the full story
            <span className="et-hint-line" />
          </motion.div>

          {/* ── Cards ─────────────────────────────────────────────────────── */}
          <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setPaused(prev => !prev)}
            style={{
              overflow: 'hidden',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <motion.div  // 👈 inner moving track
              animate={
                paused || isHovered
                  ? { x: undefined }
                  : { x: ['0%', '-50%'] }
              }
              transition={{
                repeat: Infinity,
                duration: 50,
                ease: 'linear',
              }}
              style={{
                x,
                display: 'flex',
                gap: '1rem',
                width: 'max-content',
              }}
            >
              {/* Duplicate for seamless loop */}
              {[...reviews, ...reviews].map((review, i) => (
                <div className="et-card">
                  <TestimonialCard review={review} index={i} />
                </div>
              ))}
            </motion.div>
          </motion.div>


        </div>
      </section>
    </>
  )
}