"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        children: any;
        name: string;
        link: string;
    }[];
    className?: string;
    onItemClick?: () => void;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > 100);
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed inset-x-0 top-5 z-[9999] w-full", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible }
                    )
                    : child
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "90%" : "100%",
                y: visible ? 20 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full  px-4 py-2 lg:flex bg-black/40 ",
                visible && "bg-black/40 dark:bg-neutral-950/80",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [dropdown, setDropdown] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => {
                setHovered(null);
                setDropdown(null);
            }}
            className={cn(
                "hidden  flex-1 flex-row items-center justify-center space-x-2 text-sm text-white lg:flex",
                className
            )}
            style={{ fontFamily: '"Cinzel", sans-serif' }}
        >
            {items.map((item, idx) => (
                <div
                    key={`link-${idx}`}
                    className="relative"
                    onMouseEnter={() => {
                        setHovered(idx);
                        if (item.children) setDropdown(idx);
                    }}
                >
                    {/* Main Nav Item */}
                    <Link
                        href={item.link}
                        onClick={onItemClick}
                        className="relative px-4 py-2 block"
                    >
                        {hovered === idx && (
                            <motion.div
                                layoutId="hovered"
                                className="absolute inset-0 h-full w-full rounded-full bg-white"
                            />
                        )}

                        <span
                            className={cn(
                                "relative z-20 transition-colors duration-200",
                                hovered === idx ? "text-black" : "text-white"
                            )}
                        >
                            {item.name}
                        </span>
                    </Link>

                    {/* 🔽 DROPDOWN */}
                    {item.children && dropdown === idx && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-2xl bg-white/90 backdrop-blur-lg shadow-xl border border-white/20 p-2"
                        >
                            {item.children.map((child: any) => (
                                <Link
                                    key={child.name}
                                    href={child.link}
                                    className="block px-4 py-2 rounded-lg text-black hover:bg-gray-100 transition"
                                >
                                    {child.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </div>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => (
    <motion.div
        animate={{
            backdropFilter: visible ? "blur(10px)" : "none",
            boxShadow: visible
                ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                : "none",
            width: visible ? "90%" : "100%",
            paddingRight: visible ? "12px" : "6px",
            paddingLeft: visible ? "12px" : "6px",
            borderRadius: visible ? "4px" : "2rem",
            y: visible ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className={cn(
            "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-black/40 px-0 py-2 lg:hidden",
            visible && "bg-black/40 dark:bg-black/40",
            className
        )}
    >
        {children}
    </motion.div>
);

export const MobileNavHeader = ({
    children,
    className,
}: MobileNavHeaderProps) => (
    <div className={cn("flex w-full flex-row items-center justify-between", className)}>
        {children}
    </div>
);

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose,
}: MobileNavMenuProps) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className={cn(
                    "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[...] dark:bg-neutral-950",
                    className
                )}
            >
                {children}
            </motion.div>
        )}
    </AnimatePresence>
);

export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) =>
    isOpen ? (
        <IconX className="text-white dark:text-white" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-white dark:text-white" onClick={onClick} />
    );

export const NavbarLogo = () => {
    return (

        <Link
            href="/"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-lg font-normal text-black"
        >
            {/* Logo */}
            <Image
                src="./img/loges.png"
                alt="Digital Product Logo"
                width={40}
                height={40}
                className="h-auto w-12 mr-2"
            />

            <span className="font-medium text-white dark:text-white">
                <span style={{ fontFamily: "Quicksand, sans-serif" }}>
                    Digital Product
                </span>
            </span>
        </Link>

    );
};

export const NavbarButton = ({
    href = "/",
    children,
    className,
    variant = "primary",
    ...props
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "dark" | "gradient";
}) => {
    const baseStyles =
        "px-4 py-2 rounded-md bg-white button text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

    const variantStyles = {
        primary: "shadow-[...]",
        secondary: "bg-transparent shadow-none dark:text-white",
        dark: "bg-black text-white shadow-[...]",
        gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[...]",
    };

    return (
        <Link
            href={href}
            className={cn(baseStyles, variantStyles[variant], className)}
            style={{ fontFamily: "Cinzel, sans-serif" }}
            {...props}
        >
            {children}
        </Link>
    );
};
