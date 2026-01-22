'use client'

import { Check } from 'lucide-react'

// Custom color scheme
const colors = {
    background: '#111111',
    foreground: '#f8f8f8',
    card: '#1a1a1a',
    border: '#2a2a2a',
    accent: 'oklch(79.5% .184 86.047)', // Vibrant yellow/lime
    accentForeground: '#111111',
    muted: '#848484',
}

interface Plan {
    name: string
    price: string
    priceEnd: string
    description: string
    subtitle: string
    featured: boolean
    features: string[]
    delivery: string
    cta: string
}

const plans: Plan[] = [
    {
        name: 'Basic Website',
        price: '₹5,000',
        priceEnd: '₹8,000',
        description: 'Perfect for getting started online',
        subtitle: 'Personal sites, small shops, portfolios',
        featured: false,
        features: [
            '1–3 pages (Home, About, Contact)',
            'Mobile-responsive design',
            'Basic UI design',
            'Contact form',
            'WhatsApp integration',
            'Basic SEO setup',
            '1 revision',
        ],
        delivery: '3–5 days',
        cta: 'Get Started',
    },
    {
        name: 'Standard Business Website',
        price: '₹10,000',
        priceEnd: '₹18,000',
        description: 'Ideal for growing businesses',
        subtitle: 'Small businesses, startups',
        featured: false,
        features: [
            '5–7 pages',
            'Custom design',
            'Mobile + tablet responsive',
            'Contact & inquiry forms',
            'Google Maps integration',
            'SEO-friendly structure',
            'Speed optimization',
            'Social media links',
            '2–3 revisions',
        ],
        delivery: '7–10 days',
        cta: 'Get Started',
    },
    {
        name: 'Premium / Dynamic Website',
        price: '₹25,000',
        priceEnd: '₹45,000',
        description: 'Enterprise-grade solution',
        subtitle: 'Companies, service platforms',
        featured: true,
        features: [
            '8–15 pages',
            'Admin dashboard',
            'Dynamic content (blog, services, gallery)',
            'Login / signup (optional)',
            'Advanced SEO',
            'Performance optimization',
            'Security setup',
            'Unlimited revisions (within scope)',
        ],
        delivery: '2–3 weeks',
        cta: 'Start Premium',
    },
    {
        name: 'E-Commerce Website',
        price: '₹35,000',
        priceEnd: '₹70,000+',
        description: 'Complete online store solution',
        subtitle: 'Online stores',
        featured: false,
        features: [
            'Product management',
            'Cart & checkout',
            'Payment gateway (Razorpay / Cashfree)',
            'Order management',
            'Customer accounts',
            'Mobile-friendly design',
            'Basic training',
            'SEO & speed optimization',
        ],
        delivery: '3–4 weeks',
        cta: 'Get Started',
    },
]

