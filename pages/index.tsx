import {
    AirbnbIcon,
    FacebookIcon, PlanetariaIcon, StarbucksIcon
} from "@/components";
import CV from "@/public/NguyenKimDatResume.pdf";
import { saveAs } from "file-saver";
import Image from "next/image";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import {
    FaArrowRight,
    FaDownload, FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const socialMedia = [
    {
        name: "Twitter",
        icon: FaTwitter,
        link: "https://twitter.com",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com",
    },
    {
        name: "Github",
        icon: FaGithub,
        link: "https://github.com",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "https://linkedin.com",
    },
];

const sliderImages = [
    {
        name: "Image 1",
        src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        name: "Image 2",
        src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        name: "Image 3",
        src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        name: "Image 4",
        src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        name: "Image 5",
        src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        name: "Image 6",
        src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
];

const listArticles = [
    {
        title: "Crafting a design system for a multiplanetary future",
        dateTime: "September 5, 2022",
        description:
            "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
        link: "/articles/crafting-a-design-system-for-a-multiplanetary-future",
    },
];

const listWorks = [
    {
        company: "Planetaria",
        role: "Developer",
        image: PlanetariaIcon,
        time: ["2021", "Present"],
    },
    {
        company: "Airbnb",
        role: "Developer",
        image: AirbnbIcon,
        time: ["2020", "2021"],
    },
    {
        company: "Facebook",
        role: "Developer",
        image: FacebookIcon,
        time: ["2012", "2020"],
    },
    {
        company: "Starbucks",
        role: "Developer",
        image: StarbucksIcon,
        time: ["2008", "2011"],
    },
];

const Home = () => {
    const handleDownloadCV = () => {
        const file = new Blob([CV], { type: "application/pdf" });
        saveAs(file, "NguyenKimDatResume.pdf");
    };
    return (
        <>
            <div className="sm:px-8 mt-9">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="max-w-2xl">
                                <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                                    Software designer, founder, and amateur
                                    astronaut.
                                </h1>
                                <p className="mt-3 leading-7 sm:mt-5 sm:leading-8 text-sm text-zinc-600 dark:text-zinc-400 tracking-wide">
                                    I’m Spencer, a software designer and
                                    entrepreneur based in New York City. I’m the
                                    founder and CEO of Planetaria, where we
                                    develop technologies that empower regular
                                    people to explore space on their own terms.
                                </p>
                                <div className="mt-6 flex gap-6">
                                    {socialMedia.map((social) => (
                                        <Link
                                            key={social.name}
                                            className="group -m-1 p-1"
                                            aria-label={`Follow on ${social.name}`}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <social.icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 sm:mt-20">
                <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                    {sliderImages.map((image, index) => (
                        <div
                            key={image.name}
                            className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${
                                index % 2 === 0 ? "-rotate-2" : "rotate-2"
                            }`}
                        >
                            <Image
                                src={image.src}
                                alt={image.name}
                                width="3744"
                                height="5616"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover text-transparent"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="sm:px-8 mt-24 md:mt-28">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                                <div className="flex flex-col gap-16">
                                    {listArticles.map((article) => (
                                        <article
                                            key={article.title}
                                            className="group relative flex flex-col items-start"
                                        >
                                            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                                <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                                                <Link href={article.link}>
                                                    <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                                    <span className="relative z-10">
                                                        {article.title}
                                                    </span>
                                                </Link>
                                            </h2>
                                            <time
                                                className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                                                dateTime="2022-09-05"
                                            >
                                                <span
                                                    className="absolute inset-y-0 left-0 flex items-center"
                                                    aria-hidden="true"
                                                >
                                                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                                </span>
                                                {article.dateTime}
                                            </time>
                                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                {article.description}
                                            </p>
                                            <div
                                                aria-hidden="true"
                                                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                                            >
                                                Read article
                                                <FaArrowRight className="ml-1 h-4 w-4 stroke-current" />
                                            </div>
                                        </article>
                                    ))}
                                </div>
                                <div className="space-y-10 lg:pl-16 xl:pl-24">
                                    <form className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                                        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                            <BsEnvelope className="h-6 w-6 flex-none" />
                                            <span className="ml-3">
                                                Stay up to date
                                            </span>
                                        </h2>
                                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                            Get notified when I publish
                                            something new, and unsubscribe at
                                            any time.
                                        </p>
                                        <div className="mt-6 flex">
                                            <input
                                                type="email"
                                                placeholder="Email address"
                                                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                                            />
                                            <button
                                                type="submit"
                                                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    alert("Not implemented");
                                                }}
                                            >
                                                Join
                                            </button>
                                        </div>
                                    </form>
                                    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                                        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                            <MdWorkOutline className="h-6 w-6 flex-none" />
                                            <span className="ml-3">Work</span>
                                        </h2>
                                        <ol className="mt-6 space-y-4">
                                            {listWorks.map((work) => (
                                                <li
                                                    className="flex gap-4"
                                                    key={work.company}
                                                >
                                                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                                        <Image
                                                            alt=""
                                                            src={work.image}
                                                        />
                                                    </div>
                                                    <dl className="flex flex-auto flex-wrap gap-x-2">
                                                        <dt className="sr-only">
                                                            Company
                                                        </dt>
                                                        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                                            {work.company}
                                                        </dd>
                                                        <dt className="sr-only">
                                                            Role
                                                        </dt>
                                                        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                                            {work.role}
                                                        </dd>
                                                        <dt className="sr-only">
                                                            Date
                                                        </dt>
                                                        <dd
                                                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                                            aria-label="2019 until Present"
                                                        >
                                                            <time dateTime="2019">
                                                                {work.time[0]}
                                                            </time>{" "}
                                                            <span aria-hidden="true">
                                                                —
                                                            </span>{" "}
                                                            <time dateTime="2022">
                                                                {work.time[1]}
                                                            </time>
                                                        </dd>
                                                    </dl>
                                                </li>
                                            ))}
                                        </ol>
                                        <button
                                            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                                            onClick={handleDownloadCV}
                                        >
                                            Download CV
                                            <FaDownload className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
