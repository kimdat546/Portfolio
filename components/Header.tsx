import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Bulb from "./Bulb";

type Props = {};

const Header = (props: Props) => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <header className="pointer-events-none relative z-50 flex flex-col">
            <div className="top-0 z-10 h-16 pt-6 header__position">
                <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full header__inner">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="relative flex gap-4">
                                    <div className="flex flex-1">
                                        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                                            <Link
                                                className="pointer-events-auto"
                                                href="/"
                                            >
                                                <Image
                                                    alt=""
                                                    src="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                                    width="512"
                                                    height="512"
                                                    className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9 text-transparent"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 justify-end md:justify-center">
                                        <Popover className="pointer-events-auto md:hidden">
                                            {({ open, close }) => (
                                                <>
                                                    <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                                                        Menu
                                                    </Popover.Button>
                                                    <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100" />
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
                                                            <div className="flex flex-row-reverse items-center justify-between">
                                                                <Popover.Button
                                                                    aria-label="Close menu"
                                                                    className="-m-1 p-1"
                                                                    onClick={
                                                                        close
                                                                    }
                                                                >
                                                                    <svg
                                                                        viewBox="0 0 24 24"
                                                                        aria-hidden="true"
                                                                        className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                                                                    >
                                                                        <path
                                                                            d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        ></path>
                                                                    </svg>
                                                                </Popover.Button>
                                                                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                                                    Navigation
                                                                </h2>
                                                            </div>
                                                            <nav className="mt-6">
                                                                <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                                                    <li>
                                                                        <Link
                                                                            className="block py-2"
                                                                            href="/about"
                                                                        >
                                                                            About
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            className="block py-2"
                                                                            href="/articles"
                                                                        >
                                                                            Articles
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            className="block py-2"
                                                                            href="/projects"
                                                                        >
                                                                            Projects
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            className="block py-2"
                                                                            href="/speaking"
                                                                        >
                                                                            Speaking
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            className="block py-2"
                                                                            href="/uses"
                                                                        >
                                                                            Uses
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                        <nav className="pointer-events-auto hidden md:block">
                                            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                                                <li>
                                                    <Link
                                                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                                        href="/about"
                                                    >
                                                        About
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                                        href="/articles"
                                                    >
                                                        Articles
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                                        href="/projects"
                                                    >
                                                        Projects
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                                        href="/speaking"
                                                    >
                                                        Speaking
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                                        href="/uses"
                                                    >
                                                        Uses
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="flex justify-end md:flex-1">
                                    <Bulb className="pointer-events-auto h-[100px] absolute top-[100%] translate-y-[-50%]" theme={theme} toggleTheme={toggleTheme} />
                                        {/* <div className="pointer-events-auto">
                                            <button
                                                type="button"
                                                aria-label="Toggle dark mode"
                                                className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 text-zinc-800 dark:text-zinc-200 hover:text-[#4FD1C5] dark:hover:text-[#4FD1C5]"
                                                onClick={toggleTheme}
                                            >
                                                switch
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