function PricingCard({ plan }: { plan: Plan }) {
    return (
        <div
            className="relative rounded-xl transition-all duration-300 flex flex-col sm:col-span-1 lg:col-span-1"
            style={{
                border: plan.featured ? `2px solid ${colors.accent}` : `1px solid ${colors.border}`,
                backgroundColor: colors.card,
                boxShadow: plan.featured ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none',
            }}
            onMouseEnter={(e) => {
                if (!plan.featured) {
                    e.currentTarget.style.borderColor = colors.accent;
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }
            }}
            onMouseLeave={(e) => {
                if (!plan.featured) {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.boxShadow = 'none';
                }
            }}
        >
            {plan.featured && (
                <div
                    className="sm:col-span-2 lg:col-span-2"
                    style={{
                        position: 'absolute',
                        top: '-16px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        padding: '6px 12px',
                        backgroundColor: colors.accent,
                        color: colors.accentForeground,
                        fontSize: '12px',
                        fontWeight: 'bold',
                        borderRadius: '9999px',
                    }}
                >
                    Most Popular
                </div>
            )}
            <div className="p-6 sm:p-8 flex flex-col h-full">
                {/* Header */}
                <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight" style={{ color: colors.accent }}>
                        {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm mb-4" style={{ color: colors.muted }}>
                        {plan.subtitle}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                        <div className="flex items-baseline gap-1 mb-1 flex-wrap">
                            <span className="text-3xl sm:text-4xl font-bold" style={{ color: colors.foreground }}>
                                {plan.price}
                            </span>
                            <span className="text-xs sm:text-sm" style={{ color: colors.muted }}>
                                to
                            </span>
                            <span className="text-xl sm:text-2xl font-semibold" style={{ color: colors.muted }}>
                                {plan.priceEnd}
                            </span>
                        </div>
                        <p className="text-xs" style={{ color: colors.muted }}>
                            ⏱ Delivery: {plan.delivery}
                        </p>
                    </div>

                    <p className="text-xs sm:text-sm mb-6 leading-relaxed" style={{ color: colors.muted }}>
                        {plan.description}
                    </p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-6 sm:mb-8">
                    <ul className="space-y-2 sm:space-y-3">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3 items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <Check
                                        size={16}
                                        style={{ color: plan.featured ? colors.accent : colors.accent, flexShrink: 0 }}
                                    />
                                </div>
                                <span className="text-xs sm:text-sm leading-relaxed" style={{ color: colors.foreground }}>
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA Button */}
                <button
                    className="w-full py-2.5 sm:py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base active:scale-95"
                    style={{
                        backgroundColor: plan.featured ? colors.accent : colors.card,
                        color: plan.featured ? colors.accentForeground : colors.foreground,
                        border: plan.featured ? 'none' : `1px solid ${colors.accent}`,
                    }}
                    onMouseEnter={(e) => {
                        if (plan.featured) {
                            e.currentTarget.style.opacity = '0.9';
                        } else {
                            e.currentTarget.style.backgroundColor = colors.accent + '10';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (plan.featured) {
                            e.currentTarget.style.opacity = '1';
                        } else {
                            e.currentTarget.style.backgroundColor = colors.card;
                        }
                    }}
                >
                    {plan.cta}
                </button>
            </div>
        </div>
    )
}



export default function Pricing() {
    return (
        <main className="min-h-screen pt-0" style={{ backgroundColor: colors.background, color: colors.foreground }}>

            <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    {/* Hero Section */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div
                            className="mb-3 sm:mb-4 inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border"
                            style={{ backgroundColor: colors.accent + '20', borderColor: colors.accent + '40' }}
                        >
                            <span className="text-xs sm:text-sm font-medium" style={{ color: colors.accent }}>
                                New Pricing Model
                            </span>
                        </div>
                        <h1
                            className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                            style={{ color: colors.accent }}
                        >
                            Website Plans & Pricing
                        </h1>
                        <p
                            className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed"
                            style={{ color: colors.muted }}
                        >
                            Choose the perfect package for your business. From personal portfolios to full e-commerce platforms, we have a solution tailored for you.
                        </p>
                    </div>

                    {/* Pricing Grid */}
                    <div className="
                                    grid 
                                    grid-cols-1
                                    [@media(min-width:576px)]:grid-cols-2
                                    lg:grid-cols-4
                                    gap-4 sm:gap-6 mb-12 sm:mb-16
                                    ">
                        {plans.map((plan, index) => (
                            <PricingCard key={index} plan={plan} />
                        ))}
                    </div>


                    {/* Features Comparison */}
                    <div className="mt-16 sm:mt-20">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 leading-tight" style={{ color: colors.accent }}>
                            Why Choose Our Services?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    title: 'Quick Turnaround',
                                    desc: 'Fast delivery without compromising on quality. Your website ready in days, not months.',
                                    icon: (
                                        <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.accent, strokeWidth: 2 }}>
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: 'Custom Design',
                                    desc: 'Tailored to your brand identity. Every website is unique and built from scratch.',
                                    icon: (
                                        <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.accent, strokeWidth: 2 }}>
                                            <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    )
                                },
                                {
                                    title: 'Full Support',
                                    desc: 'Ongoing support and maintenance. We\'re here to help after launch.',
                                    icon: (
                                        <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.accent, strokeWidth: 2 }}>
                                            <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    )
                                },
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 sm:p-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                    style={{
                                        backgroundColor: colors.card,
                                        border: `2px solid ${colors.border}`,
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = colors.accent;
                                        e.currentTarget.style.boxShadow = `0 0 30px ${colors.accent}40`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = colors.border;
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {/* Gradient background effect */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-50%',
                                            right: '-50%',
                                            width: '200%',
                                            height: '200%',
                                            background: `radial-gradient(circle, ${colors.accent}15 0%, transparent 70%)`,
                                            pointerEvents: 'none',
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300"
                                            style={{
                                                backgroundColor: colors.accent + '25',
                                                border: `1.5px solid ${colors.accent}40`
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                                            }}
                                        >
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold mb-3" style={{ color: colors.foreground }}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm sm:text-base leading-relaxed" style={{ color: colors.muted }}>
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
